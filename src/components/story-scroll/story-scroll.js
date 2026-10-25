// Story scroll — follows which step is in the middle of the screen and drives
// the sticky visual: data-active, .is-on for data-from ≤ active, .is-current
// for the matching caption/step, and --_progress on the rail.
document.querySelectorAll("[data-story]").forEach((story) => {
  const steps = [...story.querySelectorAll("[data-step]")];
  const visual = story.querySelector("[data-story-visual]");
  const rail = story.querySelector(".story-scroll__rail");
  if (!steps.length || !visual) return;

  function setActive(n) {
    visual.dataset.active = String(n);
    visual.querySelectorAll("[data-from]").forEach((el) => {
      el.classList.toggle("is-on", Number(el.dataset.from) <= n);
    });
    story.querySelectorAll("[data-cap]").forEach((el) => {
      el.classList.toggle("is-current", Number(el.dataset.cap) === n);
    });
    steps.forEach((s) => s.classList.toggle("is-current", Number(s.dataset.step) === n));
  }

  // row variant: the pipeline plays itself once it's on screen
  if (story.classList.contains("story-scroll--row") && "IntersectionObserver" in window) {
    let timer;
    setActive(1);
    if (rail) rail.style.setProperty("--_progress", (1 / steps.length).toFixed(3));
    const play = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || timer) return;
      let n = 1;
      timer = setInterval(() => {
        n = n >= steps.length ? 1 : n + 1;
        setActive(n);
        if (rail) rail.style.setProperty("--_progress", (n / steps.length).toFixed(3));
      }, Number("{{components.story-scroll.autoplay-ms}}"));
    }, { threshold: 0.4 });
    play.observe(visual);
    return;
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number(e.target.dataset.step));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    steps.forEach((s) => io.observe(s));
  }
  setActive(1);

  // the rail fills as the steps scroll past the middle of the screen
  if (rail) {
    const list = rail.parentElement;
    const onScroll = () => {
      const r = list.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      rail.style.setProperty("--_progress", p.toFixed(3));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
