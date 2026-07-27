// =========================================================================
//  Quiet craft — interactions
//  Scroll reveals, mobile menu, gently animated service accordions.
// =========================================================================

// --- Nav gains a soft border once the page has scrolled -------------------
const nav = document.getElementById("nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// --- Mobile nav -----------------------------------------------------------
function toggleMobileMenu() {
  const menu = document.querySelector(".nav-menu");
  const backdrop = document.getElementById("nav-backdrop");
  const btn = document.querySelector(".hamburger");
  const isOpen = menu.classList.toggle("open");
  backdrop.classList.toggle("open", isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
}
function closeMobileMenu() {
  document.querySelector(".nav-menu").classList.remove("open");
  document.getElementById("nav-backdrop").classList.remove("open");
  const btn = document.querySelector(".hamburger");
  if (btn) btn.setAttribute("aria-expanded", "false");
}
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// --- Reveal on scroll -----------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// --- Animated service accordions (open one closes the rest) ---------------
function collapseDetails(item) {
  const wrap = item.querySelector(".details-body-wrap");
  if (!wrap) { item.open = false; return; }
  const startHeight = wrap.getBoundingClientRect().height;
  wrap.style.height = startHeight + "px";
  requestAnimationFrame(() => { wrap.style.height = "0px"; });
  wrap.addEventListener("transitionend", () => {
    item.open = false; wrap.style.height = "";
  }, { once: true });
}
function expandDetails(item) {
  const wrap = item.querySelector(".details-body-wrap");
  const inner = wrap && wrap.firstElementChild;
  if (!wrap || !inner) return;
  wrap.style.height = "0px";
  requestAnimationFrame(() => { wrap.style.height = inner.getBoundingClientRect().height + "px"; });
  wrap.addEventListener("transitionend", () => { wrap.style.height = "auto"; }, { once: true });
}
function setupAccordionGroup(groupSelector, itemSelector) {
  document.querySelectorAll(groupSelector).forEach((group) => {
    const items = Array.from(group.querySelectorAll(itemSelector));
    items.forEach((item) => {
      const summary = item.querySelector("summary");
      const wrap = item.querySelector(".details-body-wrap");
      if (summary && wrap) {
        summary.addEventListener("click", (e) => {
          if (item.open) { e.preventDefault(); collapseDetails(item); }
        });
      }
      item.addEventListener("toggle", () => {
        if (item.open && wrap) {
          items.forEach((other) => { if (other !== item && other.open) collapseDetails(other); });
          expandDetails(item);
        }
      });
    });
  });
}
setupAccordionGroup(".svc-grid", ":scope > details.svc");
