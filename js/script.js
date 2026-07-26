// Theme toggle
function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.classList.add("theme-anim");
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("ri-theme", next); } catch (e) {}
  window.setTimeout(() => root.classList.remove("theme-anim"), 450);
}

// Navbar gains a border/shadow once the page has scrolled
const navbarEl = document.getElementById("navbar");
if (navbarEl) {
  const onScroll = () => navbarEl.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Mobile nav
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
  document.querySelector(".hamburger").setAttribute("aria-expanded", "false");
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Accordion groups: opening one closes the rest, with an animated expand/collapse
// instead of the native <details> instant snap.
function collapseDetails(item) {
  const wrap = item.querySelector(".details-body-wrap");
  if (!wrap) { item.open = false; return; }
  const startHeight = wrap.getBoundingClientRect().height;
  wrap.style.height = startHeight + "px";
  requestAnimationFrame(() => { wrap.style.height = "0px"; });
  wrap.addEventListener(
    "transitionend",
    () => { item.open = false; wrap.style.height = ""; },
    { once: true }
  );
}

function expandDetails(item) {
  const wrap = item.querySelector(".details-body-wrap");
  const inner = wrap && wrap.firstElementChild;
  if (!wrap || !inner) return;
  wrap.style.height = "0px";
  requestAnimationFrame(() => { wrap.style.height = inner.getBoundingClientRect().height + "px"; });
  wrap.addEventListener(
    "transitionend",
    () => { wrap.style.height = "auto"; },
    { once: true }
  );
}

function setupAccordionGroup(groupSelector, itemSelector) {
  document.querySelectorAll(groupSelector).forEach((group) => {
    const items = Array.from(group.querySelectorAll(itemSelector));
    items.forEach((item) => {
      const summary = item.querySelector("summary");
      if (summary) {
        summary.addEventListener("click", (e) => {
          if (item.open) {
            e.preventDefault();
            collapseDetails(item);
          }
        });
      }
      item.addEventListener("toggle", () => {
        if (item.open) {
          items.forEach((other) => { if (other !== item && other.open) collapseDetails(other); });
          expandDetails(item);
        }
      });
    });
  });
}
setupAccordionGroup(".work-grid", ":scope > details.proj-card");
setupAccordionGroup(".faq-list", ":scope > details.faq-item");
