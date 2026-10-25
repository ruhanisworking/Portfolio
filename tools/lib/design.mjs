// Reads DESIGN.md's YAML front matter and turns it into CSS custom properties.
// Shared by tools/build.mjs and tools/check.mjs so both see the same tokens.
//
// The YAML is a deliberately small subset — nested maps, `- item` lists of
// scalars, quoted or bare scalars, comments, and `>-` folded blocks — which is
// all DESIGN.md and content/*.md use, so there's no dependency to install.

import { readFileSync } from "node:fs";

export function readFrontMatter(path) {
  return readDesign(path);
}

export function readDesign(path) {
  const text = readFileSync(path, "utf8").replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) throw new Error(`${path}: no YAML front matter`);
  return parseYaml(m[1]);
}

// Indentation-based recursive parser: maps, lists of scalars, lists of maps
// ("- key: value" then more keys indented under it), flow lists "[a, b]",
// and ">-" / "|" blocks.
function parseYaml(src) {
  const raw = src.split("\n");
  const lines = [];
  for (let i = 0; i < raw.length; i++) {
    const t = raw[i].trim();
    if (!t || t.startsWith("#")) continue;
    lines.push({ indent: raw[i].match(/^ */)[0].length, text: t, no: i + 1, rawIndex: i });
  }
  const err = (l, msg) => { throw new Error(`YAML line ${l.no}: ${msg} — "${l.text}"`); };

  function value(rest, l, i, indent) {
    // a ">-" / "|" block takes every following line indented deeper than its key
    if (rest === ">-" || rest === ">" || rest === "|") {
      const block = [];
      let j = i + 1;
      while (j < lines.length && lines[j].indent > indent) block.push(lines[j++].text);
      return [rest === "|" ? block.join("\n") : block.join(" ").trim(), j];
    }
    return [scalar(rest, l.no), i + 1];
  }

  function block(i, indent) {
    return lines[i].text.startsWith("- ") || lines[i].text === "-" ? list(i, indent) : map(i, indent);
  }

  function map(i, indent) {
    const obj = {};
    while (i < lines.length && lines[i].indent === indent && !lines[i].text.startsWith("- ")) {
      const l = lines[i];
      const km = l.text.match(/^([A-Za-z0-9_@-]+):(?:\s+(.*))?$/);
      if (!km) err(l, "expected key: value");
      const [, key, rest] = km;
      if (rest === undefined || rest === "") {
        const next = lines[i + 1];
        if (next && (next.indent > indent || (next.indent === indent && next.text.startsWith("- ")))) {
          [obj[key], i] = block(i + 1, next.indent);
        } else {
          obj[key] = {};
          i += 1;
        }
      } else {
        [obj[key], i] = value(rest, l, i, indent);
      }
    }
    if (i < lines.length && lines[i].indent > indent) err(lines[i], "unexpected indent");
    return [obj, i];
  }

  function list(i, indent) {
    const arr = [];
    while (i < lines.length && lines[i].indent === indent && lines[i].text.startsWith("- ")) {
      const l = lines[i];
      const item = l.text.slice(2).trim();
      if (/^[A-Za-z0-9_@-]+:(\s|$)/.test(item)) {
        // "- key: value" starts a map; its other keys sit two spaces deeper
        lines[i] = { ...l, indent: indent + 2, text: item };
        let obj;
        [obj, i] = map(i, indent + 2);
        arr.push(obj);
      } else {
        arr.push(scalar(item, l.no));
        i += 1;
      }
    }
    return [arr, i];
  }

  if (!lines.length) return {};
  const [root, end] = map(0, lines[0].indent);
  if (end < lines.length) err(lines[end], "could not parse");
  return root;
}

