import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";

const root = new URL("../xhs-tool-dist/", import.meta.url);
const html = await readFile(new URL("index.html", root), "utf8");
const xhsOverrides = await readFile(new URL("xhs-overrides.css", root), "utf8");
const dom = new JSDOM(html, {
  runScripts: "outside-only",
  pretendToBeVisual: true,
  url: "https://mini-tool.local/"
});
const { window } = dom;
const runtimeErrors = [];
let frameBudget = 12;
let drawCount = 0;

window.addEventListener("error", (event) => runtimeErrors.push(event.error || event.message));
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
window.requestAnimationFrame = (callback) => {
  if (frameBudget <= 0) return 0;
  frameBudget -= 1;
  return window.setTimeout(() => callback(window.performance.now()), 0);
};
window.cancelAnimationFrame = window.clearTimeout;
window.HTMLCanvasElement.prototype.getContext = () => ({
  save() {}, restore() {}, setTransform() {}, clearRect() {}, beginPath() {}, arc() {},
  fill() { drawCount += 1; }, stroke() { drawCount += 1; }, clip() {}, moveTo() {}, lineTo() {},
  createRadialGradient() { return { addColorStop() {} }; },
  set fillStyle(_) {}, set strokeStyle(_) {}, set lineWidth(_) {}, set lineJoin(_) {},
  set shadowColor(_) {}, set shadowBlur(_) {}, set shadowOffsetY(_) {}, set globalAlpha(_) {}
});

for (const filename of ["mode-xhs.js", "world-data.js", "local-globe.js", "jobs-data.js", "explore.js"]) {
  window.eval(await readFile(new URL(filename, root), "utf8"));
}
if (window.document.readyState === "loading") {
  window.document.dispatchEvent(new window.Event("DOMContentLoaded"));
}

await new Promise((resolve) => window.setTimeout(resolve, 180));

const empty = window.document.querySelector("#globe-empty");
const canvas = window.document.querySelector("#work-globe canvas");
assert.ok(canvas, "小红书离线包必须创建地球画布");
assert.match(xhsOverrides, /--xhs-safe-top:\s*max\(env\(safe-area-inset-top, 0px\), 28px\)/, "小红书页头应为刘海区域保留不少于 28px 的安全距离");
assert.match(xhsOverrides, /\.is-xhs-tool \.app-header\s*\{[^}]*height:\s*calc\(72px \+ var\(--xhs-safe-top\)\);[^}]*padding:\s*var\(--xhs-safe-top\) 19px 0 72px;/s, "小红书品牌标志应与系统返回按钮同高并向右避让");
assert.match(xhsOverrides, /\.is-xhs-tool \.job-card\s*\{[^}]*top:\s*calc\(88px \+ var\(--xhs-safe-top\)\)/s, "小红书岗位卡片应跟随顶部安全区下移");
assert.match(xhsOverrides, /\.is-xhs-tool \.job-card\s*\{[^}]*width:\s*calc\(100vw - 48px\);[^}]*overflow:\s*visible;/s, "小红书岗位卡片应为边缘翻页键留出完整显示空间");
assert.match(xhsOverrides, /\.is-xhs-tool \.job-card\s*\{[^}]*padding-right:\s*38px;[^}]*padding-left:\s*38px;/s, "小红书岗位卡片应收紧内部留白以扩大内容宽度");
assert.match(xhsOverrides, /\.is-xhs-tool \.card-switch-prev\s*\{[^}]*left:\s*-22px;[^}]*\}[\s\S]*?\.is-xhs-tool \.card-switch-next\s*\{[^}]*right:\s*-22px;/s, "小红书翻页键应卡在卡片左右边缘");
assert.match(xhsOverrides, /\.is-xhs-tool \.reset-view\s*\{[^}]*display:\s*none;/s, "小红书小组件不应显示被岗位卡片遮挡的重置按钮");
assert.match(xhsOverrides, /\.is-xhs-tool\.is-explore \.shared-earth\s*\{[^}]*translate3d\(0, 18px, 0\)/s, "小红书探索页地球应与岗位卡片留出清晰间隔");
assert.equal(empty.hidden, true, "地球初始化成功后不应显示加载失败提示");
assert.equal(window.document.body.classList.contains("is-ui-ready"), true, "离线地球就绪后应完成首屏入场");
assert.ok(drawCount > 0, "离线地球必须实际执行海洋、国家与图钉绘制");
assert.equal(runtimeErrors.length, 0, `离线包初始化出现异常：${runtimeErrors.join("；")}`);

window.document.querySelector("#start-explore").click();
assert.equal(window.document.body.classList.contains("is-explore"), true, "点击探索岗位后应进入岗位地图");
assert.equal(window.document.querySelector("#job-card").hidden, false, "进入地图后应直接显示首个岗位卡片");

console.log(JSON.stringify({
  valid: true,
  jobs: window.WORK_JOBS.length,
  canvas: Boolean(canvas),
  drawCount,
  runtimeErrors: runtimeErrors.length
}));

dom.window.close();
