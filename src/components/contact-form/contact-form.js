// Contact form — turns the fields into a pre-filled email to data-to.
// mail-choice.js then asks how to send it (Gmail, mail app or copy); without
// it, the mail app opens directly.
const form = document.querySelector("[data-contact-form]");
if (!form) return;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const to = form.dataset.to;
  const subject = `Project enquiry from ${name || "the website"}`;
  const body = [
    String(data.get("message") || "").trim(),
    "",
    `— ${name}`,
    String(data.get("email") || "").trim(),
  ].join("\n");
  const asked = new CustomEvent("mail-choice:open", { detail: { to, subject, body }, cancelable: true });
  if (document.dispatchEvent(asked)) {
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
});
