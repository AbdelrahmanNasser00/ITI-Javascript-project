/****************************TO GET ALL BOOKS FROM LOCAL STORAGE********************************** */
var localBooksData = JSON.parse(localStorage.getItem("apiData"));
import { getCard, handleUserState, logout } from "../shared.js";

/***************************************HOME PAGE*****************************************/

var ul = [
  {
    name: "Home",
    link: "../../index.html",
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
    name: "Categories",
    link: "#",
  },
  {
    name: "new",
    link: "#",
  },

];

var list = document.getElementById("navLinks");
var search = document.getElementById("search");

function navLinks() {
  for (var i = 0; i < ul.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<a href=${ul[i].link} class="navIl">${ul[i].name}</a>`;
    list.append(listItem);
  }
}
handleUserState();
navLinks();

list.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    gap:70px;
    list-style:none ;

  `;

/********************************************************arrow***************************************************/

var arrow = document.querySelector("#arrow");

function scrollToTop() {
  window.scrollTo(0, 0);
}

arrow.addEventListener("click", scrollToTop);

/****************************************************FILL Books Categories**************************************************/

var categories_arr = [
  { classicBooks: [], title: "Classic" },
  { fictionBooks: [], title: "Fiction" },
  { dystopianBooks: [], title: "Dystopian" },
  { romanceBooks: [], title: "Romance" },
  { adventureBooks: [], title: "Adventure" },
  { fantasyBooks: [], title: "Fantasy" },
  { epicBooks: [], title: "Epic" },
];

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Classic" ||
    localBooksData[i].genre[1] === "Classic"
  ) {
    categories_arr[0].classicBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Fiction" ||
    localBooksData[i].genre[1] === "Fiction"
  ) {
    categories_arr[1].fictionBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Dystopian" ||
    localBooksData[i].genre[1] === "Dystopian"
  ) {
    categories_arr[2].dystopianBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Romance" ||
    localBooksData[i].genre[1] === "Romance"
  ) {
    categories_arr[3].romanceBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Adventure" ||
    localBooksData[i].genre[1] === "Adventure"
  ) {
    categories_arr[4].adventureBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Fantasy" ||
    localBooksData[i].genre[1] === "Fantasy"
  ) {
    categories_arr[5].fantasyBooks.push(localBooksData[i]);
  }
}

for (let i = 0; i < localBooksData.length; i++) {
  if (
    localBooksData[i].genre[0] === "Epic" ||
    localBooksData[i].genre[1] === "Epic"
  ) {
    categories_arr[6].epicBooks.push(localBooksData[i]);
  }
}

function loadCategory(categories) {
  var categories_All = document.getElementById("allCategories");

  if (!categories_All) {
    console.error("Element with id 'allCategories' not found");
    return;
  }

  for (let i = 0; i < categories.length; i++) {
    if (!categories[i]) {
      console.warn(`Category at index ${i} is undefined or empty`);
      continue; // Skip to the next category
    }

    // Create the section for each category
    const categorySection = document.createElement("section");
    categorySection.classList.add("categories-body");
    categorySection.id = categories[i].title;

    // Add category title
    const categoryLine = document.createElement("hr");
    categoryLine.id=categories[i].title+1;
    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("categories-title");
    categoryTitle.textContent = categories[i].title;

    // Append title and section to categories_All
    categories_All.appendChild(categoryLine);
    categories_All.appendChild(categoryTitle);
    categories_All.appendChild(categorySection);

    var bookCategoryKey = Object.keys(categories[i])[0];
    var booksArray = categories[i][bookCategoryKey];

    // Loop over books in the current category
    for (let j = 0; j < booksArray.length; j++) {
      if (booksArray && booksArray[j]) {
        var book = document.createElement("div");
        book.classList.add("book-card");

        // Create the book card content dynamically
        const cardContent = getCard(
          booksArray[j].cover_image,
          booksArray[j].title,
          booksArray[j].author,
          booksArray[j].price
        );
        book.innerHTML = cardContent;

        // Ensure the book has a valid ID before adding event listener
        const bookId = booksArray[j].id;
        if (bookId) {
          book.addEventListener("click", function () {
            // Ensure valid ID format for redirection
            window.location.href = `../product_page/product_page.html?id=${bookId}`;
          });
        } else {
          console.warn(`No valid ID found for book: ${booksArray[j].title}`);
        }

        // Append book card to category section
        categorySection.appendChild(book);
      } else {
        console.warn(
          `No book at index ${j} in category ${categories[i].title}`
        );
      }
    }
  }
}

loadCategory(categories_arr);

/**************************************************logout**********************************************************/

// logout button
const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
  logout();
});

/**************************************************************************************************** */

