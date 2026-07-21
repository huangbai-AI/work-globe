import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
import * as THREE from "three";

const projectRoot = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", projectRoot), "utf8");
assert.ok(
  html.indexOf("node_modules/globe.gl/dist/globe.gl.min.js") < html.indexOf("node_modules/three/build/three.min.js"),
  "Globe.gl 必须先于供圆钉使用的 Three.js 载入"
);
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

const globeState = {
  handlers: {},
  controlHandlers: {},
  controls: null,
  polygons: [],
  objects: [],
  objectFactory: null,
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

for (const filename of ["data.js", "data-month.js", "data-remote.js", "data-locations.js", "explore.js"]) {
  window.eval(await readFile(new URL(filename, projectRoot), "utf8"));
}
if (window.document.readyState === "loading") {
  window.document.dispatchEvent(new window.Event("DOMContentLoaded"));
}

await new Promise((resolve) => window.setTimeout(resolve, 1000));

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
const clusteredMarkerCount = globeState.objects.length;
globeState.pov.altitude = 1;
globeState.controlHandlers.end();
await new Promise((resolve) => window.setTimeout(resolve, 180));
assert.ok(globeState.objects.length > clusteredMarkerCount, "放大过半后聚合圆钉应拆分");
const expandedMarkerCount = globeState.objects.length;
const samplePin = globeState.objectFactory(globeState.objects[0]);
assert.equal(samplePin.isGroup, true, "圆钉应使用三维组合对象");
assert.ok(samplePin.children.length >= 3, "圆钉应包含钉头、短针和触控区域");
assert.ok(samplePin.children[1].geometry.parameters.radius >= 1.3, "单个岗位钉头应放大约四倍");
assert.ok(Math.abs(samplePin.children[0].position.y) > 0.1, "短针应从钉头下方清晰露出");

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
