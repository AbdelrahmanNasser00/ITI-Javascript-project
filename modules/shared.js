export function checkUserAuth() {
  var currentUser =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");
  console.log(currentUser);
  if (currentUser) {
    return true;
  } else {
    return false;
  }
}

export function handleUserState() {
  var loginBtn = document.getElementById("login");
  var registerBtn = document.getElementById("register");
  var logoutBtn = document.getElementById("logout");

  if (checkUserAuth()) {
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
  } else {
    loginBtn.style.display = "block";
    registerBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
}

export function logout() {
  try {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
  } catch (error) {
    console.error("Error during logout:", error);
  }
}
