/* Did You Hear? — Coming soon */

/* ===== EDIT YOUR LINKS HERE ===== */
var CONFIG = {
  youtube: "https://www.youtube.com/@YOURCHANNEL?sub_confirmation=1", // your channel URL
  email: "your@email.com"                                            // business inquiries email
};
/* ================================ */

(function () {
  "use strict";

  document.querySelectorAll("[data-yt]").forEach(function (a) { a.href = CONFIG.youtube; });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + CONFIG.email + "?subject=Business%20inquiry%20%E2%80%94%20Did%20You%20Hear%3F";
    a.textContent = CONFIG.email;
  });

  /* Waitlist form — set the form's `action` to your email provider endpoint.
     While action is "#", it runs in demo mode. */
  var form = document.getElementById("signup");
  var input = document.getElementById("email");
  var msg = document.getElementById("signupMsg");
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (form && input && msg) {
    input.addEventListener("input", function () {
      input.removeAttribute("aria-invalid");
      msg.textContent = "";
      msg.className = "signup__msg";
    });
    form.addEventListener("submit", function (e) {
      if (!emailRe.test(input.value.trim())) {
        e.preventDefault();
        input.setAttribute("aria-invalid", "true");
        msg.textContent = "Enter a valid email address.";
        msg.className = "signup__msg is-error";
        input.focus();
        return;
      }
      if (form.getAttribute("action") === "#") {
        e.preventDefault();
        msg.textContent = "You're on the list. The tea is coming your way ✨";
        msg.className = "signup__msg is-ok";
        form.reset();
      }
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
