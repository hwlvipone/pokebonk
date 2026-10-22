# PokéBonk — SEO / GEO play hub

Static **HTML + CSS + JS** English landing site that embeds the official [PokéBonk](https://pokebonk.com/?lang=en) browser game in an iframe, with how-to-play and FAQ as **in-page sections** on the home page, plus machine-readable GEO files (`llms.txt`).

> **Unofficial fan game.** Not affiliated with Nintendo, Game Freak, Creatures, or The Pokémon Company.

## Live

- **GitHub Pages (intended):** https://hwlvipone.github.io/pokebonk/
- **Iframe source:** `https://pokebonk.com/?lang=en` (iframeable; no `X-Frame-Options` on the game origin)

## Pages

| File | Role |
|------|------|
| `index.html` | Single hub: hero + play iframe + intro + `#how-to-play` + `#faq` |
| `how-to-play.html` | Thin redirect → `/#how-to-play` (legacy URLs) |
| `faq.html` | Thin redirect → `/#faq` (legacy URLs) |
| `about.html` | Hub purpose + trademark disclaimer |
| `robots.txt` / `sitemap.xml` | Crawl / index |
| `llms.txt` / `llms-full.txt` | GEO / AEO summaries |

Shared assets: `css/styles.css`, `js/site.config.js`, `js/main.js`, `assets/og-card.jpg`.

### Nav (index)

- **Play** → external `https://pokebonk.com/?lang=en`
- **Home** → `#` (top)
- **How to Play** → `#how-to-play`
- **FAQ** → `#faq`
- **About** → `about.html`

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

Marketing/SEO copy is applied from gefei SEO/GEO JSON (`pokebonk-gefei-copy.json`). Primary homepage keywords: **pokemon browser game** + brand **pokebonk**. `js/site.config.js` has `copySource: "gefei"` and `singlePageHowToFaq: true`.

## Stack

Plain HTML. No React, Next, or ShipAny. How-to + FAQ are single-page sections with fragment anchors; About remains a separate page.
