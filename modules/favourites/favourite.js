document.addEventListener("DOMContentLoaded", function () {
  var apiData = JSON.parse(localStorage.getItem("apiData"));
  var users = JSON.parse(localStorage.getItem("users"));
  var currentUser = JSON.parse(sessionStorage.getItem("currentUser")) == null
    ? JSON.parse(localStorage.getItem("currentUser"))
    : JSON.parse(sessionStorage.getItem("currentUser"));

  var cUser;
  var favouriteBooksIds = [];
  var favouriteBooks = [];

  // Identify the current user
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === currentUser.email) {
      cUser = users[i];
    }
  }

  favouriteBooksIds = cUser.favBooks;

  // Filter favorite books
  if (favouriteBooksIds != null) {
    for (var i = 0; i < apiData.length; i++) {
      for (var j = 0; j < favouriteBooksIds.length; j++) {
        if (apiData[i].id == favouriteBooksIds[j]) {
          favouriteBooks.push(apiData[i]);
        }
      }
    }
  }

  console.log(favouriteBooks);

  var favDiv = document.getElementById("favDiv");

  // Create favorite books display
  for (var i = 0; i < favouriteBooks.length; i++) {
    var book = favouriteBooks[i];

    var item = document.createElement("section");
    item.classList = i % 2 === 0 ? "item item1" : "item item2";
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
    price.innerText = book.price;
    price.id = "price";
    itemInfo.appendChild(price);

    // "Go to Item" button
    var goToItem = document.createElement("button");
    goToItem.innerText = "Go to Item";
    goToItem.id = "goToItem";
    goToItem.addEventListener("click", function () {
      console.log("clicked");
      window.location.href = "../product_page/product_page.html?id=" + book.id;
    });
    itemInfo.appendChild(goToItem);

    // Add delete icon
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
        console.log(cUser)
        cUser.favBooks = cUser.favBooks.filter(favBookId => favBookId != book.id);
        console.log(cUser.favBooks)
        users = users.map(user => {
          if (users.email === cUser.email) {
            user.favBooks = cUser.favBooks;
          }
          return user;
        });
        localStorage.setItem("users", JSON.stringify(users));
        location.reload();

      }, 500);
    });

    item.appendChild(deleteIcon);
  }
});
