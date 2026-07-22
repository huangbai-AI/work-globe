(function () {
  "use strict";

  const xhsMode = Boolean(window.XHS_TOOL_MODE);
  const jobs = window.WORK_JOBS || [];
  const mapJobs = jobs.filter((job) => job.mapPrecision === "city"
    && Number.isFinite(job.lat)
    && Number.isFinite(job.lng));
  const categories = window.WORK_CATEGORIES || {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const exploreHomeView = Object.freeze({ lat: 38, lng: -98 });
  const params = xhsMode ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const initialExplore = params.get("view") === "explore"
    || params.has("q")
    || params.has("job");
  const countryPalette = [
    "#E6CCCB", "#CBD6CD", "#C8D4E6", "#E8D9C4", "#D9CEE1",
    "#E5D2D3", "#CAD6D1", "#E8D3BD", "#C7C8DC", "#E2CDD0"
  ];
  const oceanColor = "#C4DAE6";
  const atmosphereColor = "#FFFFFF";
  const countryHueGroups = [0, 1, 2, 3, 4, 0, 5, 3, 2, 4];
  const countryCapCurvatureResolution = 0.75;
  const clusterSplitThreshold = 0.4;
  const markerIdleScale = 0.6;
  const clusterIdleScale = 0.66;
  const markerHoverMultiplier = 1.75;
  const markerScaleDuration = 210;
  const pinPalette = [
    "#F7C31A", "#2181D5", "#48934B", "#F3842D", "#C12633",
    "#419492", "#74509A", "#B31727", "#409291", "#704A95",
    "#CF5A0C", "#A77F48", "#454F7C", "#E96090"
  ];
  const brandIconAliases = [
    ["anthropic", "anthropic"], ["replit", "replit"], ["mastercard", "mastercard"],
    ["capital one", "capitalone"], ["grafana", "grafana"], ["accenture", "accenture"],
    ["sumup", "sumup"], ["flix", "flix"], ["openai", "openai"], ["microsoft", "microsoft"],
    ["google", "google"], ["amazon web services", "amazonwebservices"], ["amazon", "amazon"],
    ["apple", "apple"], ["netflix", "netflix"], ["airbnb", "airbnb"], ["spotify", "spotify"],
    ["shopify", "shopify"], ["adobe", "adobe"], ["nvidia", "nvidia"], ["intel", "intel"],
    ["cloudflare", "cloudflare"], ["datadog", "datadog"], ["dropbox", "dropbox"],
    ["github", "github"], ["gitlab", "gitlab"], ["atlassian", "atlassian"],
    ["notion", "notion"], ["figma", "figma"], ["canva", "canva"], ["reddit", "reddit"],
    ["linkedin", "linkedin"], ["salesforce", "salesforce"], ["hubspot", "hubspot"],
    ["stripe", "stripe"], ["twilio", "twilio"], ["zendesk", "zendesk"], ["uber", "uber"]
  ];
  const countryMaterials = new Map();
  const markerTextureCache = new Map();
  const markerTextureRequests = new Set();
  const markerTextureMaterials = new Map();
  const regionNames = typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["zh-CN"], { type: "region" })
    : null;

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
        // 同城岗位只在都会区范围内轻微错开，避免视觉重叠但不伪造另一座城市。
        const radius = Math.min(0.42, 0.035 + Math.sqrt(index) * 0.042);
        const angle = index * 2.399963;
        const longitudeScale = Math.max(0.4, Math.cos(job.lat * Math.PI / 180));
        job.mapLat = job.lat + Math.sin(angle) * radius;
        job.mapLng = job.lng + Math.cos(angle) * radius / longitudeScale;
      });
    });
  }

  spreadSharedLocations(mapJobs);

  const state = {
    globe: null,
    query: params.get("q") || "",
    selected: null,
    selectionPool: [],
    selectionType: null,
    selectionLabel: "",
    selectedCountryKey: null,
    hovered: null,
    featured: null,
    countries: [],
    markers: [],
    markerRefreshTimer: 0,
    markerObjects: new Set(),
    hoverTooltip: null,
    hoverTooltipTimer: 0,
    pointerX: 0,
    pointerY: 0,
    rotationResumeTimer: 0,
    ready: false,
    resultsOpen: false,
    autoRotate: !reducedMotion,
    view: initialExplore ? "explore" : "landing",
    transitioning: false,
    offset: [0, 0],
    offsetAnimation: 0,
    lastPointClickAt: 0,
    feedbackTimer: 0
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const els = {
    body: document.body,
    start: $("#start-explore"),
    home: $("#home-link"),
    stage: $("#earth-stage"),
    globe: $("#work-globe"),
    empty: $("#globe-empty"),
    loading: $("#explore-loading"),
    reset: $("#reset-view"),
    form: $("#search-form"),
    search: $("#job-search"),
    count: $("#search-count"),
    sheet: $("#result-sheet"),
    resultLabel: $("#result-label"),
    resultList: $("#result-list"),
    resultEmpty: $("#result-empty"),
    closeResults: $("#close-results"),
    card: $("#job-card"),
    cardPrev: $("#card-prev"),
    cardNext: $("#card-next"),
    cardPosition: $("#card-position"),
    cardClose: $("#job-card-close"),
    cardSource: $("#card-source"),
    cardPosted: $("#card-posted"),
    cardEvidence: $("#card-evidence"),
    cardCompany: $("#card-company"),
    cardTitle: $("#card-title"),
    cardLocation: $("#card-location"),
    cardSalary: $("#card-salary"),
    cardSummary: $("#card-summary"),
    cardTags: $("#card-tags"),
    cardApply: $("#card-apply"),
    cardDetails: $("#card-details"),
    cardActionFeedback: $("#card-action-feedback")
  };

  function escapeHtml(value) {
    return String(value).replace(/[<>&'\"]/g, (character) => ({
      "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", '"': "&quot;"
    })[character]);
  }

  function hexToRgba(hex, alpha) {
    const value = Number.parseInt(String(hex).replace("#", ""), 16);
    return `rgba(${(value >> 16) & 255},${(value >> 8) & 255},${value & 255},${alpha})`;
  }

  function adjustHexSaturation(hex, multiplier) {
    const value = Number.parseInt(String(hex).replace("#", ""), 16);
    const red = ((value >> 16) & 255) / 255;
    const green = ((value >> 8) & 255) / 255;
    const blue = (value & 255) / 255;
    const maximum = Math.max(red, green, blue);
    const minimum = Math.min(red, green, blue);
    const lightness = (maximum + minimum) / 2;
    const delta = maximum - minimum;
    if (!delta) return hex;

    let hue;
    if (maximum === red) hue = ((green - blue) / delta) % 6;
    else if (maximum === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    hue = (hue * 60 + 360) % 360;

    const saturation = Math.min(1, (delta / (1 - Math.abs(2 * lightness - 1))) * multiplier);
    const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const section = hue / 60;
    const secondary = chroma * (1 - Math.abs((section % 2) - 1));
    let shiftedRed = 0;
    let shiftedGreen = 0;
    let shiftedBlue = 0;
    if (section < 1) [shiftedRed, shiftedGreen] = [chroma, secondary];
    else if (section < 2) [shiftedRed, shiftedGreen] = [secondary, chroma];
    else if (section < 3) [shiftedGreen, shiftedBlue] = [chroma, secondary];
    else if (section < 4) [shiftedGreen, shiftedBlue] = [secondary, chroma];
    else if (section < 5) [shiftedRed, shiftedBlue] = [secondary, chroma];
    else [shiftedRed, shiftedBlue] = [chroma, secondary];
    const match = lightness - chroma / 2;
    return `#${[shiftedRed, shiftedGreen, shiftedBlue]
      .map((channel) => Math.round((channel + match) * 255).toString(16).padStart(2, "0"))
      .join("")}`;
  }

  function colorFor(job) {
    return categories[job.category]?.color || "#2181D5";
  }

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("zh-CN");
  }

  function stringHash(value) {
    return [...normalize(value)].reduce((hash, character) => (
      ((hash << 5) - hash + character.codePointAt(0)) | 0
    ), 0);
  }

  function pinColorFor(job) {
    const seed = job?.company || job?.title || job?.id || "OpenWork";
    return pinPalette[Math.abs(stringHash(seed)) % pinPalette.length];
  }

  function matches(job) {
    const query = normalize(state.query);
    if (!query) return true;
    const haystack = normalize([
      job.title, job.company, job.category, job.location, job.mapCity, job.summary, ...(job.tags || [])
    ].join(" "));
    const synonymMatch = (token) => {
      if (["设计师", "设计", "ui", "ux"].includes(token)) return job.category === "设计" || haystack.includes(token);
      if (["程序员", "开发者", "开发", "工程师"].includes(token)) return ["开发", "人工智能"].includes(job.category) || haystack.includes(token);
      if (["ai", "人工智能", "机器学习", "大模型"].includes(token)) return job.category === "人工智能" || haystack.includes(token);
      if (["产品经理", "产品"].includes(token)) return job.category === "产品" || haystack.includes(token);
      if (["营销", "市场"].includes(token)) return job.category === "市场" || haystack.includes(token);
      if (["销售", "商务"].includes(token)) return job.category === "销售" || haystack.includes(token);
      if (["运营", "社群"].includes(token)) return job.category === "运营" || haystack.includes(token);
      if (["远程", "居家", "在家办公"].includes(token)) return job.remote || haystack.includes(token);
      return haystack.includes(token);
    };
    return query.split(/\s+/).every(synonymMatch);
  }

  function activeSearch() {
    return Boolean(state.query.trim());
  }

  function matchingJobs() {
    return jobs.filter(matches).sort((a, b) => (b.attention || 0) - (a.attention || 0));
  }

  function pointRadius(job) {
    const base = isTouch ? 0.34 : 0.29;
    const hoverScale = state.hovered?.id === job.id ? 1.55 : 1;
    return base * hoverScale;
  }

  function pointColor(job) {
    const color = colorFor(job);
    if (state.hovered?.id === job.id) return hexToRgba(color, 1);
    return hexToRgba(color, 0.96);
  }

  function pointAltitude(job) {
    const base = 0.006;
    const hoverLift = state.hovered?.id === job.id ? 0.008 : 0;
    return base + hoverLift;
  }

  function tooltip(marker) {
    if (!marker) return "";
    if (marker.isCluster) {
      const first = marker.jobs[0];
      return `<div class="map-tooltip" style="--tooltip-color:${marker.color}">
        <div class="map-tooltip-head">
          <span><i aria-hidden="true"></i>重叠岗位合集</span>
          <em>${marker.jobs.length} 个岗位</em>
        </div>
        <b>${escapeHtml(first.mapCity || first.location || "这个地区")}</b>
        <p>${escapeHtml([...new Set(marker.jobs.map((job) => job.category))].slice(0, 3).join(" · "))}</p>
        <small>点击圆钉，使用上方箭头逐个查看</small>
      </div>`;
    }
    const job = marker.job || marker;
    const pointKind = job.mapBasis === "company-hq" ? "公司总部" : "职位城市";
    return `<div class="map-tooltip" style="--tooltip-color:${colorFor(job)}">
      <div class="map-tooltip-head">
        <span><i aria-hidden="true"></i>${escapeHtml(job.category)} · ${pointKind}</span>
        <em>${escapeHtml(job.posted)}</em>
      </div>
      <b>${escapeHtml(job.title)}</b>
      <p>${escapeHtml(job.company)}</p>
      <div class="map-tooltip-facts">
        <span>${escapeHtml(job.mapCity || job.location)}</span>
        <span>${escapeHtml(job.salary || "薪资面议")}</span>
      </div>
      <small>点击圆钉查看完整职位</small>
    </div>`;
  }

  function positionHoverTooltip() {
    if (!state.hoverTooltip || state.hoverTooltip.hidden) return;
    const rect = els.globe.getBoundingClientRect();
    const localX = Math.max(12, Math.min(rect.width - 12, state.pointerX - rect.left));
    const localY = Math.max(12, Math.min(rect.height - 12, state.pointerY - rect.top));
    state.hoverTooltip.style.left = `${localX}px`;
    state.hoverTooltip.style.top = `${localY}px`;
    const tooltipWidth = state.hoverTooltip.offsetWidth || 356;
    const tooltipHeight = state.hoverTooltip.offsetHeight || 240;
    state.hoverTooltip.classList.toggle("is-left", localX + tooltipWidth + 34 > rect.width);
    state.hoverTooltip.classList.toggle("is-below", localY - tooltipHeight - 28 < 0);
  }

  function showHoverTooltip(marker) {
    if (!state.hoverTooltip || !marker) return;
    window.clearTimeout(state.hoverTooltipTimer);
    state.hoverTooltip.innerHTML = tooltip(marker);
    state.hoverTooltip.hidden = false;
    positionHoverTooltip();
    state.hoverTooltip.classList.remove("is-leaving");
    requestAnimationFrame(() => state.hoverTooltip?.classList.add("is-visible"));
  }

  function hideHoverTooltip() {
    if (!state.hoverTooltip || state.hoverTooltip.hidden || state.hoverTooltip.classList.contains("is-leaving")) return;
    window.clearTimeout(state.hoverTooltipTimer);
    state.hoverTooltip.classList.remove("is-visible");
    state.hoverTooltip.classList.add("is-leaving");
    state.hoverTooltipTimer = window.setTimeout(() => {
      if (!state.hoverTooltip || state.hoverTooltip.classList.contains("is-visible")) return;
      state.hoverTooltip.hidden = true;
      state.hoverTooltip.classList.remove("is-leaving");
      state.hoverTooltip.innerHTML = "";
    }, reducedMotion ? 0 : 300);
  }

  function hoverJob(job) {
    const next = job?.job || job?.jobs?.[0] || job || null;
    if ((state.hovered?.id || null) === (next?.id || null)) {
      if (next) positionHoverTooltip();
      return;
    }
    state.hovered = next;
    if (!xhsMode) {
      if (job) showHoverTooltip(job);
      else hideHoverTooltip();
    }
    if (!state.globe) return;
    refreshMarkerScales(true);
  }

  function renderResults() {
    const result = matchingJobs();
    const visible = result.slice(0, 8);
    els.count.textContent = activeSearch() ? `${result.length} 个` : "";
    els.resultLabel.textContent = activeSearch()
      ? `找到 ${result.length} 个岗位`
      : "本月值得看看";
    els.resultEmpty.hidden = result.length > 0;
    els.resultList.innerHTML = visible.map((job) => `
      <button class="result-item" type="button" data-job-id="${escapeHtml(job.id)}">
        <i class="result-mark" aria-hidden="true" style="--result-color:${colorFor(job)}"></i>
        <span class="result-main"><b>${escapeHtml(job.title)}</b><span>${escapeHtml(job.company)} · ${escapeHtml(job.location)}</span></span>
        <span class="result-side">${escapeHtml(job.salary)}</span>
      </button>`).join("");

    $$(".result-item", els.resultList).forEach((button) => {
      button.addEventListener("click", () => {
        const job = jobs.find((item) => item.id === button.dataset.jobId);
        if (job) selectJob(job);
        closeResults();
      });
    });
  }

  function openResults() {
    state.resultsOpen = true;
    els.body.classList.add("is-results-open");
    els.sheet.hidden = false;
    renderResults();
  }

  function closeResults() {
    state.resultsOpen = false;
    els.body.classList.remove("is-results-open");
    els.sheet.hidden = true;
  }

  function syncUrl(mode = "replace") {
    if (xhsMode) return;
    const next = new URLSearchParams();
    if (state.view === "explore") {
      next.set("view", "explore");
      if (state.query.trim()) next.set("q", state.query.trim());
      if (state.selected) next.set("job", state.selected.id);
    }
    const suffix = next.toString() ? `${window.location.pathname}?${next}` : window.location.pathname;
    window.history[mode === "push" ? "pushState" : "replaceState"]({ view: state.view }, "", suffix);
  }

  function refreshGlobePoints() {
    if (!state.globe) return;
    refreshMarkers();
  }

  function updateSearchState(shouldOpen) {
    state.query = els.search.value;
    els.body.classList.toggle("has-search", activeSearch());
    renderResults();
    refreshGlobePoints();
    if (state.selected && !matches(state.selected)) clearSelection(false);
    syncUrl();
    if (shouldOpen) openResults();
  }

  function setCardDetails(open) {
    els.card.classList.toggle("is-details-open", open);
    els.cardDetails.setAttribute("aria-expanded", String(open));
    $("span", els.cardDetails).textContent = open ? "收起详情" : "查看详情";
  }

  function showApplyFeedback(job) {
    window.clearTimeout(state.feedbackTimer);
    els.cardActionFeedback.textContent = `请在 ${job.source} 搜索「${job.title}」进行投递`;
    els.cardActionFeedback.hidden = false;
    state.feedbackTimer = window.setTimeout(() => {
      els.cardActionFeedback.hidden = true;
    }, 3600);
  }

  function configureApplyLink(job) {
    if (xhsMode) {
      els.cardApply.removeAttribute("href");
      els.cardApply.removeAttribute("target");
      els.cardApply.removeAttribute("rel");
      els.cardApply.classList.add("is-offline");
      els.cardApply.setAttribute("aria-label", `获取 ${job.title} 的投递方式`);
    } else {
      els.cardApply.href = job.sourceUrl;
      els.cardApply.target = "_blank";
      els.cardApply.rel = "noreferrer noopener";
      els.cardApply.classList.remove("is-offline");
      els.cardApply.setAttribute("aria-label", `立即投递 ${job.title}`);
    }
  }

  function renderCard(job) {
    if (!job) return;
    const changed = state.featured?.id !== job.id;
    state.featured = job;
    els.body.classList.add("has-selection");
    els.card.hidden = false;
    els.card.dataset.selectionType = state.selectionType || "job";
    els.card.style.setProperty("--job-color", colorFor(job));
    els.cardSource.textContent = job.source;
    els.cardPosted.textContent = state.selectionLabel || job.posted;
    els.cardEvidence.textContent = state.selectionType === "country"
      ? "国家岗位"
      : state.selectionType === "cluster" ? "附近合集" : job.evidence;
    els.cardCompany.textContent = job.company;
    els.cardTitle.textContent = job.title;
    els.cardLocation.textContent = job.location;
    els.cardSalary.textContent = job.salary;
    els.cardSummary.textContent = job.summary;
    els.cardTags.innerHTML = (job.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    configureApplyLink(job);
    const pool = state.selectionPool.length ? state.selectionPool : matchingJobs();
    const position = Math.max(0, pool.findIndex((item) => item.id === job.id));
    els.cardPosition.textContent = `${String(position + 1).padStart(2, "0")} / ${String(pool.length).padStart(2, "0")}`;
    if (changed) {
      setCardDetails(false);
      els.cardActionFeedback.hidden = true;
    }
    if (changed && !reducedMotion) {
      els.card.classList.remove("is-changing");
      void els.card.offsetWidth;
      els.card.classList.add("is-changing");
    }
  }

  function cycleFeatured(direction) {
    if (!state.selected) return;
    const pool = state.selectionPool.length ? state.selectionPool : matchingJobs();
    if (!pool.length) return;
    const currentIndex = Math.max(0, pool.findIndex((job) => job.id === state.featured?.id));
    const nextIndex = (currentIndex + direction + pool.length) % pool.length;
    selectJob(pool[nextIndex], {
      pool,
      type: state.selectionType,
      label: state.selectionLabel,
      countryKey: state.selectedCountryKey
    });
  }

  function selectJob(job, options = {}) {
    const pool = options.pool?.length ? options.pool : matchingJobs();
    const previousCountryKey = state.selectedCountryKey;
    state.selected = job;
    state.selectionPool = pool;
    state.selectionType = options.type || "job";
    state.selectionLabel = options.label || "";
    state.selectedCountryKey = options.countryKey || null;
    if (previousCountryKey !== state.selectedCountryKey) refreshCountryStyles();
    closeResults();
    renderCard(job);
    const hasCityPoint = job.mapPrecision === "city" && Number.isFinite(job.mapLat) && Number.isFinite(job.mapLng);
    const layout = viewLayout("explore");
    animateOffset(layout.offset, reducedMotion ? 0 : 760);
    if (state.globe && hasCityPoint) {
      state.globe
        .ringsData([job])
        .ringColor(() => [hexToRgba(colorFor(job), 0.88), hexToRgba(colorFor(job), 0)])
        .pointOfView({ lat: job.mapLat, lng: job.mapLng, altitude: layout.altitude }, reducedMotion ? 0 : 900);
    } else {
      state.globe?.ringsData([]);
    }
    stopAutoRotation();
    scheduleAutoRotation(2600);
    syncUrl();
  }

  function selectPointJob(marker, event) {
    state.lastPointClickAt = performance.now();
    event?.stopPropagation?.();
    if (!marker) return;
    const pool = marker.isCluster ? marker.jobs : [marker.job || marker];
    const job = pool[0];
    selectJob(job, {
      pool,
      type: marker.isCluster ? "cluster" : "job",
      label: marker.isCluster ? `${job.mapCity || job.location} · ${pool.length} 个岗位` : ""
    });
  }

  function countryName(feature) {
    const iso2 = String(feature.properties?.ISO_A2 || feature.properties?.iso_a2 || "").toUpperCase();
    if (regionNames && iso2 && iso2 !== "-99") {
      try { return regionNames.of(iso2); } catch (_) { /* 使用数据名称兜底。 */ }
    }
    return feature.properties?.NAME_ZH
      || feature.properties?.ADMIN
      || feature.properties?.NAME
      || "这个国家";
  }

  function selectCountry(feature, event) {
    state.lastPointClickAt = performance.now();
    event?.stopPropagation?.();
    const pool = (feature._jobs || []).filter(matches)
      .sort((a, b) => (b.attention || 0) - (a.attention || 0));
    state.selectedCountryKey = feature._countryKey;
    refreshCountryStyles();
    if (!pool.length) {
      clearSelection(false, true);
      els.resultLabel.textContent = `${countryName(feature)} · 暂无匹配岗位`;
      els.resultEmpty.hidden = false;
      els.resultList.innerHTML = "";
      els.sheet.hidden = false;
      state.resultsOpen = true;
      return;
    }
    selectJob(pool[0], {
      pool,
      type: "country",
      label: `${countryName(feature)} · ${pool.length} 个岗位`,
      countryKey: feature._countryKey
    });
  }

  function clearFromGlobe() {
    if (performance.now() - state.lastPointClickAt < 180) return;
    clearSelection();
  }

  function clearSelection(sync = true, keepCountry = false) {
    const hadSelection = Boolean(state.selected);
    state.selected = null;
    state.selectionPool = [];
    state.selectionType = null;
    state.selectionLabel = "";
    if (!keepCountry) state.selectedCountryKey = null;
    state.featured = null;
    els.body.classList.remove("has-selection");
    els.card.hidden = true;
    setCardDetails(false);
    state.globe?.ringsData([]);
    refreshCountryStyles();
    if (hadSelection && state.view === "explore" && state.globe) {
      const layout = viewLayout("explore");
      const current = state.globe.pointOfView();
      const duration = reducedMotion ? 0 : 720;
      animateOffset(layout.offset, duration);
      state.globe.pointOfView({
        lat: current?.lat,
        lng: current?.lng,
        altitude: layout.altitude
      }, duration);
    }
    if (sync) syncUrl();
  }

  function resetView() {
    clearSelection(false);
    if (state.globe) {
      const layout = viewLayout("explore");
      state.globe.pointOfView({ lat: layout.lat, lng: layout.lng, altitude: layout.altitude }, reducedMotion ? 0 : 720);
      stopAutoRotation();
      scheduleAutoRotation(2400);
    }
    syncUrl();
  }

  function countryKey(feature, index = 0) {
    return String(feature.properties?.ISO_A3
      || feature.properties?.ADM0_A3
      || feature.properties?.ADMIN
      || feature.id
      || `country-${index}`);
  }

  function coordinateArea(ring) {
    let area = 0;
    for (let index = 0; index < ring.length - 1; index += 1) {
      area += ring[index][0] * ring[index + 1][1] - ring[index + 1][0] * ring[index][1];
    }
    return Math.abs(area / 2);
  }

  function squareSegmentDistance(point, start, end) {
    let x = start[0];
    let y = start[1];
    let dx = end[0] - x;
    let dy = end[1] - y;
    if (dx || dy) {
      const ratio = ((point[0] - x) * dx + (point[1] - y) * dy) / (dx * dx + dy * dy);
      if (ratio > 1) {
        x = end[0];
        y = end[1];
      } else if (ratio > 0) {
        x += dx * ratio;
        y += dy * ratio;
      }
      dx = point[0] - x;
      dy = point[1] - y;
    } else {
      dx = point[0] - x;
      dy = point[1] - y;
    }
    return dx * dx + dy * dy;
  }

  function simplifyLine(points, tolerance) {
    if (points.length <= 2) return points;
    const squareTolerance = tolerance * tolerance;
    const markers = new Uint8Array(points.length);
    const stack = [[0, points.length - 1]];
    markers[0] = 1;
    markers[points.length - 1] = 1;
    while (stack.length) {
      const [first, last] = stack.pop();
      let maxDistance = squareTolerance;
      let farthest = 0;
      for (let index = first + 1; index < last; index += 1) {
        const distance = squareSegmentDistance(points[index], points[first], points[last]);
        if (distance > maxDistance) {
          farthest = index;
          maxDistance = distance;
        }
      }
      if (farthest) {
        markers[farthest] = 1;
        if (farthest - first > 1) stack.push([first, farthest]);
        if (last - farthest > 1) stack.push([farthest, last]);
      }
    }
    return points.filter((_, index) => markers[index]);
  }

  function simplifyRing(ring) {
    if (!Array.isArray(ring) || ring.length < 4) return ring;
    const open = ring.slice(0, -1);
    const lngs = open.map((point) => point[0]);
    const lats = open.map((point) => point[1]);
    const span = Math.max(Math.max(...lngs) - Math.min(...lngs), Math.max(...lats) - Math.min(...lats));
    const target = span > 45 ? 34 : span > 18 ? 26 : span > 7 ? 18 : 12;
    let tolerance = span > 45 ? 0.9 : span > 18 ? 0.55 : span > 7 ? 0.3 : 0.16;
    let simplified = open;
    do {
      simplified = simplifyLine(open, tolerance);
      tolerance *= 1.28;
    } while (simplified.length > target && tolerance < 8);
    if (simplified.length < 3) simplified = open.slice(0, 3);
    return [...simplified, simplified[0]];
  }

  function polygonShellArea(polygon) {
    return Array.isArray(polygon?.[0]) ? coordinateArea(polygon[0]) : 0;
  }

  function simplifyGeometry(geometry) {
    if (!geometry) return geometry;
    if (geometry.type === "Polygon") {
      return { type: "Polygon", coordinates: [geometry.coordinates[0]] };
    }
    if (geometry.type === "MultiPolygon") {
      const ordered = geometry.coordinates
        .map((polygon) => ({ polygon, area: polygonShellArea(polygon) }))
        .sort((a, b) => b.area - a.area);
      const largest = ordered[0]?.area || 0;
      const kept = ordered
        .filter((entry, index) => index === 0 || (index < 5 && entry.area >= Math.max(0.35, largest * 0.035)))
        .map((entry) => [entry.polygon[0]]);
      return { type: "MultiPolygon", coordinates: kept };
    }
    return geometry;
  }

  function geometryRings(geometry) {
    if (!geometry) return [];
    if (geometry.type === "Polygon") return geometry.coordinates;
    if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
    return [];
  }

  function featureBounds(feature) {
    const points = geometryRings(feature.geometry).flat();
    if (!points.length) return null;
    return points.reduce((bounds, point) => ({
      minLng: Math.min(bounds.minLng, point[0]),
      maxLng: Math.max(bounds.maxLng, point[0]),
      minLat: Math.min(bounds.minLat, point[1]),
      maxLat: Math.max(bounds.maxLat, point[1])
    }), { minLng: 180, maxLng: -180, minLat: 90, maxLat: -90 });
  }

  function pointInRing(lng, lat, ring) {
    let inside = false;
    for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current, current += 1) {
      let currentLng = ring[current][0];
      let previousLng = ring[previous][0];
      while (currentLng - lng > 180) currentLng -= 360;
      while (currentLng - lng < -180) currentLng += 360;
      while (previousLng - lng > 180) previousLng -= 360;
      while (previousLng - lng < -180) previousLng += 360;
      const currentLat = ring[current][1];
      const previousLat = ring[previous][1];
      const intersects = ((currentLat > lat) !== (previousLat > lat))
        && (lng < ((previousLng - currentLng) * (lat - currentLat)) / (previousLat - currentLat || 1e-9) + currentLng);
      if (intersects) inside = !inside;
    }
    return inside;
  }

  function pointInGeometry(lng, lat, geometry) {
    const polygons = geometry?.type === "Polygon" ? [geometry.coordinates] : geometry?.coordinates || [];
    return polygons.some((polygon) => {
      if (!pointInRing(lng, lat, polygon[0])) return false;
      return !polygon.slice(1).some((hole) => pointInRing(lng, lat, hole));
    });
  }

  function colorCountries(features) {
    const tokenOwners = new Map();
    features.forEach((feature, featureIndex) => {
      feature._neighbors = new Set();
      geometryRings(feature._sourceGeometry || feature.geometry).forEach((ring) => {
        for (let index = 0; index < ring.length - 1; index += 1) {
          const [startLng, startLat] = ring[index];
          const [endLngRaw, endLat] = ring[index + 1];
          let endLng = endLngRaw;
          while (endLng - startLng > 180) endLng -= 360;
          while (endLng - startLng < -180) endLng += 360;
          const span = Math.max(Math.abs(endLng - startLng), Math.abs(endLat - startLat));
          const steps = Math.max(1, Math.min(64, Math.ceil(span / 0.35)));
          for (let step = 0; step <= steps; step += 1) {
            const progress = step / steps;
            let lng = startLng + (endLng - startLng) * progress;
            while (lng > 180) lng -= 360;
            while (lng < -180) lng += 360;
            const lat = startLat + (endLat - startLat) * progress;
            const token = `${Math.round(lng * 4) / 4}|${Math.round(lat * 4) / 4}`;
            if (!tokenOwners.has(token)) tokenOwners.set(token, new Set());
            tokenOwners.get(token).add(featureIndex);
          }
        }
      });
    });
    tokenOwners.forEach((owners) => {
      const unique = [...owners];
      unique.forEach((owner) => unique.forEach((neighbor) => {
        if (owner !== neighbor) features[owner]._neighbors.add(neighbor);
      }));
    });
    const paletteUsage = countryPalette.map(() => 0);
    [...features.keys()]
      .sort((a, b) => features[b]._neighbors.size - features[a]._neighbors.size)
      .forEach((featureIndex) => {
        const usedPalette = new Set([...features[featureIndex]._neighbors]
          .map((neighbor) => features[neighbor]._paletteIndex)
          .filter(Number.isInteger));
        const usedHueGroups = new Set([...usedPalette].map((index) => countryHueGroups[index]));
        let candidates = countryPalette
          .map((_, index) => index)
          .filter((index) => !usedPalette.has(index) && !usedHueGroups.has(countryHueGroups[index]));
        if (!candidates.length) {
          candidates = countryPalette.map((_, index) => index).filter((index) => !usedPalette.has(index));
        }
        const preferred = Math.abs(stringHash(features[featureIndex]._countryKey)) % countryPalette.length;
        candidates.sort((first, second) => (
          paletteUsage[first] - paletteUsage[second]
          || Math.min(Math.abs(first - preferred), countryPalette.length - Math.abs(first - preferred))
            - Math.min(Math.abs(second - preferred), countryPalette.length - Math.abs(second - preferred))
        ));
        const selected = candidates[0] ?? preferred;
        features[featureIndex]._paletteIndex = selected;
        paletteUsage[selected] += 1;
      });
  }

  function prepareLand(sourceFeatures) {
    const prepared = sourceFeatures.map((feature, index) => ({
      ...feature,
      geometry: simplifyGeometry(feature.geometry),
      _sourceGeometry: feature.geometry,
      _countryKey: countryKey(feature, index),
      _jobs: []
    }));
    prepared.forEach((feature) => { feature._bounds = featureBounds({ geometry: feature._sourceGeometry }); });
    mapJobs.forEach((job) => {
      const owner = prepared.find((feature) => {
        const bounds = feature._bounds;
        if (!bounds) return false;
        const inBounds = bounds.maxLng - bounds.minLng > 350
          ? job.lat >= bounds.minLat && job.lat <= bounds.maxLat
          : job.lng >= bounds.minLng && job.lng <= bounds.maxLng && job.lat >= bounds.minLat && job.lat <= bounds.maxLat;
        return inBounds && pointInGeometry(job.lng, job.lat, feature._sourceGeometry);
      });
      if (owner) {
        owner._jobs.push(job);
        job.countryKey = owner._countryKey;
      }
    });
    colorCountries(prepared);
    state.countries = prepared;
    return prepared;
  }

  function landColor(feature) {
    const color = countryPalette[feature._paletteIndex % countryPalette.length] || countryPalette[0];
    return feature._countryKey === state.selectedCountryKey
      ? adjustHexSaturation(color, 3)
      : color;
  }

  function landMaterial(feature) {
    const color = landColor(feature);
    if (!window.THREE) return null;
    if (!countryMaterials.has(color)) {
      countryMaterials.set(color, new window.THREE.MeshBasicMaterial({
        color,
        side: window.THREE.DoubleSide
      }));
    }
    return countryMaterials.get(color);
  }

  function countryAltitude(feature) {
    return feature._countryKey === state.selectedCountryKey ? 0.0085 : 0.006;
  }

  function countrySideColor(feature) {
    return feature._countryKey === state.selectedCountryKey
      ? "rgba(255,255,255,1)"
      : "rgba(255,255,255,0.84)";
  }

  function countryLabel(feature) {
    const count = (feature._jobs || []).filter(matches).length;
    return `<div class="country-tooltip"><b>${escapeHtml(countryName(feature))}</b><span>${count ? `${count} 个岗位 · 点击查看` : "暂无匹配岗位"}</span></div>`;
  }

  function refreshCountryStyles() {
    if (!state.globe || !state.countries.length) return;
    state.globe
      .polygonAltitude(countryAltitude)
      .polygonCapColor(landColor)
      .polygonCapMaterial(landMaterial)
      .polygonSideColor(countrySideColor)
      .polygonStrokeColor(() => "rgba(255,255,255,0.98)");
  }

  function enablePlateShadows() {
    if (!state.globe) return;
    const renderer = state.globe.renderer?.();
    if (renderer?.shadowMap) {
      renderer.shadowMap.enabled = true;
      if (window.THREE?.PCFShadowMap) renderer.shadowMap.type = window.THREE.PCFShadowMap;
    }
    state.globe.lights?.().forEach((light) => {
      if (!light.isDirectionalLight) return;
      light.castShadow = true;
      light.shadow.bias = -0.0004;
      light.shadow.mapSize.set(1024, 1024);
      light.shadow.camera.near = 50;
      light.shadow.camera.far = 420;
    });
    state.globe.scene?.().traverse((object) => {
      if (!object.isMesh) return;
      object.castShadow = true;
      object.receiveShadow = true;
    });
  }

  async function loadLand() {
    if (Array.isArray(window.WORLD_COUNTRIES)) {
      state.globe?.polygonsData(prepareLand(window.WORLD_COUNTRIES));
      refreshCountryStyles();
      window.setTimeout(enablePlateShadows, reducedMotion ? 0 : 620);
      return;
    }
    if (xhsMode) return;
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/vasturiano/globe.gl@master/example/datasets/ne_110m_admin_0_countries.geojson");
      if (!response.ok) throw new Error(String(response.status));
      const world = await response.json();
      state.globe?.polygonsData(prepareLand(world.features || []));
      refreshCountryStyles();
      window.setTimeout(enablePlateShadows, reducedMotion ? 0 : 620);
    } catch (_) {
      // 边界加载失败不影响工作点与搜索。
    }
  }

  function defaultExploreAltitude() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width <= 920 && height <= 520) return 1.28;
    return width <= 760 ? 1.42 : 1.08;
  }

  function zoomProgress() {
    const altitude = state.globe?.pointOfView()?.altitude ?? defaultExploreAltitude();
    const defaultAltitude = defaultExploreAltitude();
    const maximumZoomAltitude = 0.08;
    return Math.max(0, Math.min(1,
      (defaultAltitude - altitude) / (defaultAltitude - maximumZoomAltitude)
    ));
  }

  function markerScale() {
    const altitude = state.globe?.pointOfView()?.altitude ?? 1.4;
    return Math.max(0.58, Math.min(1.18, (altitude + 1) / 2.2));
  }

  function geographicDistance(first, second) {
    const radius = 6371;
    const lat1 = first.lat * Math.PI / 180;
    const lat2 = second.lat * Math.PI / 180;
    const latDelta = (second.lat - first.lat) * Math.PI / 180;
    const lngDelta = (second.lng - first.lng) * Math.PI / 180;
    const value = Math.sin(latDelta / 2) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin(lngDelta / 2) ** 2;
    return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
  }

  function clusterPosition(group) {
    const lat = group.reduce((sum, job) => sum + job.lat, 0) / group.length;
    const vectors = group.map((job) => job.lng * Math.PI / 180);
    const lng = Math.atan2(
      vectors.reduce((sum, value) => sum + Math.sin(value), 0),
      vectors.reduce((sum, value) => sum + Math.cos(value), 0)
    ) * 180 / Math.PI;
    return { lat, lng };
  }

  function buildMarkers(list) {
    if (zoomProgress() >= clusterSplitThreshold) {
      return list.map((job) => ({
        id: `job-${job.id}`,
        job,
        jobs: [job],
        isCluster: false,
        mapLat: job.mapLat,
        mapLng: job.mapLng,
        color: pinColorFor(job)
      }));
    }
    const thresholdKm = (isTouch ? 44 : 36) + (1 - zoomProgress()) * (isTouch ? 58 : 48);
    const groups = [];
    list.forEach((job) => {
      const nearby = groups.find((group) => geographicDistance(
        { lat: job.lat, lng: job.lng },
        group.center
      ) <= thresholdKm);
      if (nearby) {
        nearby.jobs.push(job);
        nearby.center = clusterPosition(nearby.jobs);
      } else {
        groups.push({ jobs: [job], center: { lat: job.lat, lng: job.lng } });
      }
    });
    return groups.map((group) => {
      if (group.jobs.length === 1) {
        const job = group.jobs[0];
        return {
          id: `job-${job.id}`,
          job,
          jobs: [job],
          isCluster: false,
          mapLat: job.mapLat,
          mapLng: job.mapLng,
          color: pinColorFor(job)
        };
      }
      const ordered = [...group.jobs].sort((a, b) => (b.attention || 0) - (a.attention || 0));
      return {
        id: `cluster-${ordered.map((job) => job.id).sort().join("-")}`,
        jobs: ordered,
        isCluster: true,
        mapLat: group.center.lat,
        mapLng: group.center.lng,
        color: pinColorFor(ordered[0])
      };
    });
  }

  function companyAbbreviation(company) {
    const cleaned = String(company || "OW")
      .replace(/&amp;/gi, "&")
      .replace(/\b(gmbh|inc|llc|ltd|limited|company|corp|corporation|client|team)\b/gi, " ")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
    const words = cleaned.match(/[\p{L}\p{N}]+/gu) || ["OW"];
    if (words.length === 1) return [...words[0]].slice(0, 2).join("").toLocaleUpperCase("zh-CN");
    return words.slice(0, 2).map((word) => [...word][0]).join("").toLocaleUpperCase("zh-CN");
  }

  function brandIconSlug(company) {
    const name = normalize(company).replace(/&amp;/g, "and");
    return brandIconAliases.find(([alias]) => name === alias || name.includes(alias))?.[1] || null;
  }

  function configureMarkerTexture(texture) {
    if (!texture || !window.THREE) return texture;
    if (window.THREE.SRGBColorSpace) texture.colorSpace = window.THREE.SRGBColorSpace;
    texture.minFilter = window.THREE.LinearFilter;
    texture.magFilter = window.THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }

  function createMarkerLabelCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    if (context) {
      context.clearRect(0, 0, 64, 64);
      context.beginPath();
      context.arc(32, 32, 28, 0, Math.PI * 2);
      context.fillStyle = "rgba(255,255,252,0.9)";
      context.fill();
    }
    return { canvas, context };
  }

  function createTextTexture(text) {
    const { canvas, context } = createMarkerLabelCanvas();
    if (context) {
      context.fillStyle = "#243034";
      context.font = `${text.length > 2 ? 700 : 760} ${text.length > 2 ? 24 : 31}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, 32, 33);
    }
    return configureMarkerTexture(new window.THREE.CanvasTexture(canvas));
  }

  function loadCompanyLogo(textureKey, company) {
    const slug = brandIconSlug(company);
    if (!slug || !window.THREE || markerTextureRequests.has(textureKey)) return;
    markerTextureRequests.add(textureKey);
    const loader = new window.THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      `https://cdn.simpleicons.org/${encodeURIComponent(slug)}/243034?viewbox=auto`,
      (loadedTexture) => {
        const { canvas, context } = createMarkerLabelCanvas();
        if (context && loadedTexture.image) context.drawImage(loadedTexture.image, 14, 14, 36, 36);
        const logoTexture = configureMarkerTexture(new window.THREE.CanvasTexture(canvas));
        const fallbackTexture = markerTextureCache.get(textureKey);
        markerTextureCache.set(textureKey, logoTexture);
        markerTextureMaterials.get(textureKey)?.forEach((material) => {
          material.map = logoTexture;
          material.needsUpdate = true;
        });
        loadedTexture.dispose?.();
        fallbackTexture?.dispose?.();
      },
      undefined,
      () => { /* 找不到可用品牌图标时保留公司简称。 */ }
    );
  }

  function markerLabelTexture(marker) {
    const company = marker.job?.company || marker.jobs?.[0]?.company || "OpenWork";
    const label = marker.isCluster
      ? (marker.jobs.length > 99 ? "99+" : String(marker.jobs.length))
      : companyAbbreviation(company);
    const textureKey = marker.isCluster ? `cluster:${label}` : `company:${normalize(company)}`;
    if (!markerTextureCache.has(textureKey)) markerTextureCache.set(textureKey, createTextTexture(label));
    if (!marker.isCluster) loadCompanyLogo(textureKey, company);
    return { textureKey, texture: markerTextureCache.get(textureKey) };
  }

  function registerMarkerTextureMaterial(textureKey, material) {
    if (!markerTextureMaterials.has(textureKey)) markerTextureMaterials.set(textureKey, new Set());
    markerTextureMaterials.get(textureKey).add(material);
  }

  function markerObject(marker) {
    if (!window.THREE) return null;
    const group = new window.THREE.Group();
    const clustered = marker.isCluster;
    const headRadius = clustered
      ? Math.min(1.82, 1.28 + Math.log10(marker.jobs.length + 1) * 0.22)
      : 0.96;
    const stemLength = headRadius * (clustered ? 0.72 : 1.26);
    const headPosition = new window.THREE.Vector3(0, 0, stemLength + headRadius * 0.92);
    const stem = new window.THREE.Mesh(
      new window.THREE.CylinderGeometry(clustered ? 0.085 : 0.065, clustered ? 0.085 : 0.065, stemLength, 10),
      new window.THREE.MeshBasicMaterial({ color: "#434748" })
    );
    stem.rotation.x = Math.PI / 2;
    stem.position.set(0, 0, stemLength / 2);
    group.add(stem);

    const PinHeadMaterial = window.THREE.MeshPhongMaterial || window.THREE.MeshBasicMaterial;
    const head = new window.THREE.Mesh(
      new window.THREE.SphereGeometry(headRadius, 24, 18),
      new PinHeadMaterial({
        color: marker.color,
        emissive: marker.color,
        emissiveIntensity: 0.12,
        shininess: 54,
        specular: "#F8FBFF"
      })
    );
    head.position.copy(headPosition);
    head.castShadow = true;
    stem.castShadow = true;
    group.add(head);

    const { textureKey, texture } = markerLabelTexture(marker);
    const labelMaterial = new window.THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.04,
      depthWrite: false,
      side: window.THREE.DoubleSide
    });
    const label = new window.THREE.Mesh(
      new window.THREE.CircleGeometry(headRadius * (clustered ? 0.56 : 0.58), 28),
      labelMaterial
    );
    label.position.copy(headPosition);
    label.position.z += headRadius * 1.06;
    label.renderOrder = 4;
    label.visible = false;
    registerMarkerTextureMaterial(textureKey, labelMaterial);
    group.add(label);

    const hitTarget = new window.THREE.Mesh(
      new window.THREE.SphereGeometry(headRadius * (isTouch ? 2.8 : 2.2), 14, 10),
      new window.THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
    );
    hitTarget.position.copy(head.position);
    group.add(hitTarget);

    marker._threeObject = group;
    state.markerObjects.add(group);
    return group;
  }

  function setMarkerObjectScale(object, targetScale, animate) {
    const currentScale = Number(object.scale?.x) || targetScale;
    window.cancelAnimationFrame(object.userData.scaleAnimation || 0);
    if (!animate || reducedMotion || Math.abs(currentScale - targetScale) < 0.001) {
      object.scale.setScalar(targetScale);
      object.userData.scaleAnimation = 0;
      return;
    }
    const startedAt = window.performance.now();
    const step = (time) => {
      const progress = Math.min(1, (time - startedAt) / markerScaleDuration);
      const eased = 1 - ((1 - progress) ** 3);
      object.scale.setScalar(currentScale + (targetScale - currentScale) * eased);
      if (progress < 1) object.userData.scaleAnimation = window.requestAnimationFrame(step);
      else object.userData.scaleAnimation = 0;
    };
    object.userData.scaleAnimation = window.requestAnimationFrame(step);
  }

  function refreshMarkerScales(animate = false) {
    const viewScale = markerScale();
    const sceneScale = state.view === "landing" ? 0.78 : 1;
    state.markers.forEach((marker) => {
      if (!marker._threeObject) return;
      const hovered = marker.jobs.some((job) => job.id === state.hovered?.id);
      const idleScale = marker.isCluster ? clusterIdleScale : markerIdleScale;
      const scale = viewScale * sceneScale * idleScale * (hovered ? markerHoverMultiplier : 1);
      setMarkerObjectScale(marker._threeObject, scale, animate);
      if (marker._threeObject.children[2]) {
        marker._threeObject.children[2].visible = state.view === "explore" && hovered;
      }
    });
  }

  function refreshMarkers() {
    if (!state.globe) return;
    const visibleJobs = mapJobs.filter(matches);
    const markers = buildMarkers(visibleJobs);
    state.markers = markers;
    state.markerObjects.clear();
    markerTextureMaterials.clear();
    if (window.THREE && typeof state.globe.objectsData === "function") {
      state.globe
        .pointsData([])
        .objectsData(markers);
      window.requestAnimationFrame(() => refreshMarkerScales(false));
    } else {
      state.globe
        .objectsData?.([])
        .pointsData(markers)
        .pointLat("mapLat")
        .pointLng("mapLng")
        .pointAltitude(() => 0.008)
        .pointRadius((marker) => marker.isCluster ? 0.52 : 0.32)
        .pointColor((marker) => marker.color)
        .pointLabel(tooltip);
    }
  }

  function scheduleMarkerRefresh() {
    window.clearTimeout(state.markerRefreshTimer);
    state.markerRefreshTimer = window.setTimeout(refreshMarkers, 110);
    refreshMarkerScales();
  }

  function hideLoading() {
    if (state.ready) return;
    state.ready = true;
    els.body.classList.add("is-ui-ready");
    els.loading.classList.add("is-hidden");
    window.setTimeout(() => {
      els.body.classList.add("is-intro-complete");
    }, reducedMotion ? 0 : 1100);
  }

  function showFallback() {
    els.empty.hidden = false;
    hideLoading();
  }

  function viewLayout(view) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const landscapePhone = width <= 920 && height <= 520;
    if (view === "landing") {
      return {
        offset: [
          landscapePhone ? Math.round(width * 0.2) : width <= 760 ? Math.round(width * 0.12) : Math.round(width * 0.16),
          width <= 760 && !landscapePhone ? Math.round(height * 0.25) : 0
        ],
        altitude: width <= 760 ? 2.15 : 1.14,
        lat: 20,
        lng: 40
      };
    }
    if (landscapePhone) {
      if (!state.selected) {
        return {
          offset: [0, Math.round(height * 0.08)],
          altitude: 1.28,
          lat: exploreHomeView.lat,
          lng: exploreHomeView.lng
        };
      }
      return {
        offset: [Math.round(-width * 0.08), Math.round(height * 0.2)],
        altitude: 1.66,
        lat: 20,
        lng: 20
      };
    }
    if (!state.selected) {
      return {
        offset: [0, width <= 760 ? Math.round(height * 0.17) : Math.round(height * 0.07)],
        altitude: defaultExploreAltitude(),
        lat: exploreHomeView.lat,
        lng: exploreHomeView.lng
      };
    }
    return {
      offset: [
        0,
        width <= 760 ? Math.round(height * 0.31) : Math.round(height * 0.34)
      ],
      altitude: width <= 760 ? 1.82 : 0.92,
      lat: 20,
      lng: 20
    };
  }

  function easeOutExpo(progress) {
    return progress >= 1 ? 1 : 1 - Math.pow(2, -10 * progress);
  }

  function animateOffset(target, duration) {
    if (!state.globe) return;
    if (state.offsetAnimation) cancelAnimationFrame(state.offsetAnimation);
    const from = [...state.offset];
    if (!duration) {
      state.offset = [...target];
      state.globe.globeOffset(state.offset);
      return;
    }
    const started = performance.now();
    const frame = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = easeOutExpo(progress);
      state.offset = [
        Math.round(from[0] + (target[0] - from[0]) * eased),
        Math.round(from[1] + (target[1] - from[1]) * eased)
      ];
      state.globe.globeOffset(state.offset);
      if (progress < 1) state.offsetAnimation = requestAnimationFrame(frame);
      else state.offsetAnimation = 0;
    };
    state.offsetAnimation = requestAnimationFrame(frame);
  }

  function applyViewLayout(view, duration = 0) {
    if (!state.globe) return;
    const layout = viewLayout(view);
    animateOffset(layout.offset, duration);
    state.globe.pointOfView({ lat: layout.lat, lng: layout.lng, altitude: layout.altitude }, duration);
  }

  function stopAutoRotation() {
    window.clearTimeout(state.rotationResumeTimer);
    state.rotationResumeTimer = 0;
    state.autoRotate = false;
    if (state.globe) state.globe.controls().autoRotate = false;
  }

  function scheduleAutoRotation(delay = 1800) {
    window.clearTimeout(state.rotationResumeTimer);
    state.rotationResumeTimer = 0;
    if (reducedMotion || state.view !== "explore" || !state.globe) return;
    state.rotationResumeTimer = window.setTimeout(() => {
      if (state.view !== "explore" || !state.globe) return;
      state.autoRotate = true;
      state.globe.controls().autoRotate = true;
      state.rotationResumeTimer = 0;
    }, delay);
  }

  function setGlobeInteraction(view) {
    if (!state.globe) return;
    const controls = state.globe.controls();
    const exploring = view === "explore";
    controls.enableZoom = exploring;
    controls.enableRotate = exploring;
    controls.enablePan = false;
    if (exploring) {
      stopAutoRotation();
      scheduleAutoRotation(1400);
    } else {
      window.clearTimeout(state.rotationResumeTimer);
      state.rotationResumeTimer = 0;
      state.autoRotate = !reducedMotion;
      controls.autoRotate = state.autoRotate;
    }
  }

  function setView(view, options = {}) {
    if (view === state.view && !options.force) return;
    const duration = reducedMotion || options.instant ? 0 : 920;
    state.view = view;
    state.transitioning = duration > 0;
    els.body.classList.toggle("is-landing", view === "landing");
    els.body.classList.toggle("is-explore", view === "explore");
    els.body.classList.toggle("is-transitioning", duration > 0);
    document.title = view === "explore" ? "寻找工作｜OpenWork" : "OpenWork｜全球工作，尽在眼前";

    if (view === "landing") {
      closeResults();
      clearSelection(false);
      els.card.hidden = true;
      els.search.blur();
      setGlobeInteraction("landing");
    } else if (state.globe) {
      const controls = state.globe.controls();
      controls.enableZoom = false;
      controls.enableRotate = false;
      controls.autoRotate = false;
    }

    if (view === "explore" && !state.selected) {
      state.featured = null;
      els.card.hidden = true;
    }

    applyViewLayout(view, duration);
    if (state.globe) refreshMarkers();
    if (options.history) syncUrl(options.history);

    window.setTimeout(() => {
      state.transitioning = false;
      els.body.classList.remove("is-transitioning");
      setGlobeInteraction(view);
    }, duration || 0);
  }

  function enterExplore() {
    if (state.transitioning || state.view === "explore") return;
    setView("explore", { history: "push" });
  }

  function exitExplore(history = "push") {
    if (state.transitioning || state.view === "landing") return;
    setView("landing", { history });
  }

  function resizeGlobe() {
    if (!state.globe) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    state.globe.width(width).height(height);
    applyViewLayout(state.view, 0);
  }

  function initializeGlobe() {
    if (!window.Globe || !els.globe) {
      showFallback();
      return;
    }

    try {
      let globe;
      try {
        globe = new window.Globe(els.globe, { animateIn: false, waitForGlobeReady: true });
      } catch (_) {
        globe = window.Globe({ animateIn: false, waitForGlobeReady: true })(els.globe);
      }

      state.globe = globe
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl(null)
        .bumpImageUrl(null)
        .showAtmosphere(true)
        .atmosphereColor(atmosphereColor)
        .atmosphereAltitude(0.04)
        .showGraticules(false)
        .polygonsData([])
        .polygonAltitude(countryAltitude)
        .polygonCapCurvatureResolution(countryCapCurvatureResolution)
        .polygonCapColor(landColor)
        .polygonCapMaterial(landMaterial)
        .polygonSideColor(countrySideColor)
        .polygonStrokeColor(() => "rgba(255,255,255,0.98)")
        .polygonLabel(countryLabel)
        .polygonsTransitionDuration(reducedMotion ? 0 : 520)
        .pointsData([])
        .pointLat("mapLat")
        .pointLng("mapLng")
        .pointAltitude(pointAltitude)
        .pointRadius(pointRadius)
        .pointColor(pointColor)
        .pointResolution(isTouch ? 8 : 11)
        .pointLabel(xhsMode ? tooltip : () => "")
        .ringsData([])
        .ringLat("mapLat")
        .ringLng("mapLng")
        .ringMaxRadius(2.8)
        .ringPropagationSpeed(reducedMotion ? 0 : 1)
        .ringRepeatPeriod(reducedMotion ? 0 : 1300)
        .objectsData([])
        .objectLat("mapLat")
        .objectLng("mapLng")
        .objectAltitude(() => 0.0085)
        .objectFacesSurface(true)
        .objectThreeObject(markerObject)
        .objectLabel(xhsMode ? tooltip : () => "")
        .onObjectHover(hoverJob)
        .onObjectClick(selectPointJob)
        .onPointHover(hoverJob)
        .onPointClick(selectPointJob)
        .onPolygonHover((feature) => els.globe.classList.toggle("is-country-hovered", Boolean(feature)))
        .onPolygonClick(selectCountry)
        .onGlobeClick(clearFromGlobe)
        .onGlobeReady(hideLoading);

      if (window.THREE?.MeshBasicMaterial) {
        state.globe.globeMaterial(new window.THREE.MeshBasicMaterial({
          color: oceanColor,
          side: window.THREE.FrontSide
        }));
      }

      if (!xhsMode) {
        state.hoverTooltip = document.createElement("div");
        state.hoverTooltip.className = "map-hover-tooltip";
        state.hoverTooltip.hidden = true;
        state.hoverTooltip.setAttribute("aria-hidden", "true");
        els.globe.appendChild(state.hoverTooltip);
      }

      const material = state.globe.globeMaterial();
      if (material) {
        material.color?.set(oceanColor);
        if (material.emissive) material.emissive.set(oceanColor);
        if ("emissiveIntensity" in material) material.emissiveIntensity = 0;
        if (material.specular) material.specular.set(oceanColor);
        if ("shininess" in material) material.shininess = 0;
        material.needsUpdate = true;
      }

      const controls = state.globe.controls();
      controls.autoRotateSpeed = 0.18;
      controls.enableDamping = true;
      controls.dampingFactor = 0.065;
      controls.minDistance = 108;
      controls.maxDistance = 320;
      controls.addEventListener("start", stopAutoRotation);
      controls.addEventListener("change", () => refreshMarkerScales(false));
      controls.addEventListener("end", () => {
        scheduleMarkerRefresh();
        scheduleAutoRotation();
      });
      const renderer = typeof state.globe.renderer === "function" ? state.globe.renderer() : null;
      if (renderer) renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.85));

      resizeGlobe();
      applyViewLayout(state.view, 0);
      setGlobeInteraction(state.view);
      refreshMarkers();
      loadLand();

      const initialJob = jobs.find((job) => job.id === params.get("job"));
      if (initialJob && state.view === "explore") window.setTimeout(() => selectJob(initialJob), reducedMotion ? 0 : 420);
    } catch (_) {
      showFallback();
    }
  }

  function bindEvents() {
    els.search.value = state.query;
    els.start.addEventListener("click", enterExplore);
    els.home.addEventListener("click", (event) => {
      if (state.view === "explore") {
        event.preventDefault();
        exitExplore("push");
      }
    });
    els.search.addEventListener("input", () => updateSearchState(true));
    els.search.addEventListener("focus", openResults);
    els.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const top = matchingJobs()[0];
      if (top) selectJob(top);
      closeResults();
    });
    els.closeResults.addEventListener("click", closeResults);
    els.cardClose.addEventListener("click", () => clearSelection());
    els.cardPrev.addEventListener("click", () => cycleFeatured(-1));
    els.cardNext.addEventListener("click", () => cycleFeatured(1));
    els.cardDetails.addEventListener("click", () => {
      setCardDetails(!els.card.classList.contains("is-details-open"));
    });
    els.cardApply.addEventListener("click", (event) => {
      if (!xhsMode) return;
      event.preventDefault();
      if (state.featured) showApplyFeedback(state.featured);
    });
    els.reset.addEventListener("click", resetView);
    const noteGlobeActivity = () => {
      if (state.view !== "explore") return;
      stopAutoRotation();
      scheduleAutoRotation();
    };
    els.globe.addEventListener("pointerdown", stopAutoRotation, { passive: true });
    els.globe.addEventListener("pointermove", (event) => {
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      positionHoverTooltip();
      noteGlobeActivity();
    }, { passive: true });
    els.globe.addEventListener("pointerup", () => scheduleAutoRotation(), { passive: true });
    els.globe.addEventListener("pointerleave", () => scheduleAutoRotation(), { passive: true });
    els.globe.addEventListener("wheel", noteGlobeActivity, { passive: true });
    window.addEventListener("resize", resizeGlobe, { passive: true });
    if (!xhsMode) {
      window.addEventListener("popstate", () => {
        const next = new URLSearchParams(window.location.search);
        const nextView = next.get("view") === "explore" || next.has("q") || next.has("job")
          ? "explore"
          : "landing";
        state.query = next.get("q") || "";
        els.search.value = state.query;
        renderResults();
        refreshGlobePoints();
        if (nextView !== state.view) setView(nextView);
      });
    }
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (state.resultsOpen) closeResults();
        else if (state.selected) clearSelection();
        else if (state.view === "explore") exitExplore("push");
      } else if (state.view === "explore" && state.selected && !state.resultsOpen && document.activeElement !== els.search) {
        if (event.key === "ArrowLeft") cycleFeatured(-1);
        if (event.key === "ArrowRight") cycleFeatured(1);
      }
    });
  }

  function initialize() {
    if (xhsMode) {
      document.body.classList.add("is-xhs-tool");
      const footer = $(".landing-footer");
      if (footer) footer.innerHTML = "<span>本地岗位数据</span><span class=\"footer-dot\"></span><span>无需联网 · 定期更新</span>";
    }
    setView(state.view, { instant: true, force: true });
    els.body.classList.toggle("has-search", activeSearch());
    renderResults();
    bindEvents();
    initializeGlobe();
    window.setTimeout(() => {
      if (!state.ready && els.globe.querySelector("canvas")) hideLoading();
    }, 2800);
    window.setTimeout(() => {
      if (!state.ready) els.globe.querySelector("canvas") ? hideLoading() : showFallback();
    }, 9000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
