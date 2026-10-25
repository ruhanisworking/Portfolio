// Count-up — [data-count="98"] counts from 0 to its value once it's on screen.
// The real number is in the HTML already, so without JS (or with reduced
// motion) nothing changes.
const els = document.querySelectorAll("[data-count]");
if (!els.length || !("IntersectionObserver" in window)) return;
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

const DURATION = Number("{{components.count-up.duration}}");

function run(el) {
  const target = Number(el.dataset.count);
  const decimals = (el.dataset.count.split(".")[1] || "").length;
  const suffix = el.dataset.suffix || "";
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / DURATION);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    run(e.target);
    io.unobserve(e.target);
  }
}, { threshold: 0.6 });
els.forEach((el) => io.observe(el));
