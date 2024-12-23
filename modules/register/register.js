var currentUser = localStorage.getItem("currentUser");
if (currentUser) window.location.href = "../../index.html";
else {
  currentUser = sessionStorage.getItem("currentUser");
  if (currentUser) window.location.href = "../../index.html";
  else {
    loadRegisterPage();
  }
}
function loadRegisterPage() {
  document.addEventListener("DOMContentLoaded", () => {
    const registerContainer = document.getElementById("registerContainer");
    // form
    const registerForm = document.createElement("form");
    registerForm.id = "registerForm";

    // email input
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    registerForm.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    registerForm.appendChild(emailInput);

    // password input
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password:";
    registerForm.appendChild(passwordLabel);
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.required = true;
    registerForm.appendChild(passwordInput);

    // confirm password input
    const confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.setAttribute("for", "confirmPassword");
    confirmPasswordLabel.textContent = "Confirm Password:";
    registerForm.appendChild(confirmPasswordLabel);

    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.type = "password";
    confirmPasswordInput.id = "confirmPassword";
    confirmPasswordInput.name = "confirmPassword";
    confirmPasswordInput.required = true;
    registerForm.appendChild(confirmPasswordInput);

    // submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Register";
    registerForm.appendChild(submitButton);

    // already have an account link
    const haveAccountText = document.createElement("span");
    haveAccountText.textContent = "Already have an account? ";
    const loginLink = document.createElement("a");
    loginLink.textContent = "Login";
    loginLink.href = "../login/login.html";
    registerForm.appendChild(haveAccountText);
    registerForm.appendChild(loginLink);

    registerContainer.appendChild(registerForm);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^[A-Za-z0-9!@#$%^&*]{6,}$/;

    // form submission
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      // validation
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!passwordPattern.test(password)) {
        alert(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // get users from local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      if (users.some((user) => user.email === email)) {
        alert("Email is already registered.");
        return;
      }

      // Add the new user to the list
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful!");
      window.location.href = "../login/login.html";
    });
  });
}
