import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const dist = path.join(root, "xhs-tool-dist");
const releases = path.join(root, "releases");
const archive = path.join(releases, "openwork-xhs.zip");
const source = path.join(root, "xhs-tool-src");

const WORLD_DATA_URL = "https://cdn.jsdelivr.net/gh/vasturiano/globe.gl@master/example/datasets/ne_110m_admin_0_countries.geojson";
const DATA_FILES = ["data.js", "data-month.js", "data-remote.js", "data-china.js", "data-locations.js"];

async function loadJobs() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  for (const filename of DATA_FILES) {
    const code = await fs.readFile(path.join(root, filename), "utf8");
    vm.runInContext(code, sandbox, { filename });
  }
  return sandbox.window;
}

function compactJob(job) {
  const allowed = [
    "id", "title", "company", "category", "location", "lat", "lng", "remote",
    "salary", "posted", "postedAt", "attention", "source", "summary", "tags",
    "evidence", "mapCity", "mapPrecision", "mapBasis"
  ];
  const sanitize = (value) => {
    if (typeof value === "string") {
      return value
        .replace(/\bURL:\s*(?:https?|wss?):\/\/\S+/gi, "")
        .replace(/(?:https?|wss?):\/\/\S+/gi, "")
        .replace(/\s{2,}/g, " ")
        .trim();
    }
    if (Array.isArray(value)) return value.map(sanitize);
    return value;
  };
  return Object.fromEntries(allowed
    .filter((key) => job[key] !== undefined && job[key] !== null)
    .map((key) => [key, sanitize(job[key])]));
}

function makeJobsScript(windowData) {
  const jobs = (windowData.WORK_JOBS || []).map(compactJob);
  const categories = windowData.WORK_CATEGORIES || {};
  const meta = {
    ...(windowData.WORK_DATA_META || {}),
    total: jobs.length,
    packagedAt: new Date().toISOString(),
    packageMode: "offline"
  };
  return [
    "(function () {",
    "  \"use strict\";",
    `  window.WORK_CATEGORIES=${JSON.stringify(categories)};`,
    `  window.WORK_DATA_META=${JSON.stringify(meta)};`,
    `  window.WORK_JOBS=${JSON.stringify(jobs)};`,
    "})();",
    ""
  ].join("\n");
}

async function loadWorldFeatures() {
  const response = await fetch(WORLD_DATA_URL);
  if (!response.ok) throw new Error(`世界边界下载失败：${response.status}`);
  const payload = await response.json();
  if (!Array.isArray(payload.features) || !payload.features.length) {
    throw new Error("世界边界数据为空");
  }
  return payload.features;
}

function makeOfflineApp(sourceCode) {
  let code = sourceCode;
  code = code.replace(
    /  function syncUrl\(mode = "replace"\) \{[\s\S]*?\n  \}\n\n  function refreshGlobePoints/,
    "  function syncUrl() { return; }\n\n  function refreshGlobePoints"
  );
  code = code.replace(
    /  function configureApplyLink\(job\) \{[\s\S]*?\n  \}\n\n  function renderCard/,
    [
      "  function configureApplyLink(job) {",
      "    els.cardApply.removeAttribute(\"href\");",
      "    els.cardApply.classList.add(\"is-offline\");",
      "    els.cardApply.setAttribute(\"aria-label\", `获取 ${job.title} 的投递方式`);",
      "  }",
      "",
      "  function renderCard"
    ].join("\n")
  );
  code = code.replace(
    /  async function loadLand\(\) \{[\s\S]*?\n  \}\n\n  function hideLoading/,
    [
      "  function loadLand() {",
      "    state.globe?.polygonsData(Array.isArray(window.WORLD_COUNTRIES) ? window.WORLD_COUNTRIES : []);",
      "  }",
      "",
      "  function hideLoading"
    ].join("\n")
  );
  code = code.replace(
    /    if \(!xhsMode\) \{\n      window\.addEventListener\("popstate", \(\) => \{[\s\S]*?\n      \}\);\n    \}\n/,
    ""
  );
  return code;
}

