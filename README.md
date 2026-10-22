# PokéBonk — SEO / GEO play hub

Static **HTML + CSS + JS** English landing site that embeds the official [PokéBonk](https://pokebonk.com/?lang=en) browser game in an iframe, with how-to-play and FAQ as **in-page sections** on the home page, plus machine-readable GEO files (`llms.txt`).

> **Unofficial fan game.** Not affiliated with Nintendo, Game Freak, Creatures, or The Pokémon Company.

## Live

- **Production origin:** https://playpokebonk.org/
- **GitHub repo / Pages source:** https://github.com/hwlvipone/pokebonk
- **Iframe source:** `https://pokebonk.com/?lang=en` (iframeable; no `X-Frame-Options` on the game origin)

### Custom domain (DNS / GitHub Pages)

Code and SEO files assume **`https://playpokebonk.org`** (site at domain root, no `/pokebonk` path prefix).

You still need to finish hosting wiring:

1. Repo root includes a `CNAME` file with `playpokebonk.org`
2. In GitHub → Settings → Pages → Custom domain: set `playpokebonk.org` (and enable HTTPS when available)
3. At your DNS provider: point apex / `www` per GitHub Pages docs (A/ALIAS/CNAME as required)

Until DNS propagates, the old `https://hwlvipone.github.io/pokebonk/` URL may still serve the same branch.

## Pages

| File | Role |
|------|------|
| `index.html` | Single hub: hero + `#play` iframe + intro + gameplay video + `#how-to-play` + `#faq` |
| `blog.html` | Blog index + sample pokemon browser survivor article |
| `about.html` | Hub purpose + trademark disclaimer |
| `terms.html` | Terms of Use / Legal |
| `privacy.html` | Privacy Policy |
| `CNAME` | GitHub Pages custom domain → `playpokebonk.org` |
| `robots.txt` / `sitemap.xml` | Crawl / index (home, about, blog, terms, privacy) |
| `llms.txt` / `llms-full.txt` | GEO / AEO summaries |

Shared assets: `css/styles.css`, `js/site.config.js`, `js/main.js`, `assets/og-card.jpg`, `assets/logo-mark.png`, `assets/favicon.ico`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`.

### Nav (index)

- **Play** → `#play` (in-page iframe embed)
- **Home** → `#` (top)
- **How to Play** → `#how-to-play`
- **FAQ** → `#faq`
- **Blog** → `blog.html`
- **About** → `about.html`
- **Terms** → `terms.html`
- **Privacy** → `privacy.html`

## Configure domain (`origin`)

Edit **one place**: `js/site.config.js`

```js
origin: "https://playpokebonk.org",
```

Also update absolute URLs in:

- `<link rel="canonical">`, Open Graph, Twitter, and JSON-LD inside each HTML page
- `robots.txt` (`Sitemap:`)
- `sitemap.xml` (`<loc>`)
- `llms.txt` / `llms-full.txt`

If you move domains again, replace that origin everywhere (or regenerate from a single build step later). Empty / wrong origin breaks absolute canonicals and social previews.

## Local preview

```bash
cd pokebonk
python3 -m http.server 8080
# open http://localhost:8080/
```

## Deploy tips

### GitHub Pages + custom domain

1. Settings → Pages → Source: **Deploy from a branch** (`main` / `/ (root)`)
2. Custom domain: `playpokebonk.org` (matches `CNAME`)
3. Production URL: `https://playpokebonk.org/`

### Cloudflare Pages

1. Connect this GitHub repo
2. Build command: none (static)
3. Output directory: `/`
4. Attach `playpokebonk.org`, then keep `origin` + sitemap/canonicals as above

## Copy source

Marketing/SEO copy is applied from gefei SEO/GEO JSON (`pokebonk-gefei-copy.json`). Primary homepage keywords: **pokemon browser game** + brand **pokebonk**. `js/site.config.js` has `copySource: "gefei"` and `singlePageHowToFaq: true`.

## Stack

Plain HTML. No React, Next, or ShipAny. How-to + FAQ are single-page sections with fragment anchors; About remains a separate page.
