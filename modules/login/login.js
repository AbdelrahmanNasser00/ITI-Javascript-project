// check if user login or not
var currentUser = localStorage.getItem("currentUser");
if (currentUser) window.location.href = "../../index.html";
else {
  currentUser = sessionStorage.getItem("currentUser");
  if (currentUser) window.location.href = "../../index.html";
  else {
    loadLoginPage();
  }
}
function loadLoginPage() {
  document.addEventListener("DOMContentLoaded", () => {
    const loginContainer = document.getElementById("loginCard");
    const imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer";
    imgContainer.classList.add("imgContainer");
    const loginImage = document.createElement("img");
    loginImage.src = "../../assets/img/login-pic.svg";
    loginImage.alt = "login";
    imgContainer.appendChild(loginImage);
    loginContainer.appendChild(imgContainer);

    // form
    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";

    // form header
    const loginH2 = document.createElement("h2");
    loginH2.textContent = "Sign In";
    loginForm.appendChild(loginH2);

    // email input
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email address";
    emailLabel.id = "emailLabel";
    loginForm.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.class = "email";
    emailInput.placeholder = "Enter email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    loginForm.appendChild(emailInput);

    // password input
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password";
    passwordLabel.id = "passwordLabel";

    loginForm.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.class = "password";
    passwordInput.placeholder = "Enter password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.required = true;
    loginForm.appendChild(passwordInput);

    // Remember Me checkbox
    const rememberMeDiv = document.createElement("div");
    rememberMeDiv.id = "rememberMeDiv";
    const rememberMeLabel = document.createElement("label");
    rememberMeLabel.textContent = "Remember Me";
    rememberMeLabel.class = "rememberMeLabel";
    rememberMeLabel.setAttribute("for", "rememberMe");
    const rememberMeCheckbox = document.createElement("input");
    rememberMeCheckbox.type = "checkbox";
    rememberMeCheckbox.id = "rememberMe";
    rememberMeCheckbox.class = "rememberMeCheckbox";
    rememberMeDiv.appendChild(rememberMeLabel);
    rememberMeDiv.appendChild(rememberMeCheckbox);
    loginForm.appendChild(rememberMeDiv);

    // submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";
    loginForm.appendChild(submitButton);

    // don't have email
    const dontHaveEmailText = document.createElement("span");
    dontHaveEmailText.textContent = "Don't have an account? ";
    dontHaveEmailText.id = "dontHaveEmailText";
    const signupLink = document.createElement("a");
    signupLink.textContent = "Sign up";
    signupLink.id = "signupLink";
    signupLink.href = "../register/register.html";
    loginForm.appendChild(dontHaveEmailText);
    loginForm.appendChild(signupLink);
    loginContainer.appendChild(loginForm);

    // form submission
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert("Login successful!");
        const storage = rememberMeCheckbox.checked
          ? localStorage
          : sessionStorage;
        storage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "../../index.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  });
}
