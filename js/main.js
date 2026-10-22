/**
 * PokéBonk SEO wrapper — shared UI helpers
 */
(function () {
  const cfg = window.POKEBONK_SITE || {};

  /** Resolve absolute or path URL against configured origin. */
  function siteUrl(path) {
    const p = path.startsWith("/") ? path : "/" + path;
    if (!cfg.origin) return p;
    return cfg.origin.replace(/\/$/, "") + p;
  }

  /** Inject/update canonical if a placeholder data attribute is present. */
  function applyCanonical() {
    const link = document.querySelector('link[rel="canonical"][data-path]');
    if (!link) return;
    const path = link.getAttribute("data-path") || "/";
    if (cfg.origin) {
      link.setAttribute("href", siteUrl(path === "/" ? "/" : path));
    } else {
      // Path-only when origin not set
      link.setAttribute("href", path);
    }
  }

  function applyOgUrl() {
    const og = document.querySelector('meta[property="og:url"][data-path]');
    if (!og) return;
    const path = og.getAttribute("data-path") || "/";
    if (cfg.origin) {
      og.setAttribute("content", siteUrl(path === "/" ? "/" : path));
    }
  }

  /** Mark current nav link. */
  function markCurrentNav() {
    const path = location.pathname.replace(/\/$/, "") || "/";
    document.querySelectorAll(".nav a, .footer-nav a").forEach((a) => {
      try {
        const href = a.getAttribute("href") || "";
        const u = new URL(href, location.href);
        let ap = u.pathname.replace(/\/$/, "") || "/";
        // GitHub Pages project base
        const base = cfg.origin ? new URL(cfg.origin).pathname.replace(/\/$/, "") : "";
        if (base && ap.startsWith(base)) {
          ap = ap.slice(base.length) || "/";
        }
        const page = path.endsWith(".html")
          ? path.split("/").pop()
          : path.split("/").filter(Boolean).pop() || "index.html";
        const target = ap.endsWith(".html")
          ? ap.split("/").pop()
          : ap === "/"
            ? "index.html"
            : (ap.split("/").filter(Boolean).pop() || "") + ".html";
        if (
          (path === "/" || path.endsWith("/pokebonk") || path.endsWith("/pokebonk/")) &&
          (href === "index.html" || href === "./" || href === "/")
        ) {
          a.setAttribute("aria-current", "page");
        } else if (page === target || path.endsWith("/" + target.replace(".html", ""))) {
          a.setAttribute("aria-current", "page");
        }
      } catch (_) { /* ignore */ }
    });
  }

  /** Fullscreen the play iframe when toolbar button clicked. */
  function bindFullscreen() {
    const btn = document.getElementById("btn-fullscreen");
    const frame = document.getElementById("game-frame");
    if (!btn || !frame) return;
    btn.addEventListener("click", () => {
      const el = frame;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyCanonical();
    applyOgUrl();
    markCurrentNav();
    bindFullscreen();
  });

  window.PokebonkSite = { siteUrl, cfg };
})();