function makeOfflineHtml(sourceHtml) {
  let html = sourceHtml;
  html = html.replace(/    <link rel="icon"[^>]*>\n/, "    <link rel=\"icon\" href=\"icon.svg\" />\n");
  html = html.replace(/    <link rel="preconnect"[^>]*>\n/g, "");
  html = html.replace(
    "    <link rel=\"stylesheet\" href=\"styles.css\" />",
    "    <link rel=\"stylesheet\" href=\"styles.css\" />\n    <link rel=\"stylesheet\" href=\"xhs-overrides.css\" />"
  );
  html = html.replace(
    /    <script src="node_modules\/globe\.gl\/dist\/globe\.gl\.min\.js"><\/script>\n    <script src="data\.js"><\/script>\n    <script src="data-month\.js"><\/script>\n    <script src="data-remote\.js"><\/script>\n    <script src="data-china\.js"><\/script>\n    <script src="data-locations\.js"><\/script>\n    <script type="module">\n      import \* as THREE from "\.\/node_modules\/three\/build\/three\.module\.min\.js";\n      window\.THREE = THREE;\n      await import\("\.\/explore\.js(?:\?v=[^"]+)?"\);\n    <\/script>/,
    [
      "    <script defer src=\"mode-xhs.js\"></script>",
      "    <script defer src=\"world-data.js\"></script>",
      "    <script defer src=\"local-globe.js\"></script>",
      "    <script defer src=\"jobs-data.js\"></script>"
    ].join("\n")
  );
  if (html.includes("node_modules/globe.gl") || html.includes("data-china.js")) {
    throw new Error("离线页面的数据脚本替换失败");
  }
  html = html.replace(' href="#" target="_blank" rel="noreferrer noopener"', "");
  return html;
}

function assertOfflineBundle(files) {
  const forbidden = [
    [/(?:https?|wss?):\/\//i, "外部网址"],
    [/\bfetch\s*\(/, "网络请求"],
    [/XMLHttpRequest|WebSocket|EventSource|RTCPeerConnection/, "联网接口"],
    [/(?:Shared)?Worker\s*\(|serviceWorker/, "后台线程"],
    [/WebAssembly|\beval\s*\(|new Function/, "动态执行"],
    [/window\.open|target\s*=\s*["']_blank/i, "外部窗口"],
    [/<(?:iframe|object)\b/i, "嵌入页面"],
    [/navigator\.clipboard|geolocation|requestFullscreen/, "受限系统能力"]
  ];
  const violations = [];
  for (const [filename, content] of files) {
    if (filename.endsWith(".svg") || filename.endsWith(".png")) continue;
    for (const [pattern, label] of forbidden) {
      if (pattern.test(content)) violations.push(`${filename}：${label}`);
    }
  }
  if (violations.length) throw new Error(`离线包包含禁用能力：\n${violations.join("\n")}`);
}

async function main() {
  const windowData = await loadJobs();
  const features = await loadWorldFeatures();
  const sourceHtml = await fs.readFile(path.join(root, "index.html"), "utf8");
  const sourceApp = await fs.readFile(path.join(root, "explore.js"), "utf8");

  const outputFiles = new Map([
    ["index.html", makeOfflineHtml(sourceHtml)],
    ["styles.css", await fs.readFile(path.join(root, "styles.css"), "utf8")],
    ["xhs-overrides.css", await fs.readFile(path.join(source, "xhs-overrides.css"), "utf8")],
    ["mode-xhs.js", await fs.readFile(path.join(source, "mode-xhs.js"), "utf8")],
    ["local-globe.js", await fs.readFile(path.join(source, "local-globe.js"), "utf8")],
    ["jobs-data.js", makeJobsScript(windowData)],
    ["world-data.js", `(function(){\"use strict\";window.WORLD_COUNTRIES=${JSON.stringify(features)};})();\n`],
    ["explore.js", makeOfflineApp(sourceApp)],
    ["icon.svg", await fs.readFile(path.join(source, "icon.svg"), "utf8")],
    ["openwork-mark.png", await fs.readFile(path.join(root, "openwork-mark.png"))]
  ]);

  assertOfflineBundle(outputFiles);
  await fs.rm(dist, { recursive: true, force: true });
  await fs.mkdir(dist, { recursive: true });
  await fs.mkdir(releases, { recursive: true });
  await Promise.all([...outputFiles].map(([filename, content]) =>
    fs.writeFile(path.join(dist, filename), content)
  ));

  await fs.rm(archive, { force: true });
  const zip = spawnSync("zip", ["-q", "-r", archive, "."], { cwd: dist, encoding: "utf8" });
  if (zip.status !== 0) throw new Error(zip.stderr || "压缩失败");

  const cityJobs = (windowData.WORK_JOBS || []).filter((job) =>
    job.mapPrecision === "city" && Number.isFinite(job.lat) && Number.isFinite(job.lng));
  const archiveSize = (await fs.stat(archive)).size;
  console.log(JSON.stringify({
    totalJobs: windowData.WORK_JOBS.length,
    cityJobs: cityJobs.length,
    countries: features.length,
    files: outputFiles.size,
    archive,
    archiveBytes: archiveSize
  }, null, 2));
}

await main();
