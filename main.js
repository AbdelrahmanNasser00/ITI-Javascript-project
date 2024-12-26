/****************************TO GET ALL BOOKS FROM LOCAL STORAGE********************************** */

var localBooksData = JSON.parse(localStorage.getItem("apiData"));

/***************************************IMPORT FILTERS*****************************************/

import { sortBooksHighToLow, sortBooksLowToHigh } from "./api/filter.js";

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

var list = document.getElementById("navLinks");
var cards = document.getElementById("cards");

function navLinks() {
  for (var i = 0; i < ul.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<a href=${ul[i].link} class="navIl">${ul[i].name}</a>`;
    list.append(listItem);
  }
}

navLinks();

list.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    gap:70px;
    list-style:none ;

  `;

/************************ CARDS***********************/

function getCard(img, name, author, price) {
  return `
              <img src=${img} alt="" class="book-img">
              <h3 class="book-name">${name}</h3>
              <h4 class="book-auther">${author}</h4>
              <p class="book-price"><span class="pound">EGP </span>${price}</p>
  `;
}

function displayAllBooks() {
  var cards = document.getElementById("cards");
  for (let i = 0; i < localBooksData.length; i++) {
    var book = document.createElement("div");
    book.classList.add("book-card");
    book.innerHTML = getCard(
      localBooksData[i].cover_image,
      localBooksData[i].title,
      localBooksData[i].author,
      localBooksData[i].price
    );

    cards.append(book);
  }
}
/******************Display all books for first time *******************************/

displayAllBooks();

/***********************************filters**************************************************************/

/***************even listener to get selected value of filter ********************/
var selectedValue;
var filterInput = document.getElementById("filter");
filterInput.addEventListener("input", function () {
  selectedValue = filterInput.value;
  displayFilterBooks(); // when user type any filter fun check function
});

function displayFilterBooks() {
  var cards = document.getElementById("cards");
  cards.innerHTML = ""; // make page empty to display new books data

  switch (selectedValue) {
    case "":
      displayAllBooks(); // if user remove all filter
      break;
    case "price: Low To High":
      sortBooksLowToHigh(); // this function i imported it from filter.js
      break;
    case "price: High To Low":
      sortBooksHighToLow(); // this function i imported it from filter.js
      break;
    case "Author":
      sortBooksByAuthor();
      break;

    default:
      displayAllBooks();
      break;
  }
}

/*********************************************************************************************** */

// logout button
function logout() {
  sessionStorage.removeItem("currentUser");
  localStorage.removeItem("currentUser");
}
