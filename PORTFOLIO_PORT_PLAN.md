# Portfolio Port — Implementation Plan

Porting the design at `d:/Harish/Websites/Eyelevel Portfolio/eyelevel-portfolio` into this site.

## Status — built, not committed

Phases 0–4 are done and the build is green. Nothing is committed; everything sits in the
working tree.

| Phase | |
|---|---|
| 0 — tokens, v4→v3, globals, fonts, icons | ✅ |
| 1 — asset scaffold | ✅ |
| 2 — data layer | ✅ |
| 3 — components | ✅ |
| 4 — routes, SEO, prerender | ✅ |
| 5 — retire `Works.tsx` / `works.ts` | ⏳ left in place deliberately, see below |
| 6 — QA (empty-folder pass) | ✅ |

Verified: `npm run build` clean · all 7 routes prerender with correct titles · 7 URLs in
`sitemap.xml` · every `pf-*` utility survives Tailwind's purge · `.pf-root` beats the sitewide
`h1-h6 { Dela Gothic }` rule (computed font is Space Grotesk) · background computes to
`rgb(243,239,230)` = `#F3EFE6` · no console errors on any route · eslint and tsc clean for all
new files.

`Works.tsx`, `works.ts` and `PhoneCarousel.tsx` are unrouted but still in the repo. Reverting is
a two-line change in `AppRoutes.tsx`. Delete them once the asset folders are filled and you're
happy with the new pages.

## Decisions (locked)

| | |
|---|---|
| **Visual** | Keep teal + gold exactly — the portfolio is a styled island inside the site |
| **Routing** | Replace the current `/portfolio` (`Works.tsx`) |
| **Categories** | The portfolio's 6 — Websites, Photography, Brand & Campaign, Social Media, Videos, AI Videos |
| **Assets** | Scaffold folders only — media added later by hand, self-hosted in-repo |

## Source vs target

| | Source portfolio | This site |
|---|---|---|
| React | 19 | 18.3 |
| Tailwind | v4 (`@theme` in CSS) | v3.4 (`tailwind.config.ts` + HSL vars) |
| Router | react-router-dom 7 | react-router-dom 7 ✅ |
| Icons | `@iconify/react` | `lucide-react` — iconify not installed |
| Fonts | Inter + Space Grotesk | Bricolage Grotesque + Dela Gothic One |
| Build | plain Vite | Vite + `vite-prerender-plugin` (SSG) + sitemap generator |
| SEO | none | `SEO.tsx` + `pageMetadata.ts` registry |

---

## Phase 0 — Blockers to clear first

### 0.1 Token name collisions (must fix, not optional)

Four names the portfolio uses already mean something else here:

| Portfolio token | Portfolio value | Already means here |
|---|---|---|
| `card` | `#ffffff` | `hsl(var(--card))` = cream `#F8FFE8` |
| `muted` | `#6b6f6a` | shadcn muted pair = forest `#253e35` |
| `border` | `#e4ddcd` | `hsl(var(--border))` = forest `#253e35`, and `* { @apply border-border }` applies it globally |
| `font-display` | Space Grotesk | Dela Gothic One |

**Resolution:** namespace every portfolio token with `pf-`:

```ts
// tailwind.config.ts → theme.extend
colors: {
  pf: {
    teal:      "#163027",
    tealLight: "#1f4436",
    cream:     "#F3EFE6",
    gold:      "#E6B961",
    ink:       "#1a1a1a",
    muted:     "#6b6f6a",
    card:      "#ffffff",
    border:    "#e4ddcd",
    chip:      "#f0ede2",   // badge background
    onDark:    "#cfd9d0",   // muted text on teal
    body:      "#3f4640",   // long-form copy on cream
  },
},
fontFamily: {
  "pf-display": ["Space Grotesk", "sans-serif"],
  "pf-sans":    ["Inter", "system-ui", "sans-serif"],
},
```

Every ported class then reads `bg-pf-teal`, `text-pf-muted`, `border-pf-border`, `font-pf-display`.
Nothing in the rest of the site changes.

### 0.2 Tailwind v4 → v3 syntax rewrite

The source leans on v4-only syntax. Full conversion table:

