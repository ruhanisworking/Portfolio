/* =========================================================================
   RIVER & CANOPY — behaviour
   nav · reveal · exclusive animated accordions · copy buttons · contact form
   ========================================================================= */

/* ── nav ────────────────────────────────────────────────────────────────── */
const navEl = document.getElementById("nav");
if (navEl) {
  const onScroll = () => navEl.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const backdrop = document.getElementById("nav-backdrop");
  const btn = document.querySelector(".hamburger");
  const open = menu.classList.toggle("open");
  backdrop.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

function closeMenu() {
  const menu = document.getElementById("nav-menu");
  if (!menu.classList.contains("open")) return;
  menu.classList.remove("open");
  document.getElementById("nav-backdrop").classList.remove("open");
  document.querySelector(".hamburger").setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

document.querySelectorAll(".nav-menu a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

/* ── reveal on scroll ───────────────────────────────────────────────────── */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ── accordions ─────────────────────────────────────────────────────────────
   Native <details> snaps open instantly. These animate height, and opening
   one closes the others in the same group.
   ------------------------------------------------------------------------- */
function collapse(item, wrapSel) {
  const wrap = item.querySelector(wrapSel);
  if (!wrap) { item.open = false; return; }
  wrap.style.height = wrap.getBoundingClientRect().height + "px";
  requestAnimationFrame(() => { wrap.style.height = "0px"; });
  wrap.addEventListener("transitionend", function done() {
    item.open = false;
    wrap.style.height = "";
    wrap.removeEventListener("transitionend", done);
  });
}

function expand(item, wrapSel) {
  const wrap = item.querySelector(wrapSel);
  const inner = wrap && wrap.firstElementChild;
  if (!wrap || !inner) return;
  wrap.style.height = "0px";
  requestAnimationFrame(() => { wrap.style.height = inner.getBoundingClientRect().height + "px"; });
  wrap.addEventListener("transitionend", function done() {
    wrap.style.height = "auto";
    wrap.removeEventListener("transitionend", done);
  });
}

function accordion(groupSel, itemSel, wrapSel) {
  document.querySelectorAll(groupSel).forEach((group) => {
    const items = Array.from(group.querySelectorAll(itemSel));
    items.forEach((item) => {
      const summary = item.querySelector("summary");
      if (summary) {
        summary.addEventListener("click", (e) => {
          if (item.open) { e.preventDefault(); collapse(item, wrapSel); }
        });
      }
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => { if (other !== item && other.open) collapse(other, wrapSel); });
        expand(item, wrapSel);
      });
    });
  });
}

accordion(".svc-grid", ":scope > details.svc", ".svc-body-wrap");
accordion(".faq-list", ":scope > details.faq", ".faq-body-wrap");

/* ── copy-to-clipboard ──────────────────────────────────────────────────────
   Mail buttons rely on the OS mail handler, which silently does nothing on a
   desktop with no mail client configured. Copy is the always-works fallback.
   ------------------------------------------------------------------------- */
document.querySelectorAll(".copy-btn").forEach((btn) => {
  const label = btn.querySelector(".copy-label");
  const original = label ? label.textContent : "";
  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard API blocked (http, old browser) — fall back to a temp field
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:absolute;left:-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    btn.classList.add("done");
    if (label) label.textContent = "Copied";
    window.setTimeout(() => {
      btn.classList.remove("done");
      if (label) label.textContent = original;
    }, 1800);
  });
});

/* ── contact form ───────────────────────────────────────────────────────────
   Posts to Web3Forms when an access key is configured. If the key is still
   the placeholder, or the network call fails, it falls back to opening the
   visitor's mail app with everything they typed pre-filled — so a submission
   is never silently lost.
   ------------------------------------------------------------------------- */
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const MAIL_TO = "ruhan.9mri@gmail.com";
const PLACEHOLDER_KEY = "WEB3FORMS_ACCESS_KEY";

function setStatus(kind, html) {
  if (!statusEl) return;
  statusEl.className = "form-status show " + kind;
  statusEl.innerHTML = html;
}

function mailtoFallback(data, reason) {
  const subject = `Project enquiry — ${data.name || "website visitor"}`;
  const body =
    `Name: ${data.name || "—"}\n` +
    `Company: ${data.company || "—"}\n` +
    `Email: ${data.email || "—"}\n` +
    `Phone / WhatsApp: ${data.phone || "—"}\n` +
    `Project type: ${data.project_type || "—"}\n\n` +
    `${data.message || ""}\n`;
  const href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  setStatus(
    "ok",
    `${reason} Your mail app should be opening with the message ready to send. ` +
      `If nothing happened, email <strong>${MAIL_TO}</strong> directly.`
  );
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    // honeypot — bots tick this, humans can't see it
    if (data.botcheck) return;

    // validation
    const email = (data.email || "").trim();
    if (!(data.name || "").trim() || !email || !(data.message || "").trim()) {
      setStatus("err", "Please fill in your name, email and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err", "That email address doesn't look right — mind checking it?");
      return;
    }

    const btn = form.querySelector(".btn.send");
    const btnLabel = form.querySelector(".send-label");
    const originalLabel = btnLabel ? btnLabel.textContent : "";
    if (btn) btn.disabled = true;
    if (btnLabel) btnLabel.textContent = "Sending…";

    const key = (data.access_key || "").trim();

    // no key configured yet → straight to the mail-app fallback
    if (!key || key === PLACEHOLDER_KEY) {
      mailtoFallback(data, "Direct sending isn't switched on yet, so");
      if (btn) btn.disabled = false;
      if (btnLabel) btnLabel.textContent = originalLabel;
      return;
    }

    try {
      // reply-to so hitting Reply in Gmail goes back to the sender
      fd.append("replyto", email);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const out = await res.json().catch(() => ({}));

      if (res.ok && out.success) {
        form.reset();
        setStatus(
          "ok",
          "Thanks — that's landed in my inbox. You'll hear back within one business day."
        );
      } else {
        mailtoFallback(data, "The form couldn't send just now, so");
      }
    } catch {
      mailtoFallback(data, "You look offline, so");
    } finally {
      if (btn) btn.disabled = false;
      if (btnLabel) btnLabel.textContent = originalLabel;
    }
  });
}
