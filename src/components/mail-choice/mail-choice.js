// Mail choice — every mailto: link (and the contact form) asks first.
// Opens the dialog with the address, subject and body; the person picks
// Gmail (new tab, draft filled in), their mail app, or copy the address.
const dialog = document.querySelector("[data-mail-choice]");
if (!dialog || typeof dialog.showModal !== "function") return;

const gmail = dialog.querySelector("[data-mail-choice-gmail]");
const app = dialog.querySelector("[data-mail-choice-app]");
const copy = dialog.querySelector("[data-mail-choice-copy]");
const copyLabel = dialog.querySelector("[data-mail-choice-copy-label]");
const toLabel = dialog.querySelector("[data-mail-choice-to]");
const copyText = copyLabel.textContent;
let address = "";

const DEFAULT_SUBJECT = "Project enquiry from ruhan.bd";
const DEFAULT_BODY = "Hi Ruhan,\n\nI'd like help with: ";

function open({ to, subject = DEFAULT_SUBJECT, body = DEFAULT_BODY }) {
  address = to;
  toLabel.textContent = to;
  const q = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  gmail.href = `https://mail.google.com/mail/?view=cm&fs=1&${q({ to, su: subject, body })}`;
  app.href = `mailto:${to}?${q({ subject, body })}`;
  copyLabel.textContent = copyText;
  dialog.showModal();
}

// any mailto: link on the page
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="mailto:"]');
  if (!a || dialog.contains(a) || e.ctrlKey || e.metaKey || e.shiftKey) return;
  e.preventDefault();
  const url = new URL(a.href);
  const p = url.searchParams;
  open({ to: decodeURIComponent(url.pathname), subject: p.get("subject") || undefined, body: p.get("body") || undefined });
});

// the contact form hands over its message (contact-form.js)
document.addEventListener("mail-choice:open", (e) => {
  e.preventDefault();
  open(e.detail);
});

// picking an option closes the dialog
[gmail, app].forEach((a) => a.addEventListener("click", () => setTimeout(() => dialog.close(), 0)));
copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(address);
    copyLabel.textContent = "Copied ✓";
  } catch {
    copyLabel.textContent = address;
  }
});
// a click on the backdrop closes it
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
