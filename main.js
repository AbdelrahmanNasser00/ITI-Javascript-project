/***************************************HOME PAGE*****************************************/
var ul = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "contact us",
    link: "#",
  },
  {
    name: "Offers",
    link: "#",
  },
  {
    name: "new",
    link: "#",
  },
];

// logout button
function logout() {
  sessionStorage.removeItem("currentUser");
  localStorage.removeItem("currentUser");
}
