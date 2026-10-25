// Builds the new ruhan.bd site from src/ into dist/.
//
//   node tools/build.mjs          one build
//   node tools/build.mjs --dev    build, serve dist/ on :5173, rebuild + reload on change
//
// Steps: DESIGN.md → src/styles/tokens.css → one CSS bundle (tokens, base,
// every component) → one JS bundle → pages with their <!-- @include --> partials
// resolved → static files (favicons come from tools/brand.py).

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, watch, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { expandMedia, literalTokens, readDesign, readFrontMatter, toLiteral, tokensCss } from "./lib/design.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const CONTENT = join(ROOT, "content");
const DEV = process.argv.includes("--dev");

// base styles load in this order, before any component
const BASE_CSS = ["reset.css", "typography.css", "layout.css", "motion.css"];

const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const write = (p, s) => { mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, s); };
const componentDirs = () =>
  readdirSync(join(SRC, "components")).filter((d) => statSync(join(SRC, "components", d)).isDirectory()).sort();

// {{colors.canvas}} → "#fbf8f5" (DESIGN.md token)
// {{site.email}}     → content/site.md
// {{page.seo.title}} → the page's content file
// {{props.title}}    → the include's attribute
// {{offer.name}}     → a loop variable from <!-- @each page.offers as offer -->
// {{x|json}}         → escaped for a JSON string · {{x|attr}} → escaped for an HTML attribute
const FILTERS = {
  json: (s) => JSON.stringify(s).slice(1, -1),
  attr: (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"),
};

function lookup(path, ctx, props, scope) {
  const [root, ...rest] = path.split(".");
  const walk = (base) => rest.reduce((o, k) => (o == null ? undefined : o[k]), base);
  if (root === "props") return props[rest.join(".")];
  if (root in scope) return walk(scope[root]);
  if (root === "site" || root === "page") return walk(ctx[root]);
  if (ctx.collections && root in ctx.collections) return walk(ctx.collections[root]);
  return undefined;
}

function fill(text, ctx, props = {}, scope = {}) {
  return text.replace(/\{\{\s*([a-z0-9.@-]+)(?:\|([a-z]+))?\s*\}\}/gi, (m, path, filter) => {
    const root = path.split(".")[0];
    let v;
    if (root === "props" || root === "site" || root === "page" || root in scope || (ctx.collections && root in ctx.collections)) {
      v = lookup(path, ctx, props, scope);
      if (v == null || typeof v === "object") throw new Error(`${m}: not found (${ctx.pageName || "partial"})`);
    } else {
      v = toLiteral(ctx.tokens, `{${path}}`);
    }
    v = String(v);
    if (filter) {
      if (!FILTERS[filter]) throw new Error(`${m}: unknown filter "${filter}"`);
      v = FILTERS[filter](v);
    }
    return v;
  });
}

// <!-- @each page.offers as offer sep="," --> … <!-- @end -->  repeats its body
// <!-- @if page.hero.scene --> … <!-- @end -->                   keeps it when truthy
// Inside a loop: {{offer.x}}, {{loop.n}} (1-based), {{loop.index}} (0-based).
function blocks(text, ctx, props, scope) {
  const open = /<!--\s*@(each|if)\s+([a-z0-9.@-]+)(?:\s+as\s+([a-z0-9_]+))?(?:\s+sep="([^"]*)")?\s*-->/i;
  let out = "";
  let rest = text;
  for (;;) {
    const m = rest.match(open);
    if (!m) return out + rest;
    out += rest.slice(0, m.index);
    // find the matching @end, counting nested @each/@if
    const tag = /<!--\s*@(each|if)\b[^>]*-->|<!--\s*@end\s*-->/gi;
    tag.lastIndex = m.index + m[0].length;
    let depth = 1, t, end;
    while ((t = tag.exec(rest))) {
      depth += t[1] ? 1 : -1;
      if (depth === 0) { end = t; break; }
    }
    if (!end) throw new Error(`@${m[1]} ${m[2]} has no @end (${ctx.pageName || "partial"})`);
    const body = rest.slice(m.index + m[0].length, end.index);
    const v = lookup(m[2], ctx, props, scope);
    if (m[1].toLowerCase() === "if") {
      if (v && !(Array.isArray(v) && !v.length)) out += blocks(body, ctx, props, scope);
    } else {
      if (!Array.isArray(v)) throw new Error(`@each ${m[2]}: not a list (${ctx.pageName || "partial"})`);
      const name = m[3] || "item";
      out += v.map((item, index) => {
        // each iteration is filled with its own scope, so {{offer.x}} / {{loop.n}} resolve here
        const s = { ...scope, [name]: item, loop: { index, n: index + 1 } };
        return fill(blocks(body, ctx, props, s), ctx, props, s);
      }).join(m[4] ?? "");
    }
    rest = rest.slice(end.index + end[0].length);
  }
}

// expand blocks, fill placeholders, then pull in includes
function render(text, ctx, props = {}, scope = {}) {
  return fill(blocks(text, ctx, props, scope), ctx, props, scope);
}

