# Portfolio media

Drop files in and they publish themselves. The portfolio data layer
(`src/data/portfolio.ts`) reads these folders with `import.meta.glob`, so there is no list to
edit — **the folder a file sits in is what tags it.**

Empty folders render the design's built-in placeholder (a diagonal-hatch teal panel with the
category icon), so the site builds and looks intentional before any media is added.

## Folder map

```
portfolio/
  home/            One cover image per category card on /portfolio
  websites/        Client logos or screenshots for the Websites page
  photography/
    fashion/       → "Fashion" tab
    product/       → "Product" tab
    architectural/ → "Architectural" tab
  brand/           Brand & campaign creatives (flat, no subfolders)
  social/          Profile avatars for the Social Media cards
  video/           One subfolder per client — the folder name becomes the tile label
  ai-video/        AI films, flat — the file name becomes the tile label
```

## Naming rules

- lowercase, kebab-case, **no spaces** — `voso-reel-01.mp4`, not `VOSO reel 01.mp4`
- descriptive over sequential where you can — `brigade-stellaris-0064.webp` beats `img_2368.webp`
- images: `.webp`, sized to the longest edge you actually need (2000px is plenty)
- video: `.mp4`, H.264, `+faststart`

## Per-folder detail

### `home/`
Six images, one per category. Filenames must match these exactly so each lands on the right card:

```
websites.webp
photography.webp
brand-and-campaign.webp
social-media.webp
videos.webp
ai-videos.webp
```

Any that are missing fall back to the hatch placeholder — you can add them one at a time.

### `websites/`
One logo or screenshot per client site. The client's background colour, flag label and badges
live in `src/data/portfolio.ts`, not here — this folder only supplies the image. Name the file
after the client: `voso.webp`, `essa.webp`, `tnppl.webp`.

Logos sit on the client's own brand colour and are capped at 52% height so a tall square logo
doesn't tower over a wide wordmark. Full screenshots can be marked `fullBleed` in the data file
to fill the tile edge to edge.

### `photography/`
The three subfolders **are** the tabs — a file in `product/` shows under Product, and nothing
else needs saying. Tabs with no files are hidden, so you can launch with one tab and grow.

You can nest a client folder inside a tab (`photography/product/voso/…`) for your own
organisation; it inherits the parent tab.

Order matters: photos read left-to-right across the top as they're packed into the shortest
column, so put the strongest shots first alphabetically if you care about the opening row.

### `brand/`
Flat folder, glob order. If you want specific clients to lead the gallery, add them to
`BRAND_LEAD_CLIENTS` in `src/data/portfolio.ts` — matching is on the file name.

### `social/`
One square avatar per Instagram account, named for the handle: `vososports-india.webp`.
The handle, description and profile link live in the data file.

### `video/`
One subfolder per client. **The folder name is what appears on the tile**, de-kebabed and
title-cased — `madurai-all-stars/` renders as "Madurai All Stars". Clip order within the grid
comes from the priority map in the data file; unlisted clients sort alphabetically after the
listed ones.

```
video/
  madurai-all-stars/
    mas-reel-01.mp4
  tamil-nadu-pickleball-association/
    atul-jain-interview.mp4
```

Portrait clips (9:16) fill the grid first; landscape clips span two columns and sort to the end,
so mixing orientations is fine.

**Posters (optional but recommended).** Drop a `.jpg` next to a clip with the same base name
(`mas-reel-01.mp4` → `mas-reel-01.jpg`) and it's used as the poster frame. Without one the
player captures a frame at runtime, which costs a metadata download per tile and fails silently
if the file is served cross-origin.

```
ffmpeg -ss 0.5 -i clip.mp4 -frames:v 1 -q:v 6 clip.jpg
```

### `ai-video/`
Flat folder. The **file name is the tile label** — extension stripped, `_` and `-` turned into
spaces — so `heaven-helix-lavender.mp4` renders as "Heaven Helix Lavender". Sorted
alphabetically. Same optional-poster rule as `video/`.

## Before you commit

Video is the one thing that can bloat the repo. Compress before adding — the source files this
design came from were 376 MB raw and land near 45 MB at these settings:

```
ffmpeg -i in.mp4 -vf "scale='min(1080,iw)':-2" -c:v libx264 -crf 26 -preset slow \
       -profile:v high -pix_fmt yuv420p -movflags +faststart \
       -c:a aac -b:a 96k out.mp4
```
