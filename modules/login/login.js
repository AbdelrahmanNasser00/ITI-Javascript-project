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
    // Select the container where the form will be inserted
    const loginContainer = document.getElementById("loginContainer");

    // form
    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";

    // email input
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    loginForm.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    loginForm.appendChild(emailInput);

    // password input
    const passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password:";
    loginForm.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.name = "password";
    passwordInput.required = true;
    loginForm.appendChild(passwordInput);

    // Remember Me checkbox
    const rememberMeLabel = document.createElement("label");
    rememberMeLabel.textContent = "Remember Me";
    rememberMeLabel.setAttribute("for", "rememberMe");
    const rememberMeCheckbox = document.createElement("input");
    rememberMeCheckbox.type = "checkbox";
    rememberMeCheckbox.id = "rememberMe";
    loginForm.appendChild(rememberMeLabel);
    loginForm.appendChild(rememberMeCheckbox);

    // submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";
    loginForm.appendChild(submitButton);

    // don't have email
    const dontHaveEmailText = document.createElement("span");
    dontHaveEmailText.textContent = "Don't have an account? ";
    const signupLink = document.createElement("a");
    signupLink.textContent = "Sign up";
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
        fetchBooks();
        window.location.href = "../../index.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  });
}

function fetchBooks() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.itbook.store/1.0/new", true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (xhttp.status === 200) {
      const books = JSON.parse(xhttp.responseText);
      console.log(books.data);
    } else {
      console.error(xhttp.status);
    }
  };

  xhttp.onerror = function () {
    console.error("Request failed.");
  };
}