| v4 (source) | v3 (target) | Where |
|---|---|---|
| `@theme { --color-* }` | `tailwind.config.ts` extend | index.css |
| `max-w-300` | `max-w-[1200px]` | App main |
| `py-2.75` `px-4.5` | `py-[11px]` `px-[18px]` | nav + tab pills |
| `gap-5.5` `p-5.5` | `gap-[22px]` `p-[22px]` | home grid, card body |
| `h-13` `w-13` | `h-[52px]` `w-[52px]` | logo, placeholder icon box |
| `h-10.5` | `h-[42px]` | mobile logo |
| `w-5.5 h-5.5` | `w-[22px] h-[22px]` | check circle, icons |
| `pb-15` `py-9` | `pb-[60px]` `py-9`* | main padding (*`9` exists in v3) |
| `aspect-16/10` | `aspect-[16/10]` | all card media |
| `aspect-3/4` | `aspect-[3/4]` | campaign tiles |
| `z-100` `z-101` | `z-[100]` `z-[101]` | lightbox |
| `text-cream!` | `!text-pf-cream` | active pills |
| `max-w-205` `max-w-175` `max-w-160` `max-w-150` | `max-w-[820px]` `max-w-[700px]` `max-w-[640px]` `max-w-[600px]` | headings + copy |

Already v3-compatible: `max-[900px]:`, `grid-cols-[repeat(auto-fit,minmax(280px,1fr))]`, `border-[1.5px]`, `rounded-[30px]`, `shadow-[...]`, `aspect-video`.

### 0.3 Global styles that leak into the section

- `body::before` — a fixed grain overlay at `z-9999`, `opacity .08`, sitewide. It will sit over the portfolio too, including the lightbox. **Decide:** leave it (grain over teal is subtle and arguably fine) or suppress it on portfolio routes with a body class. Recommend leaving it — removing it makes the section feel detached.
- `section { @apply border-b border-white/5 }` — a global base rule. Any `<section>` in the new pages inherits a white hairline. Use `<div>` for portfolio sections, or override with `border-b-0`.
- `body { @apply bg-background }` = forest. The portfolio's `main` must set `bg-pf-cream` explicitly, and the page wrapper must too, or forest shows through at short viewports.
- `h1..h6 { font-family: Dela Gothic One }` in `@layer base`. Every ported heading needs an explicit `font-pf-display` class to win.

### 0.4 Fonts

Add Inter + Space Grotesk to `index.html` alongside the existing font links, preconnected and `display=swap`. Two extra families is real weight — subset to the used weights (Inter 400/500/600/700, Space Grotesk 700).

### 0.5 Icons

`@iconify/react` is not installed. It fetches icon data from `api.iconify.design` **at runtime** by default — an external request on a prerendered marketing page.

Recommendation: install `@iconify/react` for fidelity (24 tool logos across 6 categories), then either accept the runtime fetch or add `@iconify/json` and bundle the used icons offline. Decide at implementation; the fallback is inlining 24 local SVGs.

---

## Phase 1 — Asset scaffold ✅ done

No media is migrated or compressed. Only the folder contract is created; media gets added by hand later.

```
src/assets/content/works/portfolio/
  home/
  websites/
  photography/fashion/  product/  architectural/
  brand/
  social/
  video/
  ai-video/
```

