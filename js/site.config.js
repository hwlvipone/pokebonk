/**
 * PokéBonk SEO wrapper — site configuration
 *
 * ORIGIN: Production custom domain (no trailing slash).
 * DNS / GitHub Pages custom domain must point here; see README.
 * Examples:
 *   "https://playpokebonk.org"              // Custom domain (production)
 *   "https://hwlvipone.github.io/pokebonk"  // GitHub Pages project fallback
 *   ""                                      // Path-only relative URLs (dev)
 *
 * When ORIGIN is empty, canonicals and sitemap use path-only relative URLs.
 * Absolute OG/Twitter image URLs still need a real origin for social crawlers.
 */
window.POKEBONK_SITE = Object.freeze({
  name: "PokéBonk",
  // Production origin (custom domain). GitHub Pages serves this repo at domain root.
  origin: "https://playpokebonk.org",
  iframeSrc: "https://pokebonk.com/?lang=en",
  officialUrl: "https://pokebonk.com/?lang=en",
  ogImagePath: "/assets/og-card.jpg",
  themeColor: "#1a1630",
  accent: "#e94756",
  locale: "en_US",
  copySource: "gefei", // flipped to "gefei" if /workspace/pokebonk-gefei-copy.json was used
  // Hub layout: how-to-play + FAQ live on index.html as #how-to-play / #faq (about.html stays separate).
  singlePageHowToFaq: true,
});
