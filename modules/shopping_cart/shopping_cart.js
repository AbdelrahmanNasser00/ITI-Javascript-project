var apiData = JSON.parse(localStorage.getItem("apiData"));
var users = JSON.parse(localStorage.getItem("users"));
var currentUser =
  JSON.parse(sessionStorage.getItem("currentUser")) == null
    ? JSON.parse(localStorage.getItem("currentUser"))
    : JSON.parse(sessionStorage.getItem("currentUser"));

var cUser;
var addedToCardBooksIds = [];
var addedToCardBooks = [];

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

  var goToItem = document.createElement("button");
  goToItem.innerText = "Go to Item";
  goToItem.id = "goToItem";
  goToItem.addEventListener("click", function () {
    window.location.href = "../product_page/product_page.html?id=" + book.id;
  });
  itemInfo.appendChild(goToItem);

  var addPaymentMethod = document.createElement("button");
  addPaymentMethod.innerText = "Add Payment Method";
  addPaymentMethod.id = "addPaymentMethod";

  addPaymentMethod.addEventListener("click", function () {
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
    alert("Book added to purchased list.");
  });
  itemInfo.appendChild(addPaymentMethod);

  var deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash delete-sicon";
  deleteIcon.style.cursor = "pointer";
  deleteIcon.style.color = "red";
  deleteIcon.style.fontSize = "20px";
  deleteIcon.style.marginLeft = "10px";

  deleteIcon.addEventListener("click", function () {
    item.style.opacity = "0";
    item.style.transform = "scale(0.9)";
    setTimeout(() => {
      item.remove();
      cUser.addedToCard = cUser.addedToCard.filter((val) => val != book.id);
      users = users.map((user) => {
        if (user.email === cUser.email) {
          user.addedToCard = cUser.addedToCard;
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(users));
    }, 500);
  });

  item.appendChild(deleteIcon);
});
