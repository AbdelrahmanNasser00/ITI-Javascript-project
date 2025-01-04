var apiData = JSON.parse(localStorage.getItem("apiData"));
var users = JSON.parse(localStorage.getItem("users"));
var currentUser =
  JSON.parse(sessionStorage.getItem("currentUser")) == null
    ? JSON.parse(localStorage.getItem("currentUser"))
    : JSON.parse(sessionStorage.getItem("currentUser"));

var cUser;
var addedToCardBooksIds = [];
var addedToCardBooks = [];
var total = 0;


// Identify the current user
for (var i = 0; i < users.length; i++) {
  if (users[i].email === currentUser.email) {
    cUser = users[i];
  }
}

addedToCardBooksIds = cUser.addedToCard || [];

// Filter books in the shopping cart
if (addedToCardBooksIds.length > 0) {
  for (var i = 0; i < apiData.length; i++) {
    for (var j = 0; j < addedToCardBooksIds.length; j++) {
      if (apiData[i].id == addedToCardBooksIds[j]) {
        addedToCardBooks.push(apiData[i]);
      }
    }
  }
}

var favDiv = document.getElementById("shopCart");

// Render books in the shopping cart
addedToCardBooks.forEach((book, index) => {
  total+=Number(book.price)
  var item = document.createElement("section");
  item.classList = index % 2 === 0 ? "item item1" : "item item1";
  item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  favDiv.appendChild(item);

  var imgDiv = document.createElement("section");
  imgDiv.id = "imgDiv";
  item.appendChild(imgDiv);

  var img = document.createElement("img");
  img.src = book.cover_image;
  imgDiv.appendChild(img);

  var itemInfo = document.createElement("section");
  itemInfo.id = "itemInfo";
  item.appendChild(itemInfo);

  var title = document.createElement("h2");
  title.innerText = book.title;
  title.id = "title";
  itemInfo.appendChild(title);

  var author = document.createElement("p");
  author.innerText = book.author;
  author.id = "author";
  itemInfo.appendChild(author);

  var description = document.createElement("p");
  description.innerText = book.description;
  description.id = "description";
  itemInfo.appendChild(description);

  var price = document.createElement("h3");
    price.innerText = "EGP " + book.price;
    price.id = "price";
    itemInfo.appendChild(price);

  var goToItem = document.createElement("button");
  goToItem.innerText = "Go to Item";
  goToItem.id = "goToItem";
  goToItem.addEventListener("click", function () {
    window.location.href = "../product_page/product_page.html?id=" + book.id;
  });
  itemInfo.appendChild(goToItem);

  // Create Payment Method Button
var addPaymentMethod = document.createElement("button");
addPaymentMethod.innerText = "Add Payment Method";
addPaymentMethod.id = "addPaymentMethod";

// Display Payment Method Form
var paymentmethoddiv = document.getElementsByClassName('payment-method-div')[0];
addPaymentMethod.addEventListener("click", function () {
  paymentmethoddiv.style.opacity = "1";
  paymentmethoddiv.style.zIndex = "1";
});

// Append Payment Method Button
itemInfo.appendChild(addPaymentMethod);

// Add Card Form Submission
var addCardForm = document.getElementById("addCardForm");
addCardForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Update Purchased Books
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === currentUser.email) {
      if ("purchasedBooks" in users[i]) {
        users[i].purchasedBooks.push(book.id);
      } else {
        users[i].purchasedBooks = [book.id];
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));

  // Provide Feedback and Remove Item
  alert("Book added to purchased list.");
  setTimeout(() => {
    item.remove();
    updateTotal(book.price);
    updateCartData(book.id);
  }, 500);
  paymentmethoddiv.style.opacity = "0";
  paymentmethoddiv.style.zIndex = "-1";
});

// Delete Icon for Item
var deleteIcon = document.createElement("i");
deleteIcon.className = "fa-solid fa-trash delete-sicon";
Object.assign(deleteIcon.style, {
  cursor: "pointer",
  color: "red",
  fontSize: "20px",
  marginLeft: "10px",
  position: "absolute",
  top: "10px",
});

deleteIcon.addEventListener("click", function () {
  item.style.opacity = "0";
  item.style.transform = "scale(0.9)";

  setTimeout(() => {
    item.remove();
    updateTotal(book.price);
    updateCartData(book.id);
  }, 500);
});

// Append Delete Icon
item.appendChild(deleteIcon);

// Total Data Display


// Update Total Function
function updateTotal(price) {
  total -= price;
  totalData.innerText = "Total: " + total + " EGP";
}

// Update Cart Data Function
function updateCartData(bookId) {
  cUser.addedToCard = cUser.addedToCard.filter((val) => val != bookId);
  users = users.map((user) => {
    if (user.email === cUser.email) {
      user.addedToCard = cUser.addedToCard;
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(users));
}


})
var totalData = document.createElement("h3");
totalData.innerText = "Total: " + total + ".00 EGP";
Object.assign(totalData.style, {
  width: "100%",
  color: "#7f5539",
  padding: "15px 15px 5px",
  fontWeight: "bolder",
});
favDiv.appendChild(totalData);
// Back to Home Function
function backHome() {
  window.location.href = "../../index.html";
}