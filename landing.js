(function () {
  "use strict";

  const jobs = window.WORK_JOBS || [];
  const categories = window.WORK_CATEGORIES || {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isNarrow = window.matchMedia("(max-width: 760px)").matches;
  const globeElement = document.querySelector("#landing-globe");
  const loadingElement = document.querySelector("#landing-loading");
  let globe = null;
  let ready = false;

  function spreadSharedLocations(list) {
    const groups = new Map();
    list.forEach((job) => {
      const key = `${Number(job.lat).toFixed(3)}|${Number(job.lng).toFixed(3)}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(job);
    });
    groups.forEach((group) => {
      group.forEach((job, index) => {
        if (group.length === 1) {
          job.mapLat = job.lat;
          job.mapLng = job.lng;
          return;
        }
        const radius = Math.min(6, 0.14 + Math.sqrt(index) * 0.3);
        const angle = index * 2.399963;
        const longitudeScale = Math.max(0.4, Math.cos(job.lat * Math.PI / 180));
        job.mapLat = job.lat + Math.sin(angle) * radius;
        job.mapLng = job.lng + Math.cos(angle) * radius / longitudeScale;
      });
    });
  }

  spreadSharedLocations(jobs);

  function hexToRgba(hex, alpha) {
    const value = Number.parseInt(String(hex).replace("#", ""), 16);
    return `rgba(${(value >> 16) & 255},${(value >> 8) & 255},${value & 255},${alpha})`;
  }

  function colorFor(job) {
    return categories[job.category]?.color || "#647cf1";
  }

  function radiusFor(job) {
    return 0.17 + Math.min(0.7, Math.log10((job.attention || 0) + 10) * 0.15);
  }

  function landColor(feature) {
    const palette = ["#e4dfd5", "#e7e3da", "#dddcd3", "#e8dfd8", "#dbe1dc"];
    const name = String(feature.properties?.ISO_A3 || feature.properties?.ADMIN || "land");
    const index = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palette.length;
    return palette[index];
  }

  function hideLoading() {
    if (ready) return;
    ready = true;
    loadingElement?.classList.add("is-hidden");
  }

  function resize() {
    if (!globe) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const offsetX = isNarrow ? Math.round(width * 0.12) : Math.round(width * 0.25);
    const offsetY = isNarrow ? Math.round(height * 0.25) : 0;
    globe.width(width).height(height).globeOffset([offsetX, offsetY]);
    globe.pointOfView({ lat: 20, lng: 24, altitude: isNarrow ? 2.15 : 1.62 }, 0);
  }

  async function loadLand() {
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/vasturiano/globe.gl@master/example/datasets/ne_110m_admin_0_countries.geojson");
      if (!response.ok) throw new Error(String(response.status));
      const world = await response.json();
      globe?.polygonsData(world.features || []);
    } catch (_) {
      // 网络不稳定时仍保留球体与工作光点。
    }
  }

  function initialize() {
    if (!window.Globe || !globeElement) {
      hideLoading();
      return;
    }

    try {
      try {
        globe = new window.Globe(globeElement, { animateIn: !reducedMotion, waitForGlobeReady: true });
      } catch (_) {
        globe = window.Globe({ animateIn: !reducedMotion, waitForGlobeReady: true })(globeElement);
      }

      globe
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl(null)
        .bumpImageUrl(null)
        .showAtmosphere(true)
        .atmosphereColor("#bdcfd2")
        .atmosphereAltitude(0.12)
        .showGraticules(false)
        .polygonsData([])
        .polygonAltitude(0.006)
        .polygonCapColor(landColor)
        .polygonSideColor(() => "rgba(179, 190, 187, 0.22)")
        .polygonStrokeColor(() => "rgba(255,255,255,0.7)")
        .pointsData(jobs)
        .pointLat("mapLat")
        .pointLng("mapLng")
        .pointAltitude((job) => job.remote ? 0.007 : 0.003)
        .pointRadius(radiusFor)
        .pointColor((job) => hexToRgba(colorFor(job), job.remote ? 0.72 : 0.84))
        .pointResolution(9)
        .pointLabel(() => "")
        .onGlobeReady(hideLoading);

      const material = globe.globeMaterial();
      if (material) {
        material.color.set("#c9d7d8");
        material.emissive.set("#edf2ef");
        material.emissiveIntensity = 0.22;
        material.shininess = 3;
      }

      const controls = globe.controls();
      controls.autoRotate = !reducedMotion;
      controls.autoRotateSpeed = 0.18;
      controls.enableZoom = false;
      controls.enableRotate = false;
      controls.enablePan = false;

      const renderer = typeof globe.renderer === "function" ? globe.renderer() : null;
      if (renderer) renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isNarrow ? 1.35 : 1.8));

      resize();
      loadLand();
    } catch (_) {
      hideLoading();
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  window.setTimeout(hideLoading, 5000);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