const readContent = (name) => {
  const p = join(CONTENT, `${name}.md`);
  return existsSync(p) ? readFrontMatter(p) : {};
};

// <!-- @include components/x/x.html title="…" --> → that file, filled
function includes(html, ctx, from, depth = 0) {
  if (depth > 8) throw new Error(`include nesting too deep in ${from}`);
  return html.replace(/<!--\s*@include\s+(\S+)((?:\s+[a-z0-9-]+="[^"]*")*)\s*-->/gi, (_, file, attrs) => {
    const path = join(SRC, file);
    if (!existsSync(path)) throw new Error(`${relative(ROOT, from)}: can't include ${file}`);
    const props = {};
    for (const [, k, v] of attrs.matchAll(/([a-z0-9-]+)="([^"]*)"/gi)) props[k] = v;
    return includes(render(read(path), ctx, props), ctx, path, depth + 1);
  });
}

const RELOAD = `<script>new EventSource("/__reload").onmessage = () => location.reload();</script>`;

export function build() {
  const t0 = Date.now();
  const tokens = readDesign(join(ROOT, "DESIGN.md"));
  const site = readContent("site");
  // collections: every content/<dir>/*.md, sorted by `order`, available to any
  // page as {{solutions…}} / <!-- @each solutions as s -->
  const collections = {};
  if (existsSync(CONTENT)) {
    for (const dir of readdirSync(CONTENT).filter((d) => statSync(join(CONTENT, d)).isDirectory())) {
      collections[dir] = readdirSync(join(CONTENT, dir)).filter((f) => f.endsWith(".md"))
        .map((f) => readFrontMatter(join(CONTENT, dir, f)))
        .sort((a, b) => Number(a.order || 99) - Number(b.order || 99));
    }
  }
  const ctx = { tokens, site, page: {}, pageName: "", collections };

  // 1. tokens
  const tokenCss = tokensCss(tokens);
  write(join(SRC, "styles", "tokens.css"), tokenCss);

  rmSync(DIST, { recursive: true, force: true });

  // 2. CSS bundle
  const css = [tokenCss];
  for (const f of BASE_CSS) css.push(`/* ── base/${f} */\n` + read(join(SRC, "base", f)));
  for (const d of componentDirs()) {
    const p = join(SRC, "components", d, `${d}.css`);
    if (existsSync(p)) css.push(`/* ── components/${d} */\n` + read(p));
  }
  write(join(DIST, "css", "site.css"), expandMedia(tokens, css.join("\n")));

  // 3. JS bundle — each file in its own scope; {{breakpoints.md}} etc. filled in
  const js = [];
  for (const d of componentDirs()) {
    const p = join(SRC, "components", d, `${d}.js`);
    if (existsSync(p)) js.push(`/* ── components/${d} */\n(() => {\n${render(read(p), ctx)}\n})();`);
  }
  write(join(DIST, "js", "site.js"), js.join("\n\n") + "\n");

  // 4. pages
  const sitemap = [];
  const pagesIndex = [];
  // "/solutions/x/" → "x", "/" → "home", "/components.html" → "components"
  const slugOf = (path) => (path === "/" ? "home" : path.replace(/\/$/, "").split("/").pop().replace(/\.html$/, ""));
  const emit = (srcFile, contentFile, page, name, outFile) => {
    // per-page share image (tools/og.py) when it exists, else the site default
    if (page.seo) {
      const og = `/og/${slugOf(page.seo.path)}.jpg`;
      page["og-image"] = existsSync(join(SRC, "static", og)) ? og : site["og-image"];
    }
    const pageCtx = { ...ctx, page, pageName: name };
    let html = includes(render(read(srcFile), pageCtx), pageCtx, srcFile);
    if (DEV) html = html.replace("</body>", `${RELOAD}\n</body>`);
    write(outFile, html);

    // pages with SEO data that aren't noindex go in the sitemap, with their images
    const seo = page.seo;
    if (seo && seo.index !== "false") {
      const srcs = [srcFile, contentFile].filter((p) => p && existsSync(p));
      const lastmod = new Date(Math.max(...srcs.map((p) => statSync(p).mtimeMs))).toISOString().slice(0, 10);
      const images = [page["og-image"], ...(seo.path === "/" ? ["/images/ruhan-avatar.png"] : [])]
        .map((img) => `    <image:image><image:loc>${site.url}${img}</image:loc></image:image>`).join("\n");
      sitemap.push(`  <url>\n    <loc>${site.url}${seo.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n${images}\n  </url>`);
      pagesIndex.push({
        path: seo.path, slug: slugOf(seo.path), title: seo.title,
        kicker: page.hero?.kicker || "", line: page.hero?.line || "", crumb: page.hero?.crumb || "Home",
      });
    }
  };

  // 4a. hand-written pages: src/pages/<name>.html + content/<name>.md
  for (const f of readdirSync(join(SRC, "pages")).filter((f) => f.endsWith(".html"))) {
    const name = f.replace(/\.html$/, "");
    emit(join(SRC, "pages", f), join(CONTENT, `${name}.md`), readContent(name), name, join(DIST, f));
  }

  // 4b. generated pages: every content/<dir>/<slug>.md renders through
  //     src/templates/<template>.html into dist/<seo.path>/index.html
  for (const dir of readdirSync(CONTENT).filter((d) => statSync(join(CONTENT, d)).isDirectory())) {
    for (const f of readdirSync(join(CONTENT, dir)).filter((f) => f.endsWith(".md"))) {
      const contentFile = join(CONTENT, dir, f);
      const page = readFrontMatter(contentFile);
      if (!page.template || !page.seo?.path) throw new Error(`${relative(ROOT, contentFile)}: needs template and seo.path`);
      const tpl = join(SRC, "templates", `${page.template}.html`);
      emit(tpl, contentFile, page, `${dir}/${f}`, join(DIST, page.seo.path, "index.html"));
    }
  }
  // the XSL only styles the file for people opening it in a browser; bots read the XML
  write(join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `${sitemap.join("\n")}\n</urlset>\n`);
  // for tools/og.py: what each page's share image should say
  write(join(DIST, "pages.json"), JSON.stringify(pagesIndex, null, 2));

  // 5. resolved tokens, static files
  write(join(DIST, "tokens.json"), JSON.stringify(literalTokens(tokens), null, 2));
  if (existsSync(join(SRC, "static"))) cpSync(join(SRC, "static"), DIST, { recursive: true });
  // photos are still shared with the live site in /assets until the switch-over
  if (existsSync(join(ROOT, "assets"))) cpSync(join(ROOT, "assets"), join(DIST, "assets"), { recursive: true });

  if (existsSync(CMD)) buildCommander(ctx);
  console.log(`built dist/ in ${Date.now() - t0}ms`);
}

