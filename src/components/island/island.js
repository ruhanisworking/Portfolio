// Island — drives the Dynamic-Island navbar.
//   data-state="open"     top of page, hover/focus (desktop), or tapped open (mobile)
//   data-state="compact"  otherwise
// Also: names the section being read, draws scroll progress, Esc / outside
// click close the mobile sheet.
const island = document.querySelector("[data-island]");
if (!island) return;

const toggle = island.querySelector("[data-island-toggle]");
const label = island.querySelector("[data-island-label]");
const links = [...island.querySelectorAll("[data-island-link]")];
const desktop = window.matchMedia("(min-width: {{breakpoints.md}})");
const homeLabel = label ? label.textContent.trim() : "";

let atTop = true;
let hovering = false;
let menuOpen = false;

function render() {
  // desktop opens at the top, on hover/focus, or when the menu button is
  // tapped (touch tablets have no hover); mobile opens only from the button
  const open = desktop.matches ? atTop || hovering || menuOpen : menuOpen;
  island.dataset.state = open ? "open" : "compact";
  island.dataset.top = String(atTop);
  if (toggle) toggle.setAttribute("aria-expanded", String(open));
}

function onScroll() {
  atTop = window.scrollY < 64;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  island.style.setProperty("--_progress", progress.toFixed(4));
  if (label && window.scrollY < window.innerHeight * 0.6 && typeof visible !== "undefined" && !visible.size) setLabel(homeLabel);
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
  if (!island.contains(e.relatedTarget)) { hovering = false; render(); }
});

// ── mobile: tap to open, close on link / Esc / outside tap ──────────────────
// the button toggles what the user sees: if the island is open for any reason
// (menu, hover or a tap's focus), the button closes it
if (toggle) toggle.addEventListener("click", () => {
  if (island.dataset.state === "open") {
    menuOpen = false;
    hovering = false;
    toggle.blur();
  } else {
    menuOpen = true;
  }
  render();
});
links.forEach((a) => a.addEventListener("click", () => { menuOpen = false; render(); }));
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || island.dataset.state !== "open") return;
  menuOpen = false;
  hovering = false;
  render();
  if (toggle && !desktop.matches) toggle.focus();
});
document.addEventListener("click", (e) => {
  if (menuOpen && !island.contains(e.target)) { menuOpen = false; render(); }
});
desktop.addEventListener("change", render);

// ── which section is being read ─────────────────────────────────────────────
function setLabel(text) {
  if (!label || label.textContent === text) return;
  label.classList.remove("is-in");
  void label.offsetWidth; // restart the animation
  label.textContent = text;
  label.classList.add("is-in");
}

// links are "/#services" so they work from any page; only track the ones that
// point at a section on *this* page
const sections = links
  .map((a) => {
    const url = new URL(a.href, location.href);
    const onPage = url.pathname === location.pathname && url.hash.length > 1;
    return { link: a, target: onPage ? document.getElementById(url.hash.slice(1)) : null };
  })
  .filter((s) => s.target && !s.link.classList.contains("island__cta"));
const visible = new Set();

if ("IntersectionObserver" in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      const current = sections.find((s) => visible.has(s.target));
      sections.forEach((s) => s.link.setAttribute("aria-current", String(s === current)));
      // between tracked sections keep the last name; only near the top say "Home"
      if (current) setLabel(current.link.textContent.trim());
      else if (window.scrollY < window.innerHeight * 0.6) setLabel(homeLabel);
    },
    // a section counts as "being read" while it crosses the middle of the screen
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s.target));
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
