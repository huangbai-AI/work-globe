import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
import * as THREE from "three";

const projectRoot = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", projectRoot), "utf8");
assert.ok(
  html.indexOf("node_modules/globe.gl/dist/globe.gl.min.js") < html.indexOf("node_modules/three/build/three.module.min.js"),
  "Globe.gl 必须先于供圆钉使用的 Three.js 载入"
);
assert.match(html, /await import\("\.\/explore\.js"\)/, "岗位模块应在新版 Three.js 就绪后载入");
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
  polygonAltitudeAccessor: null,
  objectAltitudeAccessor: null,
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
    globeMaterial: () => material,
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
    polygonAltitude(value) {
      globeState.polygonAltitudeAccessor = value;
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
assert.equal(window.document.querySelectorAll(".category-option").length, 16);
assert.equal(window.document.querySelectorAll("#category-toggle").length, 1, "分类与箭头应合并为同一控件");
assert.equal(window.document.querySelector("#category-toggle span").textContent, "全部类型");
assert.equal(window.document.querySelector("#job-card").hidden, false);
assert.ok(globeState.objects.length > 0, "岗位圆钉数据应载入");
assert.ok(globeState.polygons.length > 100, "国家板块应载入");
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
const americas = globeState.polygons.filter((country) => country.properties?.REGION_UN === "Americas");
assert.ok(new Set(americas.map((country) => country._paletteIndex)).size >= 8, "美洲国家应使用多样化的莫兰迪配色");
const usaIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "United States of America");
const canadaIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "Canada");
const mexicoIndex = globeState.polygons.findIndex((country) => country.properties?.ADMIN === "Mexico");
assert.ok(globeState.polygons[usaIndex]._neighbors.has(canadaIndex), "美国与加拿大应识别为相邻国家");
assert.ok(globeState.polygons[usaIndex]._neighbors.has(mexicoIndex), "美国与墨西哥应识别为相邻国家");
assert.ok(globeState.polygonAltitudeAccessor(globeState.polygons[0]) >= 0.0055, "国家板块应整体抬离球体表面");
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
assert.ok(samplePin.children[1].geometry.parameters.radius >= 1.3, "单个岗位钉头应放大约四倍");
assert.ok(Math.abs(samplePin.children[0].rotation.x - Math.PI / 2) < 1e-6, "黑色短针应垂直于地球表面");
assert.equal(samplePin.children[0].position.x, 0, "短针不能横向偏移");
assert.equal(samplePin.children[0].position.y, 0, "短针不能纵向偏移");
assert.equal(samplePin.children[1].position.x, 0, "圆头应与短针保持同轴");
assert.equal(samplePin.children[1].position.y, 0, "圆头应与短针保持同轴");
assert.ok(samplePin.children[1].position.z > samplePin.children[0].position.z, "圆头应位于短针正上方");
assert.equal(samplePin.children[2].position.x, 0, "公司标识应居中在圆头上");
assert.equal(samplePin.children[2].position.y, 0, "公司标识应居中在圆头上");
assert.ok(samplePin.children[2].material.map, "圆钉头部应包含公司 Logo 或简称纹理");
assert.ok(samplePin.children[1].material.color.getHexString() !== "647cf1", "圆钉应使用独立的高纯度马卡龙配色");

window.document.querySelector("#work-globe").dispatchEvent(new window.Event("pointermove"));
assert.equal(globeState.controls.autoRotate, false, "鼠标活动时应立即停止自动旋转");
await new Promise((resolve) => window.setTimeout(resolve, 1850));
assert.equal(globeState.controls.autoRotate, true, "鼠标空闲后应恢复自动旋转");

window.document.querySelector("#category-toggle").click();
assert.equal(window.document.querySelector("#category-menu").hidden, false);
window.document.querySelector('[data-category="设计"]').click();
assert.equal(window.document.querySelector("#category-toggle span").textContent, "设计");
assert.match(window.location.search, /category=%E8%AE%BE%E8%AE%A1/);

const countryWithJobs = globeState.polygons.find((country) => country._jobs?.some((job) => job.category === "设计"));
assert.ok(countryWithJobs, "应找到包含设计岗位的国家");
globeState.handlers.onPolygonClick(countryWithJobs, { stopPropagation() {} });
assert.equal(window.document.querySelector("#job-card").hidden, false);
assert.equal(window.document.querySelector("#card-evidence").textContent, "国家岗位");
assert.match(window.document.querySelector("#card-posted").textContent, /岗位/);

console.log(JSON.stringify({
  categories: 16,
  countries: globeState.polygons.length,
  markers: globeState.objects.length,
  clusteredMarkers: clusteredMarkerCount,
  expandedMarkers: expandedMarkerCount,
  maxBorderVertices,
  countrySelection: window.document.querySelector("#card-posted").textContent
}));

dom.window.close();
