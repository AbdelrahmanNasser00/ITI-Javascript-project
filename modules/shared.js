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

export function getCard(img, name, author, price) {
  return `
              <img src=${img} alt="" class="book-img">
              <h3 class="book-name">${name}</h3>
              <h4 class="book-auther">${author}</h4>
              <p class="book-price"><span class="pound">EGP </span>${price}</p>
  `;
}

export function renderNavLinks(list, ul) {
  for (var i = 0; i < ul.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<a href=${ul[i].link} class="navIl">${ul[i].name}</a>`;
    list.append(listItem);
  }
}
