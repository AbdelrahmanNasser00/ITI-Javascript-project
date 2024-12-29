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

function displayAllBooks(arr) {
  var cards = document.getElementById("cards");
  cards.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    var book = document.createElement("div");
    book.classList.add("book-card");
    book.innerHTML = getCard(
      arr[i].cover_image,
      arr[i].title,
      arr[i].author,
      arr[i].price
    );
    book.addEventListener("click", function () {
      window.location.href =
        "modules/product_page/product_page.html?id=" + localBooksData[i].id;
    });
    cards.append(book);
  }
}

/******************Display all books for first time *******************************/

displayAllBooks(localBooksData);

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
      displayAllBooks(localBooksData); // if user remove all filter
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
      displayAllBooks(localBooksData);
      break;
  }
}

/************************************************ SEARCH******************************************************/

function searchBooks() {
  var value = this.value;
  var valueLowerCase = value.toLowerCase();
  var arr = [];

  for (var i = 0; i < localBooksData.length; i++) {
    var titleLowerCase = localBooksData[i].title.toLowerCase();

    if (titleLowerCase.includes(valueLowerCase)) {
      arr.push(localBooksData[i]);
    }
  }
  console.log(arr);
  displayAllBooks(arr);
}

search.addEventListener("input", searchBooks);

/********************************************************arrow***************************************************/

var arrow = document.querySelector("#arrow");

function scrollToTop() {
  window.scrollTo(0, 0);
}

arrow.addEventListener("click", scrollToTop);

/********************************************************Slider**************************************************/

var sliderArr = localBooksData.slice(0, 10);
console.log(sliderArr);

function displaySlider() {
  var slider = document.getElementById("slider");
  var SliderContainer = document.createElement("div");
  SliderContainer.classList.add("book-card", "slide");
  SliderContainer.innerHTML = getCard(
    sliderArr[8].cover_image,
    sliderArr[8].title,
    sliderArr[8].author,
    sliderArr[8].price
  );
  slider.append(SliderContainer);
  var SliderContainer = document.createElement("div");
  SliderContainer.classList.add("book-card", "slide");
  SliderContainer.innerHTML = getCard(
    sliderArr[9].cover_image,
    sliderArr[9].title,
    sliderArr[9].author,
    sliderArr[9].price
  );
  slider.append(SliderContainer);
  for (var i = 0; i < sliderArr.length; i++) {
    var SliderContainer = document.createElement("div");
    SliderContainer.classList.add("book-card", "slide");
    SliderContainer.innerHTML = getCard(
      sliderArr[i].cover_image,
      sliderArr[i].title,
      sliderArr[i].author,
      sliderArr[i].price
    );
    slider.append(SliderContainer);
  }
  var SliderContainer = document.createElement("div");
  SliderContainer.classList.add("book-card", "slide");
  SliderContainer.innerHTML = getCard(
    sliderArr[0].cover_image,
    sliderArr[0].title,
    sliderArr[0].author,
    sliderArr[0].price
  );
  slider.append(SliderContainer);
  var SliderContainer = document.createElement("div");
  SliderContainer.classList.add("book-card", "slide");
  SliderContainer.innerHTML = getCard(
    sliderArr[1].cover_image,
    sliderArr[1].title,
    sliderArr[1].author,
    sliderArr[1].price
  );
  slider.append(SliderContainer);
}

// Use the provided displaySlider function
displaySlider();

let track = document.querySelector(".slider-track");
let prevBtn = document.querySelector(".slider-left-btn");
let nextBtn = document.querySelector(".slider-right-btn");

let currentIndex = 2; // Start at the first original slide (after duplicates)
const totalSlides = sliderArr.length; // Number of original slides
const slidesVisible = 3;
const slideWidth = 100 / slidesVisible;

// Adjust `#slider` to contain `.slider-track` and append slides there
const slider = document.getElementById("slider");
const sliderTrack = document.createElement("div");
sliderTrack.classList.add("slider-track");
slider.append(sliderTrack);

// Move slides from `#slider` to `.slider-track`
const slides = Array.from(slider.children).filter((child) =>
  child.classList.contains("slide")
);
slides.forEach((slide) => sliderTrack.appendChild(slide));

// Initialize slider position
function updateSlider() {
  const offset = -(currentIndex * slideWidth);
  sliderTrack.style.transition = "transform 0.3s ease-in-out";
  sliderTrack.style.transform = `translateX(${offset}%)`;
}

// Instant jump without animation
function jumpToIndex(index) {
  currentIndex = index;
  sliderTrack.style.transition = "none";
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Next Button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  updateSlider();
  if (currentIndex === totalSlides + 2) {
    setTimeout(() => jumpToIndex(2), 300); // Reset to the first original slide
  }
});

// Previous Button
prevBtn.addEventListener("click", () => {
  currentIndex--;
  updateSlider();
  if (currentIndex === 1) {
    setTimeout(() => jumpToIndex(totalSlides + 1), 300); // Reset to the last original slide
  }
});

// Initialize Slider
jumpToIndex(currentIndex);

/**************************************************logout**********************************************************/
// logout button
const logoutBtn = document.getElementById("logOut");
logoutBtn.addEventListener("click", () => {
  logout();
});

function logout() {
  try {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
  } catch (error) {
    console.error("Error during logout:", error);
  }
}
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
