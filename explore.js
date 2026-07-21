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
  const params = xhsMode ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const initialExplore = params.get("view") === "explore"
    || params.has("q")
    || params.has("job");

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
    hovered: null,
    featured: null,
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

  function colorFor(job) {
    return categories[job.category]?.color || "#647cf1";
  }

  function normalize(value) {
    return String(value || "").trim().toLocaleLowerCase("zh-CN");
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
    const base = 0.16 + Math.min(0.64, Math.log10((job.attention || 0) + 10) * 0.14);
    const hoverScale = state.hovered?.id === job.id ? 1.55 : 1;
    if (!activeSearch()) return base * hoverScale;
    return (matches(job) ? base * 1.24 : Math.max(0.08, base * 0.42)) * hoverScale;
  }

  function pointColor(job) {
    const color = colorFor(job);
    if (state.hovered?.id === job.id) return hexToRgba(color, 1);
    if (!activeSearch()) return hexToRgba(color, job.remote ? 0.7 : 0.84);
    return matches(job) ? hexToRgba(color, 0.96) : "rgba(80, 92, 94, 0.075)";
  }

  function pointAltitude(job) {
    const base = job.remote ? 0.007 : 0.003;
    const hoverLift = state.hovered?.id === job.id ? 0.008 : 0;
    return (activeSearch() && matches(job) ? base + 0.004 : base) + hoverLift;
  }

  function tooltip(job) {
    if (!job) return "";
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
      <small>点击光点查看完整职位</small>
    </div>`;
  }

  function hoverJob(job) {
    if ((state.hovered?.id || null) === (job?.id || null)) return;
    state.hovered = job || null;
    if (!state.globe) return;
    state.globe
      .pointRadius(pointRadius)
      .pointColor(pointColor)
      .pointAltitude(pointAltitude);
  }

  function renderResults() {
    const result = matchingJobs();
    const visible = result.slice(0, 8);
    els.count.textContent = activeSearch() ? `${result.length} 个` : "";
    els.resultLabel.textContent = activeSearch() ? `找到 ${result.length} 个岗位` : "本月值得看看";
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
    els.sheet.hidden = false;
    renderResults();
  }

  function closeResults() {
    state.resultsOpen = false;
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
    state.globe
      .pointRadius(pointRadius)
      .pointColor(pointColor)
      .pointAltitude(pointAltitude)
      .pointsData([...mapJobs]);
  }

  function updateSearchState(shouldOpen) {
    state.query = els.search.value;
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
    els.card.hidden = false;
    els.card.style.setProperty("--job-color", colorFor(job));
    els.cardSource.textContent = job.source;
    els.cardPosted.textContent = job.posted;
    els.cardEvidence.textContent = job.evidence;
    els.cardCompany.textContent = job.company;
    els.cardTitle.textContent = job.title;
    els.cardLocation.textContent = job.location;
    els.cardSalary.textContent = job.salary;
    els.cardSummary.textContent = job.summary;
    els.cardTags.innerHTML = (job.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    configureApplyLink(job);
    const pool = matchingJobs();
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
    const pool = matchingJobs();
    if (!pool.length) return;
    const currentIndex = Math.max(0, pool.findIndex((job) => job.id === state.featured?.id));
    const nextIndex = (currentIndex + direction + pool.length) % pool.length;
    selectJob(pool[nextIndex]);
  }

  function selectJob(job) {
    state.selected = job;
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
    if (state.globe && !reducedMotion) {
      state.autoRotate = true;
      state.globe.controls().autoRotate = true;
    }
    syncUrl();
  }

  function selectPointJob(job, event) {
    state.lastPointClickAt = performance.now();
    event?.stopPropagation?.();
    selectJob(job);
  }

  function clearFromGlobe() {
    if (performance.now() - state.lastPointClickAt < 180) return;
    clearSelection();
  }

  function clearSelection(sync = true) {
    const hadSelection = Boolean(state.selected);
    state.selected = null;
    state.featured = null;
    els.card.hidden = true;
    setCardDetails(false);
    state.globe?.ringsData([]);
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
      state.globe.pointOfView({ lat: 20, lng: 20, altitude: viewLayout("explore").altitude }, reducedMotion ? 0 : 720);
      if (!reducedMotion) {
        state.autoRotate = true;
        state.globe.controls().autoRotate = true;
      }
    }
    syncUrl();
  }

  function landColor(feature) {
    const palette = ["#e0ded5", "#e6e1d9", "#dadfd9", "#e6ded8", "#d9dedd", "#e2e0d7"];
    const name = String(feature.properties?.ISO_A3 || feature.properties?.ADMIN || "land");
    const index = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palette.length;
    return palette[index];
  }

  async function loadLand() {
    if (Array.isArray(window.WORLD_COUNTRIES)) {
      state.globe?.polygonsData(window.WORLD_COUNTRIES);
      return;
    }
    if (xhsMode) return;
    try {
      const response = await fetch("https://cdn.jsdelivr.net/gh/vasturiano/globe.gl@master/example/datasets/ne_110m_admin_0_countries.geojson");
      if (!response.ok) throw new Error(String(response.status));
      const world = await response.json();
      state.globe?.polygonsData(world.features || []);
    } catch (_) {
      // 边界加载失败不影响工作点与搜索。
    }
  }

  function hideLoading() {
    if (state.ready) return;
    state.ready = true;
    els.loading.classList.add("is-hidden");
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
          landscapePhone ? Math.round(width * 0.2) : width <= 760 ? Math.round(width * 0.12) : Math.round(width * 0.25),
          width <= 760 && !landscapePhone ? Math.round(height * 0.25) : 0
        ],
        altitude: width <= 760 ? 2.15 : 1.62,
        lng: 24
      };
    }
    if (landscapePhone) {
      if (!state.selected) {
        return {
          offset: [0, Math.round(height * 0.08)],
          altitude: 1.28,
          lng: 20
        };
      }
      return {
        offset: [Math.round(-width * 0.08), Math.round(height * 0.2)],
        altitude: 1.66,
        lng: 20
      };
    }
    if (!state.selected) {
      return {
        offset: [0, width <= 760 ? Math.round(height * 0.17) : Math.round(height * 0.07)],
        altitude: width <= 760 ? 1.42 : 1.22,
        lng: 20
      };
    }
    return {
      offset: [
        0,
        width <= 760 ? Math.round(height * 0.31) : Math.round(height * 0.36)
      ],
      altitude: width <= 760 ? 1.82 : 1.72,
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
    state.globe.pointOfView({ lat: 20, lng: layout.lng, altitude: layout.altitude }, duration);
  }

  function setGlobeInteraction(view) {
    if (!state.globe) return;
    const controls = state.globe.controls();
    const exploring = view === "explore";
    controls.enableZoom = exploring;
    controls.enableRotate = exploring;
    controls.enablePan = false;
    state.autoRotate = !reducedMotion;
    controls.autoRotate = state.autoRotate;
  }

  function setView(view, options = {}) {
    if (view === state.view && !options.force) return;
    const duration = reducedMotion || options.instant ? 0 : 1180;
    state.view = view;
    state.transitioning = duration > 0;
    els.body.classList.toggle("is-landing", view === "landing");
    els.body.classList.toggle("is-explore", view === "explore");
    els.body.classList.toggle("is-transitioning", duration > 0);
    document.title = view === "explore" ? "寻找工作｜OpenWork" : "OpenWork｜世界各地正在招什么";

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
        globe = new window.Globe(els.globe, { animateIn: !reducedMotion, waitForGlobeReady: true });
      } catch (_) {
        globe = window.Globe({ animateIn: !reducedMotion, waitForGlobeReady: true })(els.globe);
      }

      state.globe = globe
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl(null)
        .bumpImageUrl(null)
        .showAtmosphere(true)
        .atmosphereColor("#b9cccf")
        .atmosphereAltitude(0.13)
        .showGraticules(false)
        .polygonsData([])
        .polygonAltitude(0.006)
        .polygonCapColor(landColor)
        .polygonSideColor(() => "rgba(168, 182, 179, 0.22)")
        .polygonStrokeColor(() => "rgba(255,255,255,0.74)")
        .polygonsTransitionDuration(reducedMotion ? 0 : 520)
        .pointsData(mapJobs)
        .pointLat("mapLat")
        .pointLng("mapLng")
        .pointAltitude(pointAltitude)
        .pointRadius(pointRadius)
        .pointColor(pointColor)
        .pointResolution(isTouch ? 8 : 11)
        .pointLabel(tooltip)
        .ringsData([])
        .ringLat("mapLat")
        .ringLng("mapLng")
        .ringMaxRadius(2.8)
        .ringPropagationSpeed(reducedMotion ? 0 : 1)
        .ringRepeatPeriod(reducedMotion ? 0 : 1300)
        .onPointHover(hoverJob)
        .onPointClick(selectPointJob)
        .onGlobeClick(clearFromGlobe)
        .onGlobeReady(hideLoading);

      const material = state.globe.globeMaterial();
      if (material) {
        material.color.set("#c8d6d7");
        material.emissive.set("#edf2ef");
        material.emissiveIntensity = 0.24;
        material.shininess = 3;
      }

      const controls = state.globe.controls();
      controls.autoRotateSpeed = 0.22;
      controls.enableDamping = true;
      controls.dampingFactor = 0.065;
      controls.minDistance = 108;
      controls.maxDistance = 370;
      const renderer = typeof state.globe.renderer === "function" ? state.globe.renderer() : null;
      if (renderer) renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.35 : 1.85));

      resizeGlobe();
      applyViewLayout(state.view, 0);
      setGlobeInteraction(state.view);
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
    window.addEventListener("resize", resizeGlobe, { passive: true });
    if (!xhsMode) {
      window.addEventListener("popstate", () => {
        const next = new URLSearchParams(window.location.search);
        const nextView = next.get("view") === "explore" || next.has("q") || next.has("job")
          ? "explore"
          : "landing";
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
      const dates = jobs.map((job) => job.postedAt).filter(Boolean).sort();
      const latestDate = dates[dates.length - 1] || "本期";
      const quietWindow = $(".quiet-window");
      const sourceWindow = $(".source-window span");
      const footer = $(".landing-footer");
      if (quietWindow) quietWindow.textContent = "离线精选版";
      if (sourceWindow) sourceWindow.textContent = `数据截至 ${latestDate}`;
      if (footer) footer.innerHTML = "<span>本地岗位数据</span><span class=\"footer-dot\"></span><span>无需联网 · 定期更新</span>";
    }
    setView(state.view, { instant: true, force: true });
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
