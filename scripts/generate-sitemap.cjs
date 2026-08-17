/**
 * Generates dist/sitemap.xml from the prerendered output.
 *
 * Every prerendered route lands in dist as <route>/index.html, so walking the
 * build is accurate by construction — a page can't be missing from the sitemap
 * or listed after it has been deleted. Run via `npm run build`.
 */
const fs = require("fs");
const path = require("path");

const DIST = path.resolve(__dirname, "../dist");
const ORIGIN = "https://theeyelevelstudio.com";

// Routes kept out of the sitemap: redirect-only paths, plus unlisted pages
// that should only reach people who are sent the link directly.
const EXCLUDE = new Set([
  "/about-us",
  "/contact-us",
  "/work",
  "/works",
  "/how-we-work",
  "/terms-and-conditions",
  // Link-only application page — not advertised to search engines.
  "/free-wedding-film",
]);

// Hubs first, then detail pages — priority is a weak signal but a cheap one.
const priorityFor = (url) => {
  if (url === "/") return "1.0";
  const depth = url.split("/").filter(Boolean).length;
  return depth === 1 ? "0.8" : "0.6";
};

function collect(dir, base = "") {
  const urls = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(dir, entry.name);
    if (fs.existsSync(path.join(child, "index.html"))) {
      urls.push(`${base}/${entry.name}`);
    }
    urls.push(...collect(child, `${base}/${entry.name}`));
  }
  return urls;
}

if (!fs.existsSync(path.join(DIST, "index.html"))) {
  console.error("generate-sitemap: dist/index.html missing — run the build first.");
  process.exit(1);
}

const urls = ["/", ...collect(DIST)]
  .filter((url) => !EXCLUDE.has(url))
  .sort();

const lastmod = new Date().toISOString().slice(0, 10);
const body = urls
  .map(
    (url) =>
      `  <url>\n    <loc>${ORIGIN}${url}</loc>\n` +
      `    <lastmod>${lastmod}</lastmod>\n` +
      `    <priority>${priorityFor(url)}</priority>\n  </url>`
  )
  .join("\n");

fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
);

console.log(`generate-sitemap: wrote ${urls.length} urls to dist/sitemap.xml`);
