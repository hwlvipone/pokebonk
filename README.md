# PokéBonk — SEO / GEO play hub

Static **HTML + CSS + JS** English landing site that embeds the official [PokéBonk](https://pokebonk.com/?lang=en) browser game in an iframe, with guides, FAQ, and machine-readable GEO files (`llms.txt`).

> **Unofficial fan game.** Not affiliated with Nintendo, Game Freak, Creatures, or The Pokémon Company.

## Live

- **GitHub Pages (intended):** https://hwlvipone.github.io/pokebonk/
- **Iframe source:** `https://pokebonk.com/?lang=en` (iframeable; no `X-Frame-Options` on the game origin)

## Pages

| File | Role |
|------|------|
| `index.html` | Hero + play iframe + intro + FAQ teaser |
| `how-to-play.html` | Controls & progression guide |
| `faq.html` | FAQ + `FAQPage` JSON-LD |
| `about.html` | Hub purpose + trademark disclaimer |
| `robots.txt` / `sitemap.xml` | Crawl / index |
| `llms.txt` / `llms-full.txt` | GEO / AEO summaries |

Shared assets: `css/styles.css`, `js/site.config.js`, `js/main.js`, `assets/og-card.jpg`.

## Configure domain (`origin`)

Edit **one place**: `js/site.config.js`

```js
origin: "https://hwlvipone.github.io/pokebonk",
```

Also update absolute URLs in:

- `<link rel="canonical">`, Open Graph, Twitter, and JSON-LD inside each HTML page
- `robots.txt` (`Sitemap:`)
- `sitemap.xml` (`<loc>`)
- `llms.txt` / `llms-full.txt`

If you move to a custom domain (e.g. Cloudflare Pages), replace that origin everywhere (or regenerate from a single build step later). Empty / wrong origin breaks absolute canonicals and social previews.

## Local preview

```bash
cd pokebonk
python3 -m http.server 8080
# open http://localhost:8080/
```

## Deploy tips

### GitHub Pages

1. Repo Settings → Pages → Source: **Deploy from a branch**
2. Branch: `main` / folder: `/ (root)`
3. Site URL: `https://hwlvipone.github.io/pokebonk/`

### Cloudflare Pages

1. Connect this GitHub repo
2. Build command: none (static)
3. Output directory: `/`
4. Set custom domain, then update `origin` + sitemap/canonicals as above

## Copy source

Page copy may be provisional (from official meta: free 3D survivor, 151 Kanto, etc.) marked with `<!-- TODO: replace with gefei copy -->`, or integrated from `pokebonk-gefei-copy.json` when provided.

## Stack

Plain multi-page HTML. No React, Next, or ShipAny.