// Commander — Ruhan's private dashboard at ruhan.lol (behind Cloudflare Access,
// served from the VM). Same tokens, CSS and JS bundle as the site, but its own
// pages: commander/pages/*.html, plus commander/section.html once per section in
// commander/sections.json → dist-commander/<id>/index.html. Its data is not
// built here: Hermes writes /data/<id>.json on the VM.
const CMD = join(ROOT, "commander");
const CMD_DIST = join(ROOT, "dist-commander");

function buildCommander(ctx) {
  const cfg = JSON.parse(read(join(CMD, "sections.json")));
  rmSync(CMD_DIST, { recursive: true, force: true });
  const emit = (srcFile, page, name, outFile) => {
    const pageCtx = { ...ctx, page, pageName: name };
    write(outFile, includes(render(read(srcFile), pageCtx), pageCtx, srcFile));
  };
  for (const f of readdirSync(join(CMD, "pages")).filter((f) => f.endsWith(".html"))) {
    emit(join(CMD, "pages", f), cfg, `commander/${f}`, join(CMD_DIST, f));
  }
  for (const group of cfg.groups) {
    for (const s of group.items) {
      emit(join(CMD, "section.html"), { ...cfg, section: { ...s, group: group.name } }, `commander/${s.id}`,
        join(CMD_DIST, s.id, "index.html"));
    }
  }
  cpSync(join(DIST, "css"), join(CMD_DIST, "css"), { recursive: true });
  cpSync(join(DIST, "js"), join(CMD_DIST, "js"), { recursive: true });
  for (const f of readdirSync(join(SRC, "static")).filter((f) => f.startsWith("favicon"))) {
    cpSync(join(SRC, "static", f), join(CMD_DIST, f));
  }
  write(join(CMD_DIST, "robots.txt"), "User-agent: *\nDisallow: /\n");
}

function dev() {
  const clients = new Set();
  const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml",
    ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json", ".webp": "image/webp" };

  createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    if (url === "/__reload") {
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" });
      clients.add(res);
      req.on("close", () => clients.delete(res));
      return;
    }
    let p = join(DIST, url);
    if (existsSync(p) && statSync(p).isDirectory()) p = join(p, "index.html");
    if (!p.startsWith(DIST) || !existsSync(p)) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, { "Content-Type": TYPES[extname(p)] || "application/octet-stream" });
    res.end(readFileSync(p));
  }).listen(5173, () => console.log("dev server: http://localhost:5173  (catalogue: /components.html)"));

  let timer;
  const rebuild = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try { build(); for (const c of clients) c.write("data: reload\n\n"); }
      catch (e) { console.error("build failed:", e.message); }
    }, 120);
  };
  watch(SRC, { recursive: true }, (_, file) => { if (file && !file.includes("tokens.css")) rebuild(); });
  watch(join(ROOT, "DESIGN.md"), rebuild);
  if (existsSync(CMD)) watch(CMD, { recursive: true }, rebuild);
}

try {
  build();
} catch (e) {
  console.error("build failed:", e.message);
  if (!DEV) process.exit(1);
}
if (DEV) dev();
