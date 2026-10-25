// Reveal — marks [data-reveal] elements visible as they scroll into view.
// Children of [data-reveal-stagger] become reveal items with an index (--_i),
// which reveal.css turns into a stagger delay.
document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
  [...group.children].forEach((el, i) => {
    el.setAttribute("data-reveal", "");
    el.style.setProperty("--_i", String(i));
  });
});

const items = document.querySelectorAll("[data-reveal]");
if (!("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
  return;
}

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
);
items.forEach((el) => io.observe(el));