var navItems = document.querySelectorAll(".navIl");
var cartIcons = document.querySelectorAll(".fa-cart-shopping");
var loginButton = document.querySelector(".login");
var registerButton = document.querySelector(".register");
var logoutButton = document.querySelector(".logout");
var bookCards = document.querySelectorAll(".book-card");
var arrow = document.querySelector(".arrow");
var sliderRightBtn = document.querySelector(".slider-right-btn");
var sliderLeftBtn = document.querySelector(".slider-left-btn");
var favIcons = document.querySelectorAll(".fa-heart");


///////////////////////////Hover effect functions////////////////////
function handleMouseOverNav() {
  this.style.textShadow = "1px 1px 1px var(--color4)";
  this.style.transform = "scale(1.3)";
  this.style.textDecoration = "underline";
  this.style.textDecorationColor = "#10352f";
  this.style.textUnderlineOffset = "7px";
}

function handleMouseOutNav() {
  this.style.textShadow = "";
  this.style.transform = "";
  this.style.textDecoration = "";
}

function handleMouseOverCart() {
  this.style.color = "#fd7612";
}

function handleMouseOutCart() {
  this.style.color = "var(--color4)";
}

function handleMouseOverButton() {
  this.style.backgroundColor = "#fd7612";
  this.style.color = "var(--mainColor)";
}

function handleMouseOutButton() {
  this.style.backgroundColor = "";
  this.style.color = "#583101";
}

function handleMouseOverBookCard() {
  this.style.transform = "scale(0.9)";
}

function handleMouseOutBookCard() {
  this.style.transform = "";
}

function handleMouseOverArrow() {
  this.style.transform = "scale(0.9)";
  this.style.backgroundColor = "#1d5f55";
}

function handleMouseOutArrow() {
  this.style.transform = "";
  this.style.backgroundColor = "var(--color6)";
}
// Hover effect functions for slider buttons
function handleMouseOverSliderButton() {
  this.style.cursor = "pointer";
  this.style.opacity = "0.8";
  this.style.transform = "scale(0.9)";
}

function handleMouseOutSliderButton() {
  this.style.cursor = "";
  this.style.opacity = "";
  this.style.transform = "";
}

////// conditions to ensure that the elements exist in the DOM before attempting to attach event listeners to them

// Add event listeners for nav items
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", handleMouseOverNav);
  navItems[i].addEventListener("mouseout", handleMouseOutNav);
}

// Add event listeners for cart icons
for (var i = 0; i < cartIcons.length; i++) {
  cartIcons[i].addEventListener("mouseover", handleMouseOverCart);
  cartIcons[i].addEventListener("mouseout", handleMouseOutCart);
}


// Add event listeners for buttons
if (loginButton) {
  loginButton.addEventListener("mouseover", handleMouseOverButton);
  loginButton.addEventListener("mouseout", handleMouseOutButton);
}

if (registerButton) {
  registerButton.addEventListener("mouseover", handleMouseOverButton);
  registerButton.addEventListener("mouseout", handleMouseOutButton);
}

if (logoutButton) {
  logoutButton.addEventListener("mouseover", handleMouseOverButton);
  logoutButton.addEventListener("mouseout", handleMouseOutButton);
}

// Add event listeners for book cards
for (var i = 0; i < bookCards.length; i++) {
  bookCards[i].addEventListener("mouseover", handleMouseOverBookCard);
  bookCards[i].addEventListener("mouseout", handleMouseOutBookCard);
}

// Add event listeners for arrow
if (arrow) {
  arrow.addEventListener("mouseover", handleMouseOverArrow);
  arrow.addEventListener("mouseout", handleMouseOutArrow);
}

// Add event listeners for slider buttons
if (sliderRightBtn) {
  sliderRightBtn.addEventListener("mouseover", handleMouseOverSliderButton);
  sliderRightBtn.addEventListener("mouseout", handleMouseOutSliderButton);
}

if (sliderLeftBtn) {
  sliderLeftBtn.addEventListener("mouseover", handleMouseOverSliderButton);
  sliderLeftBtn.addEventListener("mouseout", handleMouseOutSliderButton);
}

// Store querySelector results for .search and #options
var searchInput = document.querySelector(".search");
var options = document.querySelector("#filter");

// Handle focus event for .search
function handleFocusSearch() {
  this.style.outline = "none";
}

// Handle blur event for .search
function handleBlurSearch() {
  this.style.outline = ""; // Reset outline if necessary
}

// Handle focus event for #options
function handleFocusOptions() {
  this.style.outline = "none";
}

// Handle blur event for #options
function handleBlurOptions() {
  this.style.outline = ""; // Reset outline if necessary
}

// Add event listeners for .search
if (searchInput) {
  searchInput.addEventListener("focus", handleFocusSearch);
  searchInput.addEventListener("blur", handleBlurSearch);
}

// Add event listeners for #options
if (options) {
  options.addEventListener("focus", handleFocusOptions);
  options.addEventListener("blur", handleBlurOptions);
}



for (var i = 0; i < cartIcons.length; i++) {
  favIcons[i].addEventListener("mouseover", handleMouseOverCart);
  favIcons[i].addEventListener("mouseout", handleMouseOutCart);
}

