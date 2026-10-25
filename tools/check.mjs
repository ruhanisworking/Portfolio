// Guards the rule "every value comes from DESIGN.md".
//
//   node tools/check.mjs
//
// Fails (exit 1) when base or component CSS hard-codes a colour, font, radius,
// shadow, font size, duration or z-index; when it uses a var(--…) nobody
// defines; when a component folder has no entry in DESIGN.md; or when a page
// or partial uses inline style="" / <style>.

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { definedVars, readDesign, readFrontMatter } from "./lib/design.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const tokens = readDesign(join(ROOT, "DESIGN.md"));
const tokenVars = definedVars(tokens);
const problems = [];

const files = (dir, ext) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p, ext) : p.endsWith(ext) ? [p] : [];
  });

const say = (file, line, msg) => problems.push(`${relative(ROOT, file).replace(/\\/g, "/")}:${line}  ${msg}`);

// property → what its value may be (besides var(--…))
const RULES = [
  [/^(color|background|background-color|border-color|outline-color|fill|stroke|caret-color|accent-color)$/,
    /#[0-9a-f]{3,8}\b|\brgba?\(|\bhsla?\(|\b(white|black|red|orange|gray|grey)\b/i, "raw colour"],
  [/^(background|background-image|border|border-(top|right|bottom|left)|outline|box-shadow|text-shadow)$/,
    /#[0-9a-f]{3,8}\b|\brgba?\(|\bhsla?\(/i, "raw colour"],
  [/^font-family$/, /^(?!TOKEN|inherit$).+/, "font-family must be a --font-* / --type-*-family token"],
  [/^font-size$/, /\d(px|rem)\b/, "font-size must be a --type-*-size token (or em/%)"],
  [/^(border-radius|border-(top|bottom)-(left|right)-radius)$/, /^(?!TOKEN|0$|50%$|inherit$).+/, "radius must be a --radius-* token"],
  [/^box-shadow$/, /^(?!TOKEN|none$).+/, "shadow must be a --shadow-* token"],
  [/^z-index$/, /^(?!TOKEN|auto$|-?1$|0$).+/, "z-index must be a --z-* token"],
  [/^(transition|transition-duration|transition-delay|animation|animation-duration|animation-delay)$/,
    /(^|[\s,(])\d*\.?\d+m?s\b/, "durations must be --motion-* tokens"],
];

// ── CSS ─────────────────────────────────────────────────────────────────────
const cssFiles = [...files(join(SRC, "base"), ".css"), ...files(join(SRC, "components"), ".css")];
const localVars = new Set();
for (const f of cssFiles) for (const m of readFileSync(f, "utf8").matchAll(/(--[a-z0-9_-]+)\s*:/gi)) localVars.add(m[1]);

for (const f of cssFiles) {
  const lines = readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, " ")).split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/var\((--[a-z0-9_-]+)/gi)) {
      // --_x are component-private values set at runtime by the component JS
      if (m[1].startsWith("--_")) continue;
      if (!tokenVars.has(m[1]) && !localVars.has(m[1])) say(f, i + 1, `${m[1]} is not defined in DESIGN.md`);
    }
    // a line may hold several declarations (".x { a: 1; b: 2; }")
    for (const chunk of line.split(/[;{}]/)) {
      const decl = chunk.match(/^\s*([a-z-]+)\s*:\s*(.+?)\s*$/i);
      if (!decl) continue;
      const [, prop, value] = decl;
      // the reduced-motion switch in base/motion.css is allowed its 0.01ms / 0s
      let bare = value.replace(/(^|\s)0(\.01m)?s\b/g, "$1");
      // strip var(...) including nested var(--a, var(--b)) fallbacks before testing
      while (/var\([^()]*\)/.test(bare)) bare = bare.replace(/var\([^()]*\)/g, "TOKEN");
      for (const [propRe, bad, msg] of RULES) {
        if (propRe.test(prop) && bad.test(bare)) say(f, i + 1, `${prop}: ${value} — ${msg}`);
      }
    }
  });
}

