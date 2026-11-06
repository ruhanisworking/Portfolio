// Bookmark — no browser lets a page add a bookmark by itself (security), so:
// where the browser offers to install the site, the button opens that prompt;
// otherwise a toast shows the bookmark shortcut for this device.
const buttons = [...document.querySelectorAll("[data-bookmark]")];
if (!buttons.length) return;

let installPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  installPrompt = e;
});

const toast = document.createElement("div");
toast.className = "bookmark-toast";
toast.setAttribute("role", "status");
document.body.appendChild(toast);
let timer;

function hint() {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) return "Tap <kbd>Share</kbd> then <kbd>Add to Home Screen</kbd> or <kbd>Add Bookmark</kbd>";
  if (/Android/.test(ua)) return "Open the browser menu <kbd>⋮</kbd> and tap <kbd>Add to Home screen</kbd> or <kbd>☆</kbd>";
  if (/Mac/.test(navigator.platform || ua)) return "Press <kbd>⌘ D</kbd> to bookmark ruhan.bd";
  return "Press <kbd>Ctrl D</kbd> to bookmark ruhan.bd";
}

buttons.forEach((b) => b.addEventListener("click", async () => {
  if (installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice.catch(() => {});
    installPrompt = null;
    return;
  }
  toast.innerHTML = hint();
  toast.classList.add("is-on");
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove("is-on"), 6000);
}));
