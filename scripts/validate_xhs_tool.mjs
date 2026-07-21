import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const archive = path.join(root, "releases", "openwork-xhs.zip");
const allowedExtensions = new Set([
  ".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg",
  ".woff", ".woff2", ".json"
]);
const textExtensions = new Set([".html", ".css", ".js", ".svg", ".json"]);
const forbiddenContent = [
  [/(?:https?|wss?):\/\//i, "外部网址"],
  [/\bfetch\s*\(|XMLHttpRequest|new\s+WebSocket\s*\(|new\s+EventSource\s*\(|new\s+RTCPeerConnection\s*\(/, "网络或实时通信"],
  [/navigator\.geolocation|navigator\.clipboard|document\.execCommand\s*\(\s*["'](?:copy|cut|paste)/, "定位或剪贴板"],
  [/navigator\.(?:bluetooth|usb|hid|serial|getBattery|connection|credentials|locks)/, "受限设备能力"],
  [/enumerateDevices|getDisplayMedia|navigator\.storage\.persist|navigator\.serviceWorker/, "受限系统能力"],
  [/new\s+(?:Shared)?Worker\s*\(|DeviceMotionEvent|DeviceOrientationEvent|new\s+(?:Accelerometer|Gyroscope|Magnetometer)\s*\(/, "后台线程或传感器"],
  [/requestFullscreen|webkitRequestFullscreen|\beval\s*\(|new\s+Function\s*\(|WebAssembly\./, "动态执行或全屏"],
  [/window\.open\s*\(|window\.prompt\s*\(|target\s*=\s*["']_blank["']|<\s*(?:iframe|object|base)\b/i, "外链、弹窗或嵌入页面"],
  [/<a\b[^>]*\bdownload(?:\s|=|>)/i, "文件下载"]
];

function fail(message) {
  throw new Error(message);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: "utf8", ...options });
  if (result.status !== 0) fail(result.stderr || result.stdout || `${command} 执行失败`);
  return result.stdout;
}

function localReferences(html, cssFiles) {
  const refs = [];
  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) refs.push(match[1]);
  for (const css of cssFiles) {
    for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) refs.push(match[1]);
  }
  return refs.filter((ref) => !ref.startsWith("#") && !ref.startsWith("data:") && !ref.startsWith("blob:"));
}

async function main() {
  const archiveStat = await fs.stat(archive).catch(() => null);
  if (!archiveStat) fail(`未找到产物：${archive}`);
  const entries = run("unzip", ["-Z1", archive]).split("\n").filter(Boolean);
  if (!entries.includes("index.html")) fail("index.html 不在 zip 根目录");
  if (entries.filter((entry) => path.basename(entry) === "index.html").length !== 1) {
    fail("zip 中必须有且只有一个 index.html");
  }
  for (const entry of entries) {
    if (entry.startsWith("/") || entry.split("/").includes("..")) fail(`不安全的路径：${entry}`);
    if (entry.endsWith("/")) continue;
    if (!allowedExtensions.has(path.extname(entry).toLowerCase())) fail(`不支持的文件类型：${entry}`);
    if (/(^|\/)(?:node_modules|\.git)(?:\/|$)|\.DS_Store$|\.map$/i.test(entry)) fail(`开发文件不应入包：${entry}`);
    if (/(^|\/)(?:vite|webpack)\.config\./i.test(entry)) fail(`构建配置不应入包：${entry}`);
  }

  const temporary = await fs.mkdtemp(path.join(os.tmpdir(), "openwork-xhs-"));
  try {
    run("unzip", ["-q", archive, "-d", temporary]);
    const files = entries.filter((entry) => !entry.endsWith("/"));
    const contents = new Map();
    let unpackedBytes = 0;
    for (const filename of files) {
      const filePath = path.join(temporary, filename);
      const stat = await fs.stat(filePath);
      unpackedBytes += stat.size;
      if (/\.(?:png|jpe?g|gif|webp)$/i.test(filename) && stat.size > 500 * 1024) {
        fail(`单图超过 500KB：${filename}`);
      }
      if (textExtensions.has(path.extname(filename).toLowerCase())) {
        contents.set(filename, await fs.readFile(filePath, "utf8"));
      }
      if (filename.endsWith(".js")) run(process.execPath, ["--check", filePath]);
    }

    const html = contents.get("index.html") || "";
    if (!/^\s*<!doctype html>/i.test(html)) fail("index.html 缺少 DOCTYPE");
    if (!/<html\b[^>]*lang=["']zh-CN["']/i.test(html)) fail("index.html 缺少 lang=zh-CN");
    if (!/<meta\b[^>]*charset=["']?UTF-8/i.test(html)) fail("index.html 缺少 UTF-8 charset");
    const viewport = html.match(/<meta\b[^>]*name=["']viewport["'][^>]*content=["']([^"']+)["']/i)?.[1] || "";
    for (const token of ["width=device-width", "initial-scale=1", "viewport-fit=cover"]) {
      if (!viewport.includes(token)) fail(`viewport 缺少 ${token}`);
    }
    if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) fail("存在内联脚本");
    if (/\son[a-z]+\s*=|javascript:/i.test(html)) fail("存在行内事件或 javascript: URI");

    const cssFiles = [...contents].filter(([filename]) => filename.endsWith(".css")).map(([, value]) => value);
    const refs = localReferences(html, cssFiles);
    for (const ref of refs) {
      if (/^(?:[a-z]+:)?\/\//i.test(ref) || ref.startsWith("/")) fail(`资源不是本地相对路径：${ref}`);
      const clean = ref.split(/[?#]/)[0].replace(/^\.\//, "");
      if (clean && !entries.includes(clean)) fail(`引用资源未入包：${ref}`);
    }

    for (const [filename, content] of contents) {
      if (filename.endsWith(".svg")) continue;
      for (const [pattern, label] of forbiddenContent) {
        if (pattern.test(content)) fail(`${filename} 包含禁用能力：${label}`);
      }
    }

    const scripts = [...html.matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi)]
      .map((match) => match[1].replace(/^\.\//, ""));
    const expectedOrder = ["mode-xhs.js", "world-data.js", "local-globe.js", "jobs-data.js", "explore.js"];
    if (expectedOrder.some((filename, index) => scripts[index] !== filename)) {
      fail(`脚本加载顺序不正确：${scripts.join(" → ")}`);
    }
    for (const id of ["start-explore", "work-globe", "job-search", "job-card", "card-apply"]) {
      if (!html.includes(`id=\"${id}\"`)) fail(`缺少核心交互节点：${id}`);
    }
    if (!/<button\b[^>]*id=["']card-apply["']/i.test(html)) fail("立即投递必须是可操作按钮");

    console.log(JSON.stringify({
      valid: true,
      archive,
      files: files.length,
      archiveBytes: archiveStat.size,
      unpackedBytes,
      scripts,
      offline: true,
      syntaxChecked: files.filter((filename) => filename.endsWith(".js")).length
    }, null, 2));
  } finally {
    await fs.rm(temporary, { recursive: true, force: true });
  }
}

await main();
