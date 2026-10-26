// Commander data: fills [data-cmd-source] blocks and [data-cmd-card] overview cards
// from /data/<id>.json, which Hermes writes on the VM. Shape (every key optional):
//   { "updated": ISO time, "summary": "…",
//     "stats": [{ "label", "value", "note", "trend": "up"|"down", "progress": 0–100 }],
//     "lists": [{ "title", "empty", "style": "timeline"?,
//                 "items": [{ "time", "title", "meta", "text", "tag", "href", "progress": 0–100 }] }] }
// The data can hold mail and other outside text, so it only ever goes in via textContent.
if (!document.querySelector("[data-cmd-source], [data-cmd-card]")) return;

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = String(text);
  return n;
};
const safeHref = (h) => {
  try { const u = new URL(h, location.href); return /^https?:$/.test(u.protocol) ? u.href : null; } catch { return null; }
};
const ago = (iso) => {
  const t = Date.parse(iso);
  if (!t) return "";
  const min = (Date.now() - t) / 60000;
  if (min < 2) return "just now";
  if (min < 60) return `${Math.round(min)} min ago`;
  if (min < 36 * 60) return `${Math.round(min / 60)} h ago`;
  return new Date(t).toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
const load = async (id) => {
  try {
    const r = await fetch(`/data/${encodeURIComponent(id)}.json`, { cache: "no-store" });
    return r.ok ? await r.json() : null;
  } catch { return null; }
};

const bar = (p) => {
  const n = Math.max(0, Math.min(100, Number(p)));
  const b = el("div", "cmd-bar");
  b.style.setProperty("--_progress", `${n}%`);
  b.setAttribute("role", "progressbar");
  b.setAttribute("aria-valuenow", String(n));
  b.setAttribute("aria-valuemin", "0");
  b.setAttribute("aria-valuemax", "100");
  return b;
};
const hasProgress = (x) => x.progress != null && x.progress !== "" && !Number.isNaN(Number(x.progress));

const stat = (s) => {
  const box = el("div", "cmd-stat");
  box.append(el("span", "cmd-stat__label", s.label ?? ""), el("span", "cmd-stat__value", s.value ?? "—"));
  if (hasProgress(s)) box.append(bar(s.progress));
  if (s.note) {
    const note = el("span", "cmd-stat__note", s.note);
    if (s.trend === "up" || s.trend === "down") note.dataset.trend = s.trend;
    box.append(note);
  }
  return box;
};

const panel = (l) => {
  const p = el("section", "cmd-panel");
  const head = el("div", "cmd-panel__head");
  head.append(el("h2", "cmd-panel__title t-h4", l.title ?? ""));
  const items = Array.isArray(l.items) ? l.items : [];
  if (items.length) head.append(el("span", "t-meta t-subtle", items.length));
  p.append(head);
  if (!items.length) { p.append(el("p", "cmd-empty", l.empty || "Nothing here right now.")); return p; }
  const ul = el("ul", l.style === "timeline" ? "cmd-list cmd-list--timeline" : "cmd-list");
  for (const it of items) {
    const item = el("li", "cmd-list__item");
    // timeline: time on the left, everything else in a body on the rail
    let li = item;
    if (l.style === "timeline") {
      li = el("div", "cmd-list__body");
      item.append(el("span", "cmd-list__time", it.time ?? ""), li);
    }
    const row = el("div", "cmd-list__row");
    const href = it.href && safeHref(it.href);
    const title = href ? el("a", "cmd-list__title", it.title ?? href) : el("span", "cmd-list__title", it.title ?? "");
    if (href) Object.assign(title, { href, target: "_blank", rel: "noopener noreferrer" });
    row.append(title);
    if (it.meta) row.append(el("span", "cmd-list__meta", it.meta));
    li.append(row);
    if (it.text) li.append(el("p", "cmd-list__text", it.text));
    if (hasProgress(it)) li.append(bar(it.progress));
    if (it.tag) li.append(el("span", "cmd-tag", it.tag));
    ul.append(item);
  }
  p.append(ul);
  return p;
};

for (const root of document.querySelectorAll("[data-cmd-source]")) {
  const q = (s) => root.querySelector(s);
  load(root.dataset.cmdSource).then((d) => {
    const updated = q("[data-cmd-updated]");
    const stats = Array.isArray(d?.stats) ? d.stats : [];
    const lists = Array.isArray(d?.lists) ? d.lists : [];
    if (!d || (!d.summary && !stats.length && !lists.length)) {
      updated.textContent = "Not filled yet";
      q("[data-cmd-empty]").hidden = false;
      return;
    }
    updated.textContent = d.updated ? `Updated ${ago(d.updated)}` : "";
    if (d.updated) updated.title = d.updated;
    if (d.summary) { q("[data-cmd-summary]").textContent = d.summary; q("[data-cmd-summary]").hidden = false; }
    if (stats.length) { q("[data-cmd-stats]").append(...stats.map(stat)); q("[data-cmd-stats]").hidden = false; }
    if (lists.length) { q("[data-cmd-lists]").append(...lists.map(panel)); q("[data-cmd-lists]").hidden = false; }
  });
}

for (const card of document.querySelectorAll("[data-cmd-card]")) {
  load(card.dataset.cmdCard).then((d) => {
    const updated = card.querySelector("[data-cmd-card-updated]");
    if (!d) { updated.textContent = "Not filled yet"; card.dataset.empty = ""; return; }
    updated.textContent = d.updated ? ago(d.updated) : "";
    if (d.summary) card.querySelector("[data-cmd-card-summary]").textContent = d.summary;
    const box = card.querySelector("[data-cmd-card-stats]");
    for (const s of (Array.isArray(d.stats) ? d.stats : []).slice(0, 3)) {
      const x = el("span");
      x.append(el("strong", null, s.value ?? "—"), ` ${s.label ?? ""}`);
      box.append(x);
    }
  });
}
