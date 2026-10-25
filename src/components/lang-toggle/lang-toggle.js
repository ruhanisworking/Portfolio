// Language toggle — English by default. Only a click is remembered, so the
// default can't get "stuck". Bangla fonts are fetched the first time Bangla
// is chosen. Fires a `langchange` event for the page's text to listen to.
const KEY = "ri-lang-v2";
const options = document.querySelectorAll("[data-lang]");
if (!options.length) return;

let bnFontsLoaded = false;
function loadBanglaFonts() {
  if (bnFontsLoaded) return;
  bnFontsLoaded = true;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "{{fonts.google-href-bn}}";
  document.head.appendChild(link);
}

function apply(lang, remember) {
  if (lang === "bn") loadBanglaFonts();
  document.documentElement.lang = lang;
  options.forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.lang === lang)));
  if (remember) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

let saved = null;
try { saved = localStorage.getItem(KEY); } catch (e) {}
apply(saved === "bn" ? "bn" : "en", false);

options.forEach((o) => o.addEventListener("click", () => apply(o.dataset.lang, true)));
