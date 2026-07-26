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

// Animated stat counters
document.querySelectorAll(".stat-num[data-count]").forEach((el) => {
  const target = parseInt(el.getAttribute("data-count"), 10);
  if (!target) return;
  const suffix = el.getAttribute("data-suffix") || "";
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        let current = 0;
        const step = Math.max(1, Math.round(target / 30));
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 30);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  counterObserver.observe(el);
});
