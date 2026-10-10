/* Modern Growth Toolkit — Coming soon */
(function () {
  "use strict";

  /* Waitlist form.
     Connect your email provider: set the form's `action` to your
     Kit / MailerLite / Beehiiv endpoint. While action is "#", it runs in demo mode. */
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
        msg.textContent = "You're on the list. We'll email you the moment we launch.";
        msg.className = "signup__msg is-ok";
        form.reset();
      }
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