Each folder carries a `.gitkeep` (git won't track an empty directory), and
`portfolio/README.md` documents the contract — naming rules, the six exact `home/` filenames,
and the optional poster-frame convention.

**Folder names are load-bearing.** The data layer derives every tag from the path:

| Path | Becomes |
|---|---|
| `photography/product/…` | the "Product" tab |
| `video/madurai-all-stars/…` | tile label "Madurai All Stars" |
| `ai-video/heaven-helix-lavender.mp4` | tile label "Heaven Helix Lavender" |

**Change from the source design:** photography tabs are now decided by three explicit folders
(`fashion/` `product/` `architectural/`) instead of a hardcoded client-name list
(`PRODUCT_FOLDERS = ['product','voso','heaven elix']`). Same result, but adding a client no
longer means editing code — and a client folder can nest inside a tab folder and inherit it.

**Posters stay optional.** Without generated `.jpg` posters, `VideoCard` keeps the source's
runtime canvas capture. Dropping a same-named `.jpg` beside a clip later switches it to a real
`poster` attribute and saves a metadata download per tile.

---

## Phase 2 — Data layer

New file `src/data/portfolio.ts` (or `.tsx` if icons stay inline), a direct port of the source's `services.tsx`:

- Types: `PanelId`, `Service`, `SiteCard`, `SiteGroup`, `SocialCard`, `VideoTile`, `Photo`, `PhotoTab`, `Tool`
- `import.meta.glob(..., { eager: true, query: '?url', import: 'default' })` over each asset folder — works identically under Vite 5
- Path-derived metadata:
  - photography subfolder → tab, read straight off `fashion|product|architectural` (see Phase 1)
  - video folder name → client label, de-kebabed and title-cased, ordered by an explicit priority map
  - AI video filename → tile label
  - brand gallery sorted by `BRAND_LEAD_CLIENTS`, matched on file name
- `CATEGORY_BUTTONS`, `HOME_CARDS`, `SERVICES` exports
- All copy carried over verbatim — 6 headlines, 6 descriptions, 36 checklist items, 24 tool entries, 9 site cards, 7 social cards

### 2.1 Must survive empty folders

The folders ship empty, so the data layer has to degrade rather than break:

- **Globs return `{}`** → every grid gets an empty array. Photo tabs already `.filter(tab => tab.photos.length > 0)`; apply the same to categories so nothing renders a bare heading over nothing.
- **No `new URL('../assets/…', import.meta.url)` for card images.** Vite statically resolves those at build time and a missing file is a build error. `HOME_CARDS` and `SiteCard.imageUrl` must resolve through a glob lookup that returns `undefined` when the file isn't there — which makes the design's existing hatch-placeholder branch fire. That branch is already written for both card types; it just needs to be reachable.
- **Empty-state copy** — a category with no media should say so in one muted line rather than showing an empty grid. Small addition to `ServicePanel`.

Net effect: the site builds and looks deliberate on day one, and each folder you fill lights up its own grid with no code change.

Slugs change for SEO (source used `web`/`photo`/`brand`/`social`/`video`/`ai`):

```
/portfolio/websites
/portfolio/photography
/portfolio/brand-and-campaign
/portfolio/social-media
/portfolio/videos
/portfolio/ai-videos
```

## Phase 3 — Components

New `src/components/portfolio/`:

| File | Ported from | Notes |
|---|---|---|
| `PortfolioHero.tsx` | `Header.tsx` | Hero block only — the site's `Header` supplies nav. Uses the site logo, not the base64 one. |
| `CategoryNav.tsx` | `CategoryNav.tsx` | Sticky pill bar. **`top-0` must become the site header's height** — the site header is fixed (`Works.tsx` compensates with `pt-32`). |
| `PortfolioLanding.tsx` | `HomePanel.tsx` | 6-card grid |
| `ServicePanel.tsx` | `ServicePanel.tsx` | Shell: back link, title, copy, What We Do, tools, work divider |
| `grids/SiteGroupsGrid.tsx` | inline | Client site cards, per-client `imageBg`, flag pill, badges |
| `grids/PhotoTilesGrid.tsx` | inline | Shortest-column masonry + lightbox (keyboard, swipe, counter) |
| `grids/PhotoTabsGrid.tsx` | inline | Tabs with counts, remounts grid on change |
| `grids/SocialCardsGrid.tsx` | inline | Teal cards |
| `grids/VideoTilesGrid.tsx` | inline | 4px-row masonry, landscape spans 2 cols |
| `grids/VideoCard.tsx` | inline | Custom player, lazy `<video>` mount. Keeps the runtime canvas poster capture; uses a sibling `.jpg` as `poster` when one exists |
| `ToolPill.tsx` | `ToolPill.tsx` | Strip the stray `dark:` classes — this site's dark mode is class-based and unused here |
| `icons.tsx` | `icons.tsx` | 6 category SVGs, unchanged |

Behaviour that must survive the port (it's the reason the design works):

- Photos are **never cropped** — tiles are `h-auto`, the image sets tile height, columns balance on measured `naturalWidth/naturalHeight`
- Videos **never autoplay**, and the real `<video>` only mounts after first play
- Landscape reels span 2 columns and sort to the end
- Lightbox: `←` `→` `Esc`, 50px swipe threshold, wrapping index, `n / total` counter

### 3.1 Prerender safety

`vite-prerender-plugin` runs these through `renderToString` in the mock DOM from `src/prerender.tsx`.

- `useLayoutEffect` / `useEffect` don't run server-side — the `window.innerWidth` and `ResizeObserver` reads are safe, but React will warn about `useLayoutEffect` in SSR. Swap to a `useIsomorphicLayoutEffect` helper.
- `ResizeObserver` and `IntersectionObserver` are already mocked in `prerender.tsx` ✅
- `document.createElement('canvas').getContext` is **not** mocked. It's only reachable inside `useEffect`, so it won't fire during prerender — but it's the reason to add `.jpg` posters later.
- First render must not read `window`. Initial `colCount` state is the static `cols` prop — correct as written; keep it that way.

## Phase 4 — Routes, SEO, prerender

**`AppRoutes.tsx`**
```tsx
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/portfolio/:categoryId" element={<PortfolioCategory />} />
```
Unknown `categoryId` → `<Navigate to="/portfolio" replace />` (matches source behaviour). Existing `/works` and `/work` redirects to `/portfolio` keep working unchanged.

**Pages** — `src/pages/Portfolio.tsx` is currently imported in `AppRoutes.tsx` but never routed (dead import). Reuse the filename for the new landing and add `src/pages/PortfolioCategory.tsx`. Both wrap in `<Header />` … `<EnhancedFooter mascotBgClass="bg-pf-cream" />`.

**`pageMetadata.ts`** — 7 new entries (`/portfolio` + 6 categories) with title, description, keywords, canonical. `Works.tsx` currently ships **no** `<SEO>` at all, so this is a net gain.

**`vite.config.ts`** — add the 6 category routes to `prerenderRoutes`. The crawler follows in-page links so `/portfolio` alone would likely reach them, but explicit is safer.

**Sitemap** — `scripts/generate-sitemap.cjs` walks `dist/`, so new routes appear automatically. No edit needed.

**Old URLs** — `/portfolio?c=branding` still resolves (the query param is simply ignored by the new landing). If you want them to land on the right category, add a small effect on the landing that maps the legacy `c` values to the new routes and redirects.

## Phase 5 — Retire the old page

- Delete `src/pages/Works.tsx` and `src/data/works.ts`
- `src/components/works/PhoneCarousel.tsx` — currently used only by the `social-media` category. The new Social page uses teal profile cards instead. **Either** delete it **or** keep it as an optional layout on the social category. Recommend keeping the file, unused, for one release.
- Check for stragglers: `grep -rn "data/works\|pages/Works\|PhoneCarousel" src/`
- Assets referenced only by `works.ts` (`content/works/misc/*`, `content/works/social media/*`) become orphans — audit before deleting, some may be used by home/services sections.

## Phase 6 — QA

**With folders still empty (ships in this state):**
- [ ] `npm run build` clean — no missing-asset resolution errors
- [ ] All 7 routes prerender to real `dist/<route>/index.html` with correct `<title>`
- [ ] Every category renders placeholders and empty-state copy, not broken images or bare headings
- [ ] No forest bleed — every portfolio surface paints its own background
- [ ] Sticky nav offset correct under the fixed site header, desktop + mobile
- [ ] Every tool pill icon resolves (no blank pills if iconify's API is blocked)
- [ ] Header nav and footer links still point at `/portfolio` and land correctly

**Re-run once media is added:**
- [ ] Photo masonry balances and crops nothing at 1 / 2 / 3 columns
- [ ] Photo tabs appear only for folders with files, counts correct
- [ ] Lightbox: arrows, Esc, swipe, wrap, counter
- [ ] Video: no autoplay, no download before play, posters visible, landscape spans 2 cols, seek + mute + fullscreen work
- [ ] Video tile labels read correctly from folder names
- [ ] Lighthouse on `/portfolio/videos` — the heaviest page

---

## Effort

| Phase | Est. |
|---|---|
| 0 — tokens, v4→v3, globals, fonts, icons | 1.5 h |
| 1 — asset scaffold | ✅ done |
| 2 — data layer (+ empty-folder resilience) | 1.5 h |
| 3 — 12 components | 4 h |
| 4 — routes, SEO, prerender | 1 h |
| 5 — retire old page | 0.5 h |
| 6 — QA | 1 h |
| | **~9.5 h** |

## Risks

1. **Two font pairs on one site** — Inter + Space Grotesk load alongside Bricolage + Dela Gothic. Real bytes and a visible identity break at the nav/hero seam. Subsetting keeps it tolerable.
2. **Iconify runtime fetch** — 24 icons pulled from an external API unless bundled offline. Prerendered HTML will show empty pills until the fetch lands.
3. **Global base styles** — `* { border-border }`, `section { border-b }`, `h1-h6 { Dela Gothic }` will fight the ported markup in ways that only show up visually. Budget a styling pass after the first render.
4. **Shipping empty** — replacing a populated `/portfolio` with an empty one is a live downgrade. Either hold the merge until the folders are filled, or land it behind an unlinked route first (Phase 5 already keeps `Works.tsx` around for exactly this).
5. **Repo weight, later** — no cost today, but 20+ uncompressed reels would add hundreds of MB. The compression recipe is in `portfolio/README.md`; use it before committing video.
