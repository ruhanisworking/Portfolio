// =========================================================================
//  Status-page portfolio — interactions
//  Live Dhaka clock, ambient sparkline, metric count-up, scroll reveals,
//  mobile menu, animated accordions.
// =========================================================================

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- Live Dhaka clock (Asia/Dhaka, independent of the visitor's timezone) --
const clockEl = document.getElementById("clock");
if (clockEl) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });
  const tick = () => { clockEl.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 1000);
}

// --- Status bar border on scroll -----------------------------------------
const statusbar = document.getElementById("statusbar");
if (statusbar) {
  const onScroll = () => statusbar.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// --- Ambient latency sparkline -------------------------------------------
// A gentle, believable "response time" trace. Redrawn slowly; frozen for
// visitors who prefer reduced motion.
const spark = document.getElementById("spark");
if (spark) {
  const W = 168, H = 44, N = 34;
  let phase = 0;
  const draw = () => {
    const pts = [];
    for (let i = 0; i < N; i++) {
      const x = (i / (N - 1)) * W;
      const base = Math.sin(i * 0.55 + phase) * 6 + Math.sin(i * 1.7 + phase * 0.6) * 3;
      const jitter = Math.sin(i * 9.13 + phase * 2.0) * 2.2;
      const y = H / 2 - (base + jitter);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    spark.setAttribute("points", pts.join(" "));
  };
  draw();
  if (!prefersReduced) {
    setInterval(() => { phase += 0.35; draw(); }, 900);
  }
}

// --- Metric count-up (runs once the masthead is in view) ------------------
function countUp(el) {
  const target = parseFloat(el.getAttribute("data-count"));
  const suffix = el.getAttribute("data-suffix") || "";
  if (prefersReduced || isNaN(target)) {
    el.innerHTML = target + (suffix ? `<span class="u">${suffix}</span>` : "");
    return;
  }
  const dur = 900, start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(target * eased);
    el.innerHTML = val + (suffix ? `<span class="u">${suffix}</span>` : "");
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const counters = document.querySelectorAll(".metric-v[data-count]");
if (counters.length) {
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { countUp(e.target); cObs.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cObs.observe(c));
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

// --- Animated accordions (open one closes the others) ---------------------
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
setupAccordionGroup(".svc-list", ":scope > details.svc");
setupAccordionGroup(".faq-list", ":scope > details.faq-item");