// ── every component folder is declared in DESIGN.md ─────────────────────────
for (const d of readdirSync(join(SRC, "components"))) {
  if (!statSync(join(SRC, "components", d)).isDirectory()) continue;
  if (!tokens.components?.[d]) say(join(SRC, "components", d), 0, `component "${d}" has no components.${d} entry in DESIGN.md`);
  if (!existsSync(join(SRC, "components", d, `${d}.css`))) say(join(SRC, "components", d), 0, `missing ${d}.css`);
}
const catalogue = join(SRC, "pages", "components.html");
if (existsSync(catalogue)) {
  const html = readFileSync(catalogue, "utf8");
  for (const d of Object.keys(tokens.components || {})) {
    if (!html.includes(`data-component="${d}"`)) say(catalogue, 0, `catalogue has no data-component="${d}" section`);
  }
}

// ── markup: no inline styling ───────────────────────────────────────────────
const CMD = join(ROOT, "commander");
for (const f of [...files(SRC, ".html"), ...(existsSync(CMD) ? files(CMD, ".html") : [])]) {
  readFileSync(f, "utf8").split("\n").forEach((line, i) => {
    if (/\sstyle\s*=\s*"/i.test(line)) say(f, i + 1, 'inline style="" — put it in the component CSS');
    if (/<style[\s>]/i.test(line)) say(f, i + 1, "<style> block — put it in the component CSS");
  });
}

// ── SEO: every content/<page>.md with `seo` is checked against dist/<page>.html
const notes = [];
const scores = [];
const CONTENT = join(ROOT, "content");
const DIST = join(ROOT, "dist");
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
const has = (text, kw) => text.toLowerCase().includes(kw.toLowerCase());

if (existsSync(CONTENT)) {
  // content/<name>.md → dist/<name>.html; content/<dir>/<slug>.md → dist/<seo.path>/index.html
  const contentFiles = files(CONTENT, ".md").filter((p) => !p.endsWith("site.md"));
  for (const at0 of contentFiles) {
    const nested = relative(CONTENT, at0).includes("\\") || relative(CONTENT, at0).includes("/");
    const name = relative(CONTENT, at0).replace(/\\/g, "/").replace(/\.md$/, "");
    const page = readFrontMatter(at0);
    const built = nested ? join(DIST, page.seo?.path || "", "index.html") : join(DIST, `${name}.html`);
    // noindex pages (e.g. the component catalogue) aren't held to SEO rules
    if (!page.seo || page.seo.index === "false" || !existsSync(built)) continue;
    const html = readFileSync(built, "utf8");
    const at = at0;
    const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "";
    const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "";
    const h1s = [...html.matchAll(/<h1[\s\S]*?<\/h1>/gi)].map((m) => strip(m[0]));
    const h2s = [...html.matchAll(/<h2[\s\S]*?<\/h2>/gi)].map((m) => strip(m[0]));
    const main = strip((html.match(/<main[\s\S]*<\/main>/i) || [html])[0]);
    const words = main.split(" ");

    if (title.length > 60) say(at, 0, `title is ${title.length} chars (max 60): "${title}"`);
    if (title.length < 30) say(at, 0, `title is ${title.length} chars (min 30)`);
    if (desc.length < 120 || desc.length > 160) say(at, 0, `description is ${desc.length} chars (want 120–160)`);
    if (h1s.length !== 1) say(built, 0, `${h1s.length} <h1> elements (want exactly 1)`);
    if (!/<link rel="canonical"/.test(html)) say(built, 0, "no canonical link");
    if (!/property="og:image"/.test(html)) say(built, 0, "no og:image");
    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\balt="[^"]+"/.test(m[0])) say(built, 0, `image without alt text: ${m[0].slice(0, 80)}`);
    }
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
      try { JSON.parse(m[1]); } catch (e) { say(built, 0, `JSON-LD does not parse: ${e.message}`); }
    }
    for (const m of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
      if (/^(click here|here|read more|more)$/i.test(strip(m[1]))) say(built, 0, `vague link text "${strip(m[1])}"`);
    }

    const kw = page.keywords || {};
    if (kw.primary) {
      const p = kw.primary;
      if (!has(title, p)) say(at, 0, `primary keyword "${p}" missing from <title>`);
      if (!h1s.some((h) => has(h, p))) say(at, 0, `primary keyword "${p}" missing from <h1>`);
      if (!has(desc, p)) say(at, 0, `primary keyword "${p}" missing from meta description`);
      if (!has(words.slice(0, 100).join(" "), p)) say(at, 0, `primary keyword "${p}" missing from the first 100 words`);
      const count = main.toLowerCase().split(p.toLowerCase()).length - 1;
      const density = (count * p.split(" ").length * 100) / words.length;
      if (density < 0.3 || density > 2.5) say(at, 0, `primary keyword density ${density.toFixed(2)}% (want 0.3–2.5%)`);
      notes.push(`${name}: "${p}" ×${count} · ${density.toFixed(2)}% of ${words.length} words · title ${title.length} · description ${desc.length}`);
    }
    for (const s of kw.secondary || []) {
      if (!has(main, s)) say(at, 0, `secondary keyword "${s}" never appears on the page`);
    }
    const inH2 = h2s.filter((h) => (kw.secondary || []).some((s) => has(h, s))).length;
    if ((kw.secondary || []).length && inH2 < 2) say(at, 0, `only ${inH2} H2 heading(s) carry a secondary keyword (want ≥ 2)`);

    // ── SEO score: the weightage from content/index.md, out of 100 ──────────
    if (kw.primary) {
      const p = kw.primary;
      const ogTitle = (html.match(/<meta property="og:title" content="([^"]*)"/i) || [])[1] || "";
      const pathWords = (page.seo.path || "").toLowerCase();
      const pWords = p.toLowerCase().split(" ").filter((w) => w.length > 2);
      const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
      const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
      const count = main.toLowerCase().split(p.toLowerCase()).length - 1;
      const density = (count * p.split(" ").length * 100) / words.length;
      const parts = [
        ["title", 10, has(title, p) ? 1 : 0],
        ["h1", 9, h1s.some((h) => has(h, p)) ? 1 : 0],
        ["description", 8, has(desc, p) ? 1 : 0],
        ["first-100", 7, has(words.slice(0, 100).join(" "), p) ? 1 : 0],
        ["h2", 6, Math.min(1, inH2 / 2)],
        ["url", 5, pathWords === "/" ? 1 : pWords.length ? pWords.filter((w) => pathWords.includes(w.replace(/s$/, ""))).length / pWords.length : 0],
        ["alt", 4, imgs.every((i) => /\balt="[^"]+"/.test(i)) ? 1 : 0],
        ["anchors", 4, [...html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)].every((m) => !/^(click here|here|read more|more)$/i.test(strip(m[1]))) ? 1 : 0],
        ["density", 3, density >= 0.3 && density <= 2.5 ? 1 : 0],
        ["json-ld", 3, ld.length && ld.every((m) => { try { JSON.parse(m[1]); return true; } catch { return false; } }) ? 1 : 0],
        ["og-title", 3, has(ogTitle, p) ? 1 : 0],
      ];
      const max = parts.reduce((a, [, w]) => a + w, 0);
      const got = parts.reduce((a, [, w, v]) => a + w * v, 0);
      const score = Math.round((got / max) * 100);
      const missed = parts.filter(([, , v]) => v < 1).map(([n]) => n);
      scores.push({ page: name, path: page.seo.path, keyword: p, score, missed });
    }
  }
}

if (problems.length) {
  console.error(`check failed — ${problems.length} problem(s):\n` + problems.map((p) => "  " + p).join("\n"));
  process.exit(1);
}
console.log(`check passed — ${cssFiles.length} CSS files use only DESIGN.md tokens`);
for (const n of notes) console.log(`  seo  ${n}`);
if (scores.length) {
  console.log("\n  SEO score (weightage from content/index.md)");
  for (const s of scores) {
    const bar = "█".repeat(Math.round(s.score / 10)).padEnd(10, "░");
    console.log(`  ${bar} ${String(s.score).padStart(3)}  ${s.path.padEnd(32)} ${s.missed.length ? "missing: " + s.missed.join(", ") : "all signals present"}`);
  }
  writeFileSync(join(DIST, "seo-report.json"), JSON.stringify(scores, null, 2));
}
