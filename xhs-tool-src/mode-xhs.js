(function () {
  "use strict";
  window.XHS_TOOL_MODE = true;

  function updateKeyboardInset() {
    const viewport = window.visualViewport;
    const inset = viewport
      ? Math.max(0, Math.round(window.innerHeight - viewport.height - viewport.offsetTop))
      : 0;
    document.documentElement.style.setProperty("--xhs-keyboard-inset", `${inset}px`);
  }

  updateKeyboardInset();
  window.visualViewport?.addEventListener("resize", updateKeyboardInset, { passive: true });
  window.visualViewport?.addEventListener("scroll", updateKeyboardInset, { passive: true });
})();
