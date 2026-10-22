/**
 * PokéBonk SEO wrapper — site configuration
 *
 * ORIGIN: Set this to your public site origin (no trailing slash) before deploy.
 * Examples:
 *   "https://hwlvipone.github.io/pokebonk"  // GitHub Pages (project site)
 *   "https://pokebonk.example.com"          // Custom / Cloudflare Pages
 *   ""                                      // Path-only relative URLs (dev / pre-domain)
 *
 * When ORIGIN is empty, canonicals and sitemap use path-only relative URLs.
 * Absolute OG/Twitter image URLs still need a real origin for social crawlers.
 */
window.POKEBONK_SITE = Object.freeze({
  name: "PokéBonk",
  // GitHub Pages project site under hwlvipone/pokebonk
  origin: "https://hwlvipone.github.io/pokebonk",
  iframeSrc: "https://pokebonk.com/?lang=en",
  officialUrl: "https://pokebonk.com/?lang=en",
  ogImagePath: "/assets/og-card.jpg",
  themeColor: "#1a1630",
  accent: "#e94756",
  locale: "en_US",
  copySource: "provisional", // flipped to "gefei" if /workspace/pokebonk-gefei-copy.json was used
});
