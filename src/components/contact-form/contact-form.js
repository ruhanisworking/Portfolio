// Contact form — turns the fields into a pre-filled email to data-to.
const form = document.querySelector("[data-contact-form]");
if (!form) return;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const subject = `Project enquiry from ${name || "the website"}`;
  const body = [
    String(data.get("message") || "").trim(),
    "",
    `— ${name}`,
    String(data.get("email") || "").trim(),
  ].join("\n");
  window.location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
