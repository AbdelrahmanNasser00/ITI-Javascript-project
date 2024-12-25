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
    const registerContainer = document.getElementById("registerCard");

    // Image Container
    const imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer";
    imgContainer.classList.add("imgContainer");
    const registerImage = document.createElement("img");
    registerImage.src = "../../assets/img/register.svg";
    registerImage.alt = "register";
    imgContainer.appendChild(registerImage);
    registerContainer.appendChild(imgContainer);

    // Form
    const registerForm = document.createElement("form");
    registerForm.id = "registerForm";

    // Form Header
    const registerH2 = document.createElement("h2");
    registerH2.textContent = "Sign Up";
    registerForm.appendChild(registerH2);

    // Name Input
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Full Name";
    nameLabel.id = "nameLabel";
    registerForm.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.placeholder = "Enter full name";
    nameInput.required = true;
    registerForm.appendChild(nameInput);

    // Email Input
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email address";
    emailLabel.id = "emailLabel";
    registerForm.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Enter email";
    emailInput.required = true;
    registerForm.appendChild(emailInput);

    // Password Input
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password";
    passwordLabel.id = "passwordLabel";
    registerForm.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Enter password";
    passwordInput.required = true;
    registerForm.appendChild(passwordInput);

    // Confirm Password Input
    const confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.setAttribute("for", "confirmPassword");
    confirmPasswordLabel.textContent = "Confirm Password";
    confirmPasswordLabel.id = "confirmPasswordLabel";
    registerForm.appendChild(confirmPasswordLabel);

    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.type = "password";
    confirmPasswordInput.id = "confirmPassword";
    confirmPasswordInput.name = "confirmPassword";
    confirmPasswordInput.placeholder = "Confirm password";
    confirmPasswordInput.required = true;
    registerForm.appendChild(confirmPasswordInput);

    // Submit Button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Register";
    registerForm.appendChild(submitButton);

    // Already have an account
    const alreadyHaveAccountText = document.createElement("span");
    alreadyHaveAccountText.textContent = "Already have an account? ";
    alreadyHaveAccountText.id = "alreadyHaveAccountText";
    const loginLink = document.createElement("a");
    loginLink.textContent = "Sign in";
    loginLink.id = "loginLink";
    loginLink.href = "../login/login.html";
    registerForm.appendChild(alreadyHaveAccountText);
    registerForm.appendChild(loginLink);

    registerContainer.appendChild(registerForm);

    // Form submission
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((u) => u.email === email);

      if (userExists) {
        alert("Email is already registered.");
      } else {
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        window.location.href = "../login/login.html";
      }
    });
  });
}
