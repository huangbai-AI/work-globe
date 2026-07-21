(function () {
  "use strict";

  const DEG = Math.PI / 180;

  function valueOf(accessor, item) {
    if (typeof accessor === "function") return accessor(item);
    return item?.[accessor];
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function wrappedLongitude(value) {
    let result = value;
    while (result > 180) result -= 360;
    while (result < -180) result += 360;
    return result;
  }

  function shortestLongitude(from, to) {
    return from + wrappedLongitude(to - from);
  }

  function ease(progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  class LocalGlobe {
    constructor(element) {
      this.element = element;
      this.canvas = document.createElement("canvas");
      this.canvas.className = "local-globe-canvas";
      this.canvas.setAttribute("aria-hidden", "true");
      this.context = this.canvas.getContext("2d", { alpha: true });
      this.tooltip = document.createElement("div");
      this.tooltip.className = "local-globe-tooltip";
      this.tooltip.hidden = true;
      this.element.replaceChildren(this.canvas, this.tooltip);

      this._width = window.innerWidth;
      this._height = window.innerHeight;
      this._pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      this._offset = [0, 0];
      this._centerLat = 20;
      this._centerLng = 20;
      this._altitude = 1.7;
      this._waterColor = "#c8d6d7";
      this._atmosphereColor = "#b9cccf";
      this._showAtmosphere = true;
      this._polygons = [];
      this._points = [];
      this._rings = [];
      this._pointLat = "lat";
      this._pointLng = "lng";
      this._pointRadius = () => 0.4;
      this._pointColor = () => "#647cf1";
      this._pointLabel = () => "";
      this._polygonCapColor = () => "#e0ded5";
      this._polygonStrokeColor = () => "rgba(255,255,255,.72)";
      this._ringLat = "lat";
      this._ringLng = "lng";
      this._ringColor = () => ["rgba(100,124,241,.8)", "rgba(100,124,241,0)"];
      this._ringMaxRadius = 2.8;
      this._ringRepeatPeriod = 1300;
      this._screenPoints = [];
      this._hoveredPoint = null;
      this._ready = false;
      this._cameraAnimation = 0;
      this._lastFrame = performance.now();
      this._drag = null;
      this._pinchDistance = 0;

      const listeners = { start: [], change: [], end: [] };
      this._controls = {
        autoRotate: true,
        autoRotateSpeed: 0.14,
        enableDamping: true,
        dampingFactor: 0.065,
        enableZoom: false,
        enableRotate: false,
        enablePan: false,
        minDistance: 108,
        maxDistance: 370,
        addEventListener(type, callback) {
          if (listeners[type]) listeners[type].push(callback);
        },
        _emit(type) {
          (listeners[type] || []).forEach((callback) => callback());
        }
      };

      this._material = {
        color: { set: (value) => { this._waterColor = value; } },
        emissive: { set: () => {} },
        emissiveIntensity: 0.24,
        shininess: 3
      };

      this._bindInteractions();
      this._resizeCanvas();
      this._frame = this._frame.bind(this);
      requestAnimationFrame(this._frame);
    }

    _bindInteractions() {
      this.canvas.addEventListener("pointerdown", (event) => {
        if (!this._controls.enableRotate) return;
        this.canvas.setPointerCapture?.(event.pointerId);
        this._drag = {
          x: event.clientX,
          y: event.clientY,
          startX: event.clientX,
          startY: event.clientY,
          lat: this._centerLat,
          lng: this._centerLng
        };
        this._controls._emit("start");
        this.tooltip.hidden = true;
      });

      this.canvas.addEventListener("pointermove", (event) => {
        if (this._drag) {
          const sensitivity = 0.22 * Math.max(1, this._altitude / 1.7);
          this._centerLng = wrappedLongitude(this._drag.lng - (event.clientX - this._drag.x) * sensitivity);
          this._centerLat = clamp(this._drag.lat + (event.clientY - this._drag.y) * sensitivity, -80, 80);
          this._controls._emit("change");
          return;
        }
        if (event.pointerType !== "touch") this._showTooltip(event.clientX, event.clientY);
      });

      const finishPointer = (event) => {
        if (!this._drag) return;
        const moved = Math.hypot(event.clientX - this._drag.startX, event.clientY - this._drag.startY);
        this._drag = null;
        if (moved < 9) this._activateAt(event.clientX, event.clientY);
        this._controls._emit("end");
      };

      this.canvas.addEventListener("pointerup", finishPointer);
      this.canvas.addEventListener("pointercancel", () => { this._drag = null; });
      this.canvas.addEventListener("pointerleave", (event) => {
        this.tooltip.hidden = true;
        this._setHoveredPoint(null);
        if (event.buttons === 0) this._drag = null;
      });
      this.canvas.addEventListener("click", (event) => {
        if (!this._controls.enableRotate) this._activateAt(event.clientX, event.clientY);
      });
      this.canvas.addEventListener("wheel", (event) => {
        if (!this._controls.enableZoom) return;
        event.preventDefault();
        this._controls._emit("start");
        this._altitude = clamp(this._altitude + event.deltaY * 0.0012, 1.15, 3.1);
        this._controls._emit("change");
        this._controls._emit("end");
      }, { passive: false });
    }

    _activateAt(clientX, clientY) {
      const target = this._nearestPoint(clientX, clientY, 15);
      if (target && this._onPointClick) this._onPointClick(target.item);
      else if (this._onGlobeClick) this._onGlobeClick();
    }

    _nearestPoint(clientX, clientY, maxDistance) {
      const rect = this.canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      let winner = null;
      let distance = maxDistance;
      this._screenPoints.forEach((point) => {
        const next = Math.hypot(point.x - x, point.y - y);
        if (next <= distance) {
          distance = next;
          winner = point;
        }
      });
      return winner;
    }

    _showTooltip(clientX, clientY) {
      const point = this._nearestPoint(clientX, clientY, 12);
      if (!point) {
        this.tooltip.hidden = true;
        this._setHoveredPoint(null);
        return;
      }
      this._setHoveredPoint(point.item);
      const label = valueOf(this._pointLabel, point.item);
      if (!label) {
        this.tooltip.hidden = true;
        return;
      }
      const rect = this.element.getBoundingClientRect();
      this.tooltip.innerHTML = label;
      this.tooltip.style.left = `${clientX - rect.left}px`;
      this.tooltip.style.top = `${clientY - rect.top}px`;
      this.tooltip.hidden = false;
      const tooltipWidth = this.tooltip.offsetWidth || 320;
      const tooltipHeight = this.tooltip.offsetHeight || 220;
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      this.tooltip.classList.toggle("is-left", localX + tooltipWidth + 30 > rect.width);
      this.tooltip.classList.toggle("is-below", localY - tooltipHeight - 24 < 0);
    }

    _setHoveredPoint(item) {
      if ((this._hoveredPoint?.id || null) === (item?.id || null)) return;
      this._hoveredPoint = item || null;
      this._onPointHover?.(this._hoveredPoint);
    }

    _resizeCanvas() {
      const width = Math.max(1, Math.round(this._width));
      const height = Math.max(1, Math.round(this._height));
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
      this.canvas.width = Math.round(width * this._pixelRatio);
      this.canvas.height = Math.round(height * this._pixelRatio);
    }

    _layout() {
      const mobile = this._width <= 760;
      const base = mobile
        ? this._width * 0.85
        : Math.min(this._width, this._height) * 0.5;
      return {
        cx: this._width / 2 + this._offset[0],
        cy: this._height / 2 + this._offset[1],
        radius: base * 1.62 / Math.max(1.05, this._altitude)
      };
    }

    _project(lat, lng, layout) {
      const phi = Number(lat) * DEG;
      const lambda = wrappedLongitude(Number(lng) - this._centerLng) * DEG;
      const phi0 = this._centerLat * DEG;
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);
      const cosLambda = Math.cos(lambda);
      const x = cosPhi * Math.sin(lambda);
      const y = sinPhi * Math.cos(phi0) - cosPhi * cosLambda * Math.sin(phi0);
      const z = sinPhi * Math.sin(phi0) + cosPhi * cosLambda * Math.cos(phi0);
      return {
        x: layout.cx + layout.radius * x,
        y: layout.cy - layout.radius * y,
        z
      };
    }

    _drawSphere(context, layout) {
      context.save();
      if (this._showAtmosphere) {
        context.shadowColor = this._atmosphereColor;
        context.shadowBlur = Math.max(14, layout.radius * 0.09);
      }
      const gradient = context.createRadialGradient(
        layout.cx - layout.radius * 0.3,
        layout.cy - layout.radius * 0.34,
        layout.radius * 0.08,
        layout.cx,
        layout.cy,
        layout.radius
      );
      gradient.addColorStop(0, "#edf7f7");
      gradient.addColorStop(0.58, this._waterColor);
      gradient.addColorStop(1, "#aebbbd");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(layout.cx, layout.cy, layout.radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }

    _polygonRings(feature) {
      const geometry = feature?.geometry;
      if (!geometry) return [];
      if (geometry.type === "Polygon") return geometry.coordinates;
      if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
      return [];
    }

    _drawLand(context, layout) {
      context.save();
      context.beginPath();
      context.arc(layout.cx, layout.cy, layout.radius - 0.5, 0, Math.PI * 2);
      context.clip();
      this._polygons.forEach((feature) => {
        const rings = this._polygonRings(feature);
        if (!rings.length) return;
        context.beginPath();
        let visibleSegments = 0;
        rings.forEach((ring) => {
          let drawing = false;
          ring.forEach((coordinate) => {
            const point = this._project(coordinate[1], coordinate[0], layout);
            if (point.z > -0.015) {
              if (!drawing) context.moveTo(point.x, point.y);
              else context.lineTo(point.x, point.y);
              drawing = true;
              visibleSegments += 1;
            } else {
              drawing = false;
            }
          });
        });
        if (visibleSegments < 3) return;
        context.fillStyle = valueOf(this._polygonCapColor, feature) || "#e0ded5";
        context.strokeStyle = valueOf(this._polygonStrokeColor, feature) || "rgba(255,255,255,.72)";
        context.lineWidth = Math.max(0.55, layout.radius / 900);
        context.fill("evenodd");
        context.stroke();
      });
      context.restore();
    }

    _drawPoints(context, layout) {
      const projected = [];
      this._points.forEach((item) => {
        const point = this._project(valueOf(this._pointLat, item), valueOf(this._pointLng, item), layout);
        if (point.z <= 0.005) return;
        projected.push({ ...point, item });
      });
      projected.sort((a, b) => a.z - b.z);
      this._screenPoints = projected;
      projected.forEach((point) => {
        const rawRadius = Number(valueOf(this._pointRadius, point.item)) || 0.2;
        const radius = clamp(1.5 + rawRadius * 3.2, 1.8, 6.2);
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fillStyle = valueOf(this._pointColor, point.item) || "#647cf1";
        context.fill();
      });
    }

    _drawRings(context, layout, now) {
      this._rings.forEach((item) => {
        const point = this._project(valueOf(this._ringLat, item), valueOf(this._ringLng, item), layout);
        if (point.z <= 0) return;
        const period = Math.max(700, this._ringRepeatPeriod || 1300);
        const progress = (now % period) / period;
        const radius = 4 + progress * (this._ringMaxRadius || 2.8) * 8;
        const colors = valueOf(this._ringColor, item);
        const color = Array.isArray(colors) ? colors[0] : colors;
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.strokeStyle = color || "rgba(100,124,241,.7)";
        context.globalAlpha = 1 - progress;
        context.lineWidth = 1.4;
        context.stroke();
        context.globalAlpha = 1;
      });
    }

    _frame(now) {
      const delta = Math.min(50, now - this._lastFrame);
      this._lastFrame = now;
      if (this._controls.autoRotate && !this._drag && !this._cameraAnimation) {
        this._centerLng = wrappedLongitude(this._centerLng + delta * this._controls.autoRotateSpeed * 0.006);
      }
      const context = this.context;
      context.setTransform(this._pixelRatio, 0, 0, this._pixelRatio, 0, 0);
      context.clearRect(0, 0, this._width, this._height);
      const layout = this._layout();
      this._drawSphere(context, layout);
      this._drawLand(context, layout);
      this._drawPoints(context, layout);
      this._drawRings(context, layout, now);
      if (!this._ready) {
        this._ready = true;
        this._onGlobeReady?.();
      }
      requestAnimationFrame(this._frame);
    }

    _chain(name, initial) {
      if (initial === undefined) return this[`_${name}`];
      this[`_${name}`] = initial;
      return this;
    }

    width(value) { if (value === undefined) return this._width; this._width = value; this._resizeCanvas(); return this; }
    height(value) { if (value === undefined) return this._height; this._height = value; this._resizeCanvas(); return this; }
    globeOffset(value) { return this._chain("offset", value); }
    backgroundColor(value) { return this._chain("backgroundColor", value); }
    globeImageUrl() { return this; }
    bumpImageUrl() { return this; }
    showAtmosphere(value) { return this._chain("showAtmosphere", value); }
    atmosphereColor(value) { return this._chain("atmosphereColor", value); }
    atmosphereAltitude(value) { return this._chain("atmosphereAltitude", value); }
    showGraticules(value) { return this._chain("showGraticules", value); }
    polygonsData(value) { return this._chain("polygons", value); }
    polygonAltitude(value) { return this._chain("polygonAltitude", value); }
    polygonCapCurvatureResolution(value) { return this._chain("polygonCapCurvatureResolution", value); }
    polygonCapColor(value) { return this._chain("polygonCapColor", value); }
    polygonCapMaterial() { return this; }
    polygonSideColor(value) { return this._chain("polygonSideColor", value); }
    polygonStrokeColor(value) { return this._chain("polygonStrokeColor", value); }
    polygonLabel(value) { return this._chain("polygonLabel", value); }
    polygonsTransitionDuration(value) { return this._chain("polygonsTransitionDuration", value); }
    pointsData(value) { return this._chain("points", value); }
    pointLat(value) { return this._chain("pointLat", value); }
    pointLng(value) { return this._chain("pointLng", value); }
    pointAltitude(value) { return this._chain("pointAltitude", value); }
    pointRadius(value) { return this._chain("pointRadius", value); }
    pointColor(value) { return this._chain("pointColor", value); }
    pointResolution(value) { return this._chain("pointResolution", value); }
    pointLabel(value) { return this._chain("pointLabel", value); }
    objectsData() { return this; }
    objectLat() { return this; }
    objectLng() { return this; }
    objectAltitude() { return this; }
    objectFacesSurface() { return this; }
    objectThreeObject() { return this; }
    objectLabel() { return this; }
    ringsData(value) { return this._chain("rings", value); }
    ringLat(value) { return this._chain("ringLat", value); }
    ringLng(value) { return this._chain("ringLng", value); }
    ringColor(value) { return this._chain("ringColor", value); }
    ringMaxRadius(value) { return this._chain("ringMaxRadius", value); }
    ringPropagationSpeed(value) { return this._chain("ringPropagationSpeed", value); }
    ringRepeatPeriod(value) { return this._chain("ringRepeatPeriod", value); }
    onPointClick(value) { return this._chain("onPointClick", value); }
    onPointHover(value) { return this._chain("onPointHover", value); }
    onObjectClick() { return this; }
    onObjectHover() { return this; }
    onPolygonClick(value) { return this._chain("onPolygonClick", value); }
    onPolygonHover(value) { return this._chain("onPolygonHover", value); }
    onGlobeClick(value) { return this._chain("onGlobeClick", value); }
    onGlobeReady(value) {
      this._onGlobeReady = value;
      if (this._ready) requestAnimationFrame(() => value?.());
      return this;
    }
    controls() { return this._controls; }
    globeMaterial() { return this._material; }
    renderer() {
      return {
        setPixelRatio: (value) => {
          this._pixelRatio = clamp(Number(value) || 1, 1, 2);
          this._resizeCanvas();
        }
      };
    }

    pointOfView(view, duration = 0) {
      if (!view) return { lat: this._centerLat, lng: this._centerLng, altitude: this._altitude };
      const target = {
        lat: Number.isFinite(view.lat) ? view.lat : this._centerLat,
        lng: Number.isFinite(view.lng) ? shortestLongitude(this._centerLng, view.lng) : this._centerLng,
        altitude: Number.isFinite(view.altitude) ? view.altitude : this._altitude
      };
      if (!duration) {
        this._centerLat = target.lat;
        this._centerLng = wrappedLongitude(target.lng);
        this._altitude = target.altitude;
        return this;
      }
      if (this._cameraAnimation) cancelAnimationFrame(this._cameraAnimation);
      const from = { lat: this._centerLat, lng: this._centerLng, altitude: this._altitude };
      const started = performance.now();
      const animate = (now) => {
        const progress = Math.min(1, (now - started) / duration);
        const amount = ease(progress);
        this._centerLat = from.lat + (target.lat - from.lat) * amount;
        this._centerLng = wrappedLongitude(from.lng + (target.lng - from.lng) * amount);
        this._altitude = from.altitude + (target.altitude - from.altitude) * amount;
        if (progress < 1) this._cameraAnimation = requestAnimationFrame(animate);
        else this._cameraAnimation = 0;
      };
      this._cameraAnimation = requestAnimationFrame(animate);
      return this;
    }
  }

  function Globe(elementOrOptions) {
    if (elementOrOptions && elementOrOptions.nodeType === 1) return new LocalGlobe(elementOrOptions);
    return (element) => new LocalGlobe(element);
  }

  window.Globe = Globe;
})();
