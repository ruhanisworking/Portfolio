// Commander login: shows the note the auth service asks for (?e=…) and keeps ?next= in the form.
const form = document.querySelector("[data-cmd-login]");
if (!form) return;

const q = new URLSearchParams(location.search);
const next = q.get("next") || "/";
form.querySelector("[name=next]").value = next.startsWith("/") && !next.startsWith("//") ? next : "/";

const notes = {
  "1": ["Wrong user name or password.", "error"],
  locked: ["Too many attempts. Wait 15 minutes, then try again.", "error"],
  out: ["You are signed out.", "ok"],
};
const note = form.querySelector("[data-cmd-login-note]");
const n = notes[q.get("e")];
if (n) {
  note.textContent = n[0];
  note.dataset.tone = n[1];
  note.hidden = false;
}
form.querySelector(q.get("e") === "1" ? "[name=password]" : "[name=username]").focus();
