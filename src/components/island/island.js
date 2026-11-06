// Island — drives the Dynamic-Island navbar and its "All pages" menu.
//   data-state="open"     top of page, hover/focus (desktop), or tapped open
//   data-state="compact"  otherwise
// Builds the section links from <section data-nav="Label" id="…"> in <main>,
// names the section being read, draws scroll progress, and opens the menu:
// a mega panel from "All pages" on desktop, a sheet from the menu button on
// mobile. Esc, an outside click or a link click close it.
const island = document.querySelector("[data-island]");
if (!island) return;

const toggle = island.querySelector("[data-island-toggle]");
const allBtn = island.querySelector("[data-island-all]");
const label = island.querySelector("[data-island-label]");
const menu = document.querySelector("[data-island-menu]");
const desktop = window.matchMedia("(min-width: {{breakpoints.md}})");
const homeLabel = label ? label.textContent.trim() : "";

// ── section links, from the page itself ─────────────────────────────────────
const navSections = [...document.querySelectorAll("main [data-nav][id]")];
const slot = island.querySelector("[data-island-sections]");
const chips = menu && menu.querySelector("[data-island-here-chips]");
const make = (s, cls) => {
  const a = document.createElement("a");
  a.className = cls;
  a.href = `#${s.id}`;
  a.textContent = s.dataset.nav;
  return a;
};
const sections = navSections.map((s) => ({
  target: s,
  links: [slot && slot.appendChild(make(s, "island__link")), chips && chips.appendChild(make(s, "island-menu__chip"))].filter(Boolean),
}));
const here = menu && menu.querySelector("[data-island-here]");
if (here && !sections.length) here.hidden = true;

// ── this page in the menu: highlighted, and its group open on mobile ────────
const groups = menu ? [...menu.querySelectorAll("[data-island-group]")] : [];
let currentGroup = null;
if (menu) {
  menu.querySelectorAll(".island-menu__item").forEach((a) => {
    if (new URL(a.href, location.href).pathname === location.pathname) {
      a.setAttribute("aria-current", "page");
      currentGroup = a.closest("[data-island-group]");
    }
  });
}
function syncGroups() {
  // desktop shows every group; mobile opens only the current page's group,
  // and one at a time (details[name] is exclusive, so drop it on desktop)
  groups.forEach((g) => {
    if (desktop.matches) g.removeAttribute("name");
    else g.setAttribute("name", "island-group");
    g.open = desktop.matches || g === currentGroup;
  });
}
syncGroups();

let atTop = true;
let hovering = false;
let menuOpen = false;  // desktop: island links opened from the compact pill's button
let panelOpen = false; // the All pages menu (mega panel or mobile sheet)

function render() {
  const open = desktop.matches ? atTop || hovering || menuOpen || panelOpen : panelOpen;
  island.dataset.state = open ? "open" : "compact";
  island.dataset.top = String(atTop);
  if (toggle) toggle.setAttribute("aria-expanded", String(desktop.matches ? open : panelOpen));
  if (allBtn) allBtn.setAttribute("aria-expanded", String(panelOpen));
  if (menu) menu.dataset.open = String(panelOpen);
}

function closeAll() {
  menuOpen = false;
  panelOpen = false;
  hovering = false;
  render();
}

function onScroll() {
  atTop = window.scrollY < 64;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  island.style.setProperty("--_progress", progress.toFixed(4));
  if (label && window.scrollY < window.innerHeight * 0.6 && !visible.size) setLabel(homeLabel);
  render();
}

// ── desktop: hover and keyboard focus open it ───────────────────────────────
island.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { hovering = true; render(); } });
island.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") { hovering = false; render(); } });
// keyboard focus opens the island; focus that comes from a tap or click
// doesn't (otherwise a tap on the menu button would open, then instantly close it)
let pointerDown = false;
island.addEventListener("pointerdown", () => { pointerDown = true; });
island.addEventListener("focusin", () => {
  if (pointerDown) { pointerDown = false; return; }
  hovering = true;
  render();
});
island.addEventListener("focusout", (e) => {
  if (!island.contains(e.relatedTarget) && !(menu && menu.contains(e.relatedTarget))) { hovering = false; render(); }
});

// ── buttons ─────────────────────────────────────────────────────────────────
if (toggle) toggle.addEventListener("click", () => {
  if (!desktop.matches) {
    panelOpen = !panelOpen; // mobile: the button opens the sheet
  } else if (island.dataset.state === "open") {
    menuOpen = false;
    panelOpen = false;
    hovering = false;
    toggle.blur();
  } else {
    menuOpen = true; // touch tablets: no hover, so the button opens the pill
  }
  render();
});
if (allBtn) allBtn.addEventListener("click", () => { panelOpen = !panelOpen; render(); });

// any link in the island or the menu closes everything
[island, menu].forEach((el) => el && el.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeAll();
}));
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || island.dataset.state !== "open") return;
  const wasPanel = panelOpen;
  closeAll();
  if (wasPanel) (desktop.matches ? allBtn : toggle)?.focus();
});
document.addEventListener("click", (e) => {
  if ((menuOpen || panelOpen) && !island.contains(e.target) && !(menu && menu.contains(e.target))) closeAll();
});
desktop.addEventListener("change", () => { syncGroups(); closeAll(); });

// ── which section is being read ─────────────────────────────────────────────
function setLabel(text) {
  if (!label || label.textContent === text) return;
  label.classList.remove("is-in");
  void label.offsetWidth; // restart the animation
  label.textContent = text;
  label.classList.add("is-in");
}

const visible = new Set();
if ("IntersectionObserver" in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      const current = sections.find((s) => visible.has(s.target));
      sections.forEach((s) => s.links.forEach((a) => a.setAttribute("aria-current", String(s === current))));
      // between tracked sections keep the last name; only near the top say the page name
      if (current) setLabel(current.target.dataset.nav);
      else if (window.scrollY < window.innerHeight * 0.6) setLabel(homeLabel);
    },
    // a section counts as "being read" while it crosses the middle of the screen
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s.target));
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
