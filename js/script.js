// Theme toggle
function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("ri-theme", next); } catch (e) {}
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
