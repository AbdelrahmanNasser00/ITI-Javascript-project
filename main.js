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

var list=document.getElementById("navLinks");
var cards=document.getElementById("cards")


function navLinks(){
  for(var i=0;i<ul.length;i++)
  {
    var listItem=document.createElement("li");
    listItem.innerHTML=`<a href=${ul[i].link} class="navIl">${ul[i].name}</a>`;
    list.append(listItem);
  };
};

navLinks()

list.style.cssText=
  `
    display: flex;
    align-items: center;
    justify-content: center;
    gap:70px;
    list-style:none ;

  `;



/*********************************************************************************************** */
// logout button
function logout() {
  sessionStorage.removeItem("currentUser");
  localStorage.removeItem("currentUser");
}
