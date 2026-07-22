import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
import * as THREE from "three";

const projectRoot = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", projectRoot), "utf8");
const styles = await readFile(new URL("styles.css", projectRoot), "utf8");
const localGlobeSource = await readFile(new URL("xhs-tool-src/local-globe.js", projectRoot), "utf8");
const referencePalette = JSON.parse(await readFile(
  new URL("design-system/openwork/reference-palette.json", projectRoot),
  "utf8"
));
assert.ok(
  html.indexOf("https://unpkg.com/globe.gl@2.46.1/dist/globe.gl.min.js")
    < html.indexOf("https://unpkg.com/three@0.185.1/build/three.module.min.js"),
  "线上 Globe.gl 必须先于供圆钉使用的 Three.js 载入"
);
assert.doesNotMatch(html, /(?:src=|from )"\.?\/?node_modules\//, "GitHub Pages 不能依赖未发布的 node_modules 文件");
assert.match(html, /await import\("\.\/explore\.js(?:\?v=[^"]+)?"\)/, "岗位模块应在新版 Three.js 就绪后载入");
const localSphereSource = localGlobeSource.match(/_drawSphere\(context, layout\) \{[\s\S]*?\n    \}\n\n    _polygonRings/)?.[0] || "";
const localPointSource = localGlobeSource.match(/_drawPoints\(context, layout\) \{[\s\S]*?\n    \}\n\n    _drawRings/)?.[0] || "";
assert.doesNotMatch(localSphereSource, /createRadialGradient/, "小红书离线版海洋不应重新使用径向渐变");
assert.match(localGlobeSource, /context\.fillStyle = this\._waterColor/, "小红书离线版海洋应使用统一纯色");
assert.match(localGlobeSource, /const sheen = context\.createRadialGradient/, "小红书离线版图钉应保留参考图的轻微球面高光");
assert.match(localGlobeSource, /context\.lineWidth = Math\.max\(1\.35, layout\.radius \/ 480\)/, "小红书离线版国家边界应使用参考图的清晰白色描边");
assert.doesNotMatch(localPointSource, /strokeStyle\s*=\s*"rgba\(255,255,255,\.98\)"/, "小红书离线版图钉不应保留遮挡内容的白色外沿");
assert.match(styles, /--canvas: #e2edf8;/, "网页画布应使用参考图提取出的精确背景色");
assert.match(styles, /\.job-card\.is-details-open\s*\{[^}]*overflow-x:\s*hidden;/s, "展开岗位详情时不应出现横向滚动");
assert.match(styles, /\.job-card::\-webkit-scrollbar\s*\{[^}]*display:\s*none;/s, "岗位卡片滚动条应保持隐藏");
assert.match(styles, /\.wordmark-copy b\s*\{[^}]*font-size:\s*20px;/s, "OpenWork 文字标志应保持足够醒目的字号");
assert.equal(referencePalette.map.canvas, "#E2EDF8", "提取记录应保留参考图画布主色");
assert.equal(referencePalette.map.ocean, "#E1ECF7", "提取记录应保留参考图海洋主色");
assert.equal(Object.keys(referencePalette.pins).length, 14, "提取记录应完整保留参考图的十四种图钉颜色");
const world = JSON.parse(await readFile(
  new URL("node_modules/globe.gl/example/datasets/ne_110m_admin_0_countries.geojson", projectRoot),
  "utf8"
));
const dom = new JSDOM(html, {
  runScripts: "outside-only",
  pretendToBeVisual: true,
  url: "http://openwork.test/?view=explore&job=remoteok-1134975"
});
const { window } = dom;

window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
window.requestAnimationFrame = (callback) => window.setTimeout(() => callback(window.performance.now()), 0);
window.cancelAnimationFrame = window.clearTimeout;
window.fetch = async () => ({ ok: true, json: async () => world });
window.THREE = THREE;
window.HTMLCanvasElement.prototype.getContext = () => ({
  clearRect() {},
  beginPath() {},
  arc() {},
  fill() {},
  fillText() {},
  drawImage() {},
  set fillStyle(_) {},
  set font(_) {},
  set textAlign(_) {},
  set textBaseline(_) {}
});

const globeState = {
  handlers: {},
  controlHandlers: {},
  controls: null,
  polygons: [],
  objects: [],
  objectFactory: null,
  polygonCapColorAccessor: null,
  polygonAltitudeAccessor: null,
  polygonCapCurvatureResolution: null,
  objectAltitudeAccessor: null,
  globeMaterial: null,
  pov: { lat: 20, lng: 20, altitude: 1.22 },
  offset: [0, 0]
};

function createGlobe() {
  const controls = {
    autoRotate: false,
    enableZoom: true,
    enableRotate: true,
    enablePan: false,
    addEventListener(name, callback) { globeState.controlHandlers[name] = callback; }
  };
  globeState.controls = controls;
  const material = {
    color: { set() {} },
    emissive: { set() {} },
    specular: { set() {} },
    emissiveIntensity: 0,
    shininess: 0,
    needsUpdate: false
  };
  let proxy;
  const target = {
    controls: () => controls,
    renderer: () => ({ setPixelRatio() {}, shadowMap: { enabled: false, type: null } }),
    scene: () => ({ traverse() {} }),
    lights: () => [],
    globeMaterial(value) {
      if (value) {
        globeState.globeMaterial = value;
        return proxy;
      }
      return globeState.globeMaterial || material;
    },
    pointOfView(value) {
      if (!value) return globeState.pov;
      globeState.pov = { ...globeState.pov, ...value };
      return proxy;
    },
    globeOffset(value) {
      if (!value) return globeState.offset;
      globeState.offset = value;
      return proxy;
    },
    polygonsData(value) {
      if (!value) return globeState.polygons;
      globeState.polygons = value;
      return proxy;
    },
    polygonCapColor(value) {
      globeState.polygonCapColorAccessor = value;
      return proxy;
    },
    polygonAltitude(value) {
      globeState.polygonAltitudeAccessor = value;
      return proxy;
    },
    polygonCapCurvatureResolution(value) {
      globeState.polygonCapCurvatureResolution = value;
      return proxy;
    },
    objectAltitude(value) {
      globeState.objectAltitudeAccessor = value;
      return proxy;
    },
    objectsData(value) {
      if (!value) return globeState.objects;
      globeState.objects = value;
      return proxy;
    }
  };
  proxy = new Proxy(target, {
    get(object, property) {
      if (property in object) return object[property];
      return (...args) => {
        if (String(property).startsWith("on")) globeState.handlers[property] = args[0];
        if (property === "objectThreeObject") globeState.objectFactory = args[0];
        if (property === "onGlobeReady" && typeof args[0] === "function") window.setTimeout(args[0], 0);
        return proxy;
      };
    }
  });
  return proxy;
}

window.Globe = function Globe() { return createGlobe(); };

for (const filename of ["data.js", "data-month.js", "data-remote.js", "data-china.js", "data-locations.js", "explore.js"]) {
  window.eval(await readFile(new URL(filename, projectRoot), "utf8"));
}
if (window.document.readyState === "loading") {
  window.document.dispatchEvent(new window.Event("DOMContentLoaded"));
}

await new Promise((resolve) => window.setTimeout(resolve, 1000));

const mainlandJobs = window.WORK_JOBS.filter((job) => job.location?.endsWith("中国大陆"));
const mainlandCities = new Set(mainlandJobs.map((job) => job.mapCity));
assert.ok(mainlandJobs.length >= 30, "应补充足够数量的中国大陆官方岗位");
assert.deepEqual(
  [...mainlandCities].sort(),
  ["上海，中国大陆", "北京，中国大陆", "成都，中国大陆", "深圳，中国大陆", "苏州，中国大陆"].sort(),
  "中国大陆岗位应覆盖五座已核实城市"
);
assert.ok(mainlandJobs.every((job) => (
  job.mapPrecision === "city"
  && job.mapBasis === "job-city"
  && Number.isFinite(job.lat)
  && Number.isFinite(job.lng)
)), "中国大陆地图圆钉必须来自职位页明确城市");
assert.deepEqual(
  [...new Set(mainlandJobs.map((job) => job.company))].sort(),
  ["Apple", "Microsoft", "NVIDIA"],
  "中国大陆岗位应来自多个公司官方招聘渠道"
);
assert.ok(mainlandJobs.every((job) => /^https:\/\/(jobs\.apple\.com|apply\.careers\.microsoft\.com|nvidia\.wd5\.myworkdayjobs\.com)\//.test(job.sourceUrl)), "中国大陆岗位应保留官方申请链接");

assert.equal(window.document.body.classList.contains("is-explore"), true);
assert.equal(
  window.document.querySelectorAll(".header-status, .landing-kicker, .landing-lead, .landing-footnote, .landing-orbit-note").length,
  0,
  "首页应移除时间状态、标题前缀、说明文案与地球操作提示"
);
assert.equal(window.document.querySelectorAll("#category-toggle, #category-menu").length, 0, "底部应只保留搜索框，不再显示类型筛选");
assert.equal(window.document.querySelector("#job-card").hidden, false);
assert.ok(globeState.objects.length > 0, "岗位圆钉数据应载入");
assert.ok(globeState.polygons.length > 100, "国家板块应载入");
assert.equal(globeState.globeMaterial?.type, "MeshBasicMaterial", "海洋应使用不受灯光影响的纯色基础材质");
assert.equal(globeState.globeMaterial?.color.getHexString(), "e1ecf7", "海洋应严格使用参考图提取出的冰雾浅蓝");
const borderVertexCounts = globeState.polygons.flatMap((country) => (
  country.geometry.type === "Polygon"
    ? country.geometry.coordinates.map((ring) => ring.length)
    : country.geometry.coordinates.flatMap((polygon) => polygon.map((ring) => ring.length))
));
const maxBorderVertices = Math.max(...borderVertexCounts);
const borderRings = globeState.polygons.flatMap((country) => (
  country.geometry.type === "Polygon"
    ? country.geometry.coordinates
    : country.geometry.coordinates.flat()
));
assert.ok(borderRings.every((ring) => (
  ring.length >= 4
  && ring[0][0] === ring.at(-1)[0]
  && ring[0][1] === ring.at(-1)[1]
)), "国家轮廓应保持闭合，避免接缝穿模");
const neighboringPairs = globeState.polygons.flatMap((country, index) => (
  [...country._neighbors]
    .filter((neighbor) => neighbor > index)
    .map((neighbor) => [country, globeState.polygons[neighbor]])
));
assert.ok(neighboringPairs.length > 100, "应建立足够完整的国家相邻关系");
assert.ok(neighboringPairs.every(([first, second]) => first._paletteIndex !== second._paletteIndex), "相邻国家不能使用完全相同的颜色");
const countryColors = new Set(globeState.polygons.map(globeState.polygonCapColorAccessor));
const colorChannels = (color) => color.match(/[0-9a-f]{2}/gi).map((channel) => Number.parseInt(channel, 16));
const colorSaturationAndLightness = (color) => {
  const channels = colorChannels(color).map((channel) => channel / 255);
  const maximum = Math.max(...channels);
  const minimum = Math.min(...channels);
  const lightness = (maximum + minimum) / 2;
  const saturation = maximum === minimum ? 0 : (maximum - minimum) / (1 - Math.abs(2 * lightness - 1));
  return { saturation, lightness };
};
assert.ok(countryColors.size >= 8, "浅色国家色板仍应保留足够的色彩变化");
assert.ok([...countryColors].every((color) => {
  const channels = colorChannels(color);
  const average = channels.reduce((sum, channel) => sum + channel, 0) / channels.length;
  return average >= 205 && Math.max(...channels) - Math.min(...channels) <= 45;
}), "国家填充应使用参考图中的浅明度、低饱和莫兰迪色系");
const americas = globeState.polygons.filter((country) => country.properties?.REGION_UN === "Americas");
assert.ok(new Set(americas.map((country) => country._paletteIndex)).size >= 8, "美洲国家应使用多样化的莫兰迪配色");
const usaIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "United States of America");
const canadaIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "Canada");
const mexicoIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "Mexico");
assert.ok(globeState.polygons[usaIndex]._neighbors.has(canadaIndex), "美国与加拿大应识别为相邻国家");
assert.ok(globeState.polygons[usaIndex]._neighbors.has(mexicoIndex), "美国与墨西哥应识别为相邻国家");
assert.ok(globeState.polygonAltitudeAccessor(globeState.polygons[0]) >= 0.0055, "国家板块应整体抬离球体表面");
assert.ok(
  globeState.polygonCapCurvatureResolution > 0 && globeState.polygonCapCurvatureResolution <= 0.75,
  "国家盖面应使用更细的球面曲率细分，避免大板块和高纬度边缘出现三角穿模"
);
assert.ok(globeState.objectAltitudeAccessor() > globeState.polygonAltitudeAccessor(globeState.polygons[0]), "圆钉底座应位于国家板块上方");
globeState.pov.altitude = 1.22;
globeState.controlHandlers.end();
await new Promise((resolve) => window.setTimeout(resolve, 180));
const clusteredMarkerCount = globeState.objects.length;
assert.ok(globeState.objects.some((marker) => marker.isCluster), "默认打开页面时重叠岗位应保持聚合");
globeState.pov.altitude = 0.76;
globeState.controlHandlers.end();
await new Promise((resolve) => window.setTimeout(resolve, 180));
assert.ok(globeState.objects.length > clusteredMarkerCount, "从默认视角放大达到 40% 后聚合圆钉应拆分");
const expandedMarkerCount = globeState.objects.length;
globeState.pov.altitude = 0.77;
globeState.controlHandlers.end();
await new Promise((resolve) => window.setTimeout(resolve, 180));
assert.ok(globeState.objects.length < expandedMarkerCount, "回到默认视角放大幅度的 40% 以下时岗位应重新合并");
globeState.pov.altitude = 0.76;
globeState.controlHandlers.end();
await new Promise((resolve) => window.setTimeout(resolve, 180));
assert.equal(globeState.objects.length, expandedMarkerCount, "跨越 40% 阈值的双向行为应保持一致");
const samplePin = globeState.objectFactory(globeState.objects[0]);
assert.equal(samplePin.isGroup, true, "圆钉应使用三维组合对象");
assert.ok(samplePin.children.length >= 4, "圆钉应包含短针、钉头、公司标识和触控区域");
assert.ok(
  samplePin.children[1].geometry.parameters.radius >= 0.9
    && samplePin.children[1].geometry.parameters.radius <= 1.9,
  "岗位气泡应清晰可见，但不能遮挡国家分布"
);
assert.ok(Math.abs(samplePin.children[0].rotation.x - Math.PI / 2) < 1e-6, "黑色短针应垂直于地球表面");
assert.equal(samplePin.children[0].position.x, 0, "短针不能横向偏移");
assert.equal(samplePin.children[0].position.y, 0, "短针不能纵向偏移");
assert.equal(samplePin.children[1].position.x, 0, "圆头应与短针保持同轴");
assert.equal(samplePin.children[1].position.y, 0, "圆头应与短针保持同轴");
assert.ok(samplePin.children[1].position.z > samplePin.children[0].position.z, "圆头应位于短针正上方");
assert.ok(samplePin.children[0].geometry.parameters.height >= 0.7, "图钉针脚长度应接近参考图比例，不能退化成无针脚气泡");
assert.equal(samplePin.children[1].material.type, "MeshPhongMaterial", "图钉圆头应使用轻微球面高光材质");
assert.ok(samplePin.children.every((child) => child.geometry?.type !== "RingGeometry"), "岗位气泡不应再包含遮挡密集区域的白色光环");
assert.equal(samplePin.children[2].position.x, 0, "公司标识应居中在圆头上");
assert.equal(samplePin.children[2].position.y, 0, "公司标识应居中在圆头上");
assert.ok(samplePin.children[2].material.map, "圆钉头部应包含公司 Logo 或简称纹理");
assert.ok(samplePin.children[1].material.color.getHexString() !== "647cf1", "圆钉应使用独立的高纯度马卡龙配色");

window.document.querySelector("#work-globe").dispatchEvent(new window.Event("pointermove"));
assert.equal(globeState.controls.autoRotate, false, "鼠标活动时应立即停止自动旋转");
await new Promise((resolve) => window.setTimeout(resolve, 1850));
assert.equal(globeState.controls.autoRotate, true, "鼠标空闲后应恢复自动旋转");

const searchInput = window.document.querySelector("#job-search");
searchInput.value = "设计师";
searchInput.dispatchEvent(new window.Event("input", { bubbles: true }));
assert.match(window.location.search, /q=%E8%AE%BE%E8%AE%A1%E5%B8%88/, "关键词搜索应写入网址状态");
assert.match(window.document.querySelector("#result-label").textContent, /找到 \d+ 个岗位/, "搜索结果应显示匹配数量");
searchInput.value = "";
searchInput.dispatchEvent(new window.Event("input", { bubbles: true }));

const countryWithJobs = globeState.polygons.find((country) => country._jobs?.some((job) => job.category === "设计"));
assert.ok(countryWithJobs, "应找到包含设计岗位的国家");
const nextCountryWithJobs = globeState.polygons.find((country) => (
  country !== countryWithJobs && country._jobs?.some((job) => job.category === "设计")
));
assert.ok(nextCountryWithJobs, "应找到第二个包含设计岗位的国家");
const countryColorBeforeSelection = globeState.polygonCapColorAccessor(countryWithJobs);
const nextCountryColorBeforeSelection = globeState.polygonCapColorAccessor(nextCountryWithJobs);
globeState.handlers.onPolygonClick(countryWithJobs, { stopPropagation() {} });
assert.equal(window.document.querySelector("#job-card").hidden, false);
assert.equal(window.document.querySelector("#card-evidence").textContent, "国家岗位");
assert.match(window.document.querySelector("#card-posted").textContent, /岗位/);
const countryColorAfterSelection = globeState.polygonCapColorAccessor(countryWithJobs);
const beforeSelectionColor = colorSaturationAndLightness(countryColorBeforeSelection);
const afterSelectionColor = colorSaturationAndLightness(countryColorAfterSelection);
assert.ok(
  Math.abs(afterSelectionColor.saturation - Math.min(1, beforeSelectionColor.saturation * 3)) < 0.015,
  "选中国家后填充色纯度应提高 200%"
);
assert.ok(Math.abs(afterSelectionColor.lightness - beforeSelectionColor.lightness) < 0.01, "选中国家后填充色明度应保持不变");

globeState.handlers.onPolygonClick(nextCountryWithJobs, { stopPropagation() {} });
assert.equal(globeState.polygonCapColorAccessor(countryWithJobs), countryColorBeforeSelection, "切换国家后上一个国家应恢复原始纯度");
const nextCountryColorAfterSelection = globeState.polygonCapColorAccessor(nextCountryWithJobs);
const nextBeforeSelectionColor = colorSaturationAndLightness(nextCountryColorBeforeSelection);
const nextAfterSelectionColor = colorSaturationAndLightness(nextCountryColorAfterSelection);
assert.ok(
  Math.abs(nextAfterSelectionColor.saturation - Math.min(1, nextBeforeSelectionColor.saturation * 3)) < 0.015,
  "切换后新国家的填充色纯度应提高 200%"
);
await new Promise((resolve) => window.setTimeout(resolve, 200));
globeState.handlers.onGlobeClick();
assert.equal(globeState.polygonCapColorAccessor(nextCountryWithJobs), nextCountryColorBeforeSelection, "取消选择后国家应恢复原始纯度");

const countryWithoutJobs = globeState.polygons.find((country) => !(country._jobs || []).length);
assert.ok(countryWithoutJobs, "应找到暂无岗位的国家用于状态切换测试");
const emptyCountryColor = globeState.polygonCapColorAccessor(countryWithoutJobs);
globeState.handlers.onPolygonClick(countryWithoutJobs, { stopPropagation() {} });
assert.equal(window.document.querySelector("#result-sheet").hidden, false, "暂无岗位的国家应显示空结果说明");
assert.notEqual(globeState.polygonCapColorAccessor(countryWithoutJobs), emptyCountryColor, "暂无岗位的国家也应显示选中反馈");
globeState.handlers.onObjectClick(globeState.objects[0], { stopPropagation() {} });
assert.equal(window.document.querySelector("#result-sheet").hidden, true, "点击岗位后应关闭上一个国家的空结果说明");
assert.equal(globeState.polygonCapColorAccessor(countryWithoutJobs), emptyCountryColor, "从国家切换到岗位后应恢复国家基础色");
assert.equal(window.document.querySelector("#job-card").hidden, false, "点击岗位后应显示岗位详情");

console.log(JSON.stringify({
  searchOnly: true,
  countries: globeState.polygons.length,
  markers: globeState.objects.length,
  clusteredMarkers: clusteredMarkerCount,
  expandedMarkers: expandedMarkerCount,
  maxBorderVertices,
  countrySelection: window.document.querySelector("#card-posted").textContent
}));

dom.window.close();
