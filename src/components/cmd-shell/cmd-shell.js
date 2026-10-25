// Commander shell: opens/closes the sidebar sheet below lg and marks the current page link.
const shell = document.querySelector("[data-cmd]");
if (!shell) return;

const toggles = shell.querySelectorAll("[data-cmd-nav-toggle]");
const setOpen = (open) => {
  shell.dataset.nav = open ? "open" : "closed";
  toggles.forEach((b) => b.setAttribute("aria-expanded", String(open)));
};
toggles.forEach((b) => b.addEventListener("click", () => setOpen(shell.dataset.nav !== "open")));
shell.querySelectorAll("[data-cmd-nav-close]").forEach((el) => el.addEventListener("click", () => setOpen(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

const norm = (p) => p.replace(/\/+$/, "") || "/";
const here = norm(location.pathname);
for (const a of shell.querySelectorAll(".cmd-nav__link")) {
  const url = new URL(a.href, location.href);
  if (url.origin === location.origin && norm(url.pathname) === here) a.setAttribute("aria-current", "page");
}