function scalar(s, lineNo) {
  if (s.startsWith("[") && s.endsWith("]")) {
    // flow list: [a, "b, c", d]
    const out = [];
    for (const m of s.slice(1, -1).matchAll(/\s*("(?:[^"\\]|\\.)*"|[^,]+)\s*(?:,|$)/g)) {
      if (m[1].trim()) out.push(scalar(m[1].trim(), lineNo));
    }
    return out;
  }
  if (s.startsWith('"')) {
    let out = "";
    for (let j = 1; j < s.length; j++) {
      if (s[j] === "\\") { out += s[++j]; continue; }
      if (s[j] === '"') return out;
      out += s[j];
    }
    throw new Error(`DESIGN.md line ${lineNo}: unterminated string`);
  }
  if (s.startsWith("'")) return s.slice(1, s.lastIndexOf("'")).replace(/''/g, "'");
  return s.replace(/\s+#.*$/, "").trim();
}

// ── naming ──────────────────────────────────────────────────────────────────
const PREFIX = {
  colors: "color", gradients: "gradient", fonts: "font", type: "type",
  space: "space", radius: "radius", border: "border", shadow: "shadow",
  motion: "motion", z: "z", layout: "layout", components: "c",
};
// groups that never become CSS variables
const SKIP = new Set(["version", "name", "description", "breakpoints", "favicon", "avatar", "fonts-bn", "type-bn"]);

export function varName(path) {
  const [group, ...rest] = path.split(".");
  const prefix = PREFIX[group];
  if (!prefix) throw new Error(`no CSS prefix for token group "${group}"`);
  return `--${prefix}-${rest.join("-")}`;
}

function lookup(tokens, path) {
  const v = path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), tokens);
  if (v === undefined || typeof v === "object") throw new Error(`DESIGN.md: "{${path}}" doesn't point at a token`);
  return v;
}

// "{colors.ink}" → "var(--color-ink)" (for CSS)
export function toCss(tokens, value) {
  return String(value).replace(/\{([a-z0-9.-]+)\}/gi, (_, p) => {
    lookup(tokens, p);
    return `var(${varName(p)})`;
  });
}

// "{colors.text}" → "#141110" (for HTML attributes, SVG, PNG rendering)
export function toLiteral(tokens, value, depth = 0) {
  if (depth > 10) throw new Error(`DESIGN.md: reference loop around "${value}"`);
  return String(value).replace(/\{([a-z0-9.-]+)\}/gi, (_, p) => toLiteral(tokens, lookup(tokens, p), depth + 1));
}

// Walk every leaf: yields [dotted.path, value]
function* leaves(obj, prefix = "") {
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") yield* leaves(v, p);
    else yield [p, v];
  }
}

export function tokensCss(tokens) {
  const root = [];
  for (const [path, value] of leaves(tokens)) {
    const group = path.split(".")[0];
    if (SKIP.has(group) || path.endsWith("href")) continue;
    root.push(`  ${varName(path)}: ${toCss(tokens, value)};`);
  }
  const bn = [];
  for (const [k, v] of Object.entries(tokens["fonts-bn"] || {})) bn.push(`  --font-${k}: ${toCss(tokens, v)};`);
  for (const [k, v] of Object.entries(tokens["type-bn"] || {})) {
    // "h1-leading" → --type-h1-leading
    bn.push(`  --type-${k}: ${toCss(tokens, v)};`);
  }
  return [
    "/* GENERATED from DESIGN.md by tools/build.mjs — do not edit by hand. */",
    ":root {",
    ...root,
    "}",
    ':root[lang="bn"] {',
    ...bn,
    "}",
    "",
  ].join("\n");
}

// @media (--bp-md)      → @media (min-width: 768px)
// @media (--bp-max-md)  → @media (max-width: 767.98px)
export function expandMedia(tokens, css) {
  const bp = tokens.breakpoints || {};
  return css.replace(/\(--bp-(max-)?([a-z0-9]+)\)/g, (m, max, name) => {
    if (!bp[name]) throw new Error(`unknown breakpoint ${m}`);
    const px = parseFloat(bp[name]);
    return max ? `(max-width: ${px - 0.02}px)` : `(min-width: ${px}px)`;
  });
}

// Every custom property name the tokens define (for check.mjs)
export function definedVars(tokens) {
  const names = new Set();
  for (const line of tokensCss(tokens).split("\n")) {
    const m = line.match(/^\s+(--[a-z0-9-]+):/i);
    if (m) names.add(m[1]);
  }
  return names;
}

// Resolved, literal copy of every token (written to dist/tokens.json)
export function literalTokens(tokens, obj = tokens) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    out[k] = v && typeof v === "object" ? literalTokens(tokens, v) : toLiteral(tokens, v);
  }
  return out;
}
