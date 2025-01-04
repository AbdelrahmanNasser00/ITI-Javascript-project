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
    link: "../categories/categories.html",
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

var currentUser =
  sessionStorage.getItem("currentUser") || localStorage.getItem("currentUser");
if (currentUser) {
  var email = JSON.parse(currentUser).email;
  var users = JSON.parse(localStorage.getItem("users"));

  //get orders
  var booksOrder;
  for (i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      booksOrder = users[i].purchasedBooks;
    }
  }
  console.log(booksOrder);

  if (booksOrder && booksOrder.length > 0) {
    //get books from localstorage #FCF7E6
    var books;
    books = JSON.parse(localStorage.getItem("apiData"));
    //get books from storage that match user order
    for (var i = 0; i < booksOrder.length; i++) {
      for (j = 0; j < books.length; j++) {
        if (booksOrder[i] == books[j].id) {
          console.log(books[0]);
          var container = document.getElementById("cart-page");
          container.style.margin = "0 0 120px 0";
          //cart element
          var cart = document.createElement("div");
          cart.style.backgroundColor = "#F9F1DD";
          cart.style.display = "flex";
          cart.style.flexWrap = "wrap";
          cart.style.margin = "30px 200px 10px 200px";
          cart.style.padding = "30px 30px";
          cart.style.boxShadow = "5px 5px 15px #C7C1B1";
          cart.style.borderRadius = "30px";
          cart.style.position = "relative";
          cart.setAttribute("class", "cart");
          //image element
          var imgDiv = document.createElement("div");
          var imgElm = document.createElement("img");
          imgElm.src = books[j].cover_image;
          imgElm.style.height = "150px";
          imgDiv.appendChild(imgElm);
          cart.appendChild(imgDiv);
          container.appendChild(imgDiv);
          //infodata element
          var infoDataDiv = document.createElement("div");
          infoDataDiv.style.position = "relative";
          infoDataDiv.style.width = "80%";
          infoDataDiv.setAttribute("id", "info-data");
          //title
          var titleDivElm = document.createElement("h3");
          titleDivElm.style.fontSize = "25px";
          titleDivElm.style.position = "absolute";
          titleDivElm.style.top = "10px";
          titleDivElm.style.left = "60px";
          var titleDivText = document.createTextNode(books[j].title);
          titleDivElm.appendChild(titleDivText);
          //author
          var authDivElm = document.createElement("div");
          authDivElm.style.position = "absolute";
          authDivElm.style.fontSize = "25px";
          authDivElm.style.top = "40px";
          authDivElm.style.left = "60px";
          var authDivText = document.createTextNode(books[j].author);
          authDivElm.appendChild(authDivText);
          //published
          var publishDivElm = document.createElement("div");
          publishDivElm.style.position = "absolute";
          publishDivElm.style.top = "80px";
          publishDivElm.style.left = "60px";
          var publishDivText = document.createTextNode(
            "published " + books[j].publication_year
          );
          publishDivElm.appendChild(publishDivText);
          infoDataDiv.appendChild(titleDivElm);
          infoDataDiv.appendChild(authDivElm);
          infoDataDiv.appendChild(publishDivElm);
          //price element
          var priceDivElm = document.createElement("div");
          priceDivElm.style.position = "absolute";
          priceDivElm.style.top = "20%";
          priceDivElm.style.left = "80%";
          priceDivElm.style.fontSize = "30px";
          var priceDivText = document.createTextNode(books[j].price + "   EGP");
          priceDivElm.appendChild(priceDivText);
          //Button delete
          button = document.createElement("button");
          button.textContent = "Delete";
          button.style.height = "50px";
          button.style.width = "200px";
          button.style.borderRadius = "50px";
          button.style.border = "0";
          button.style.position = "absolute";
          button.style.backgroundColor = "#000000";
          button.style.color = "#F9F1DD";
          button.style.top = "65%";
          button.style.left = "75%";
          button.setAttribute("data-id", booksOrder[i]);
          cart.appendChild(imgDiv);
          cart.appendChild(infoDataDiv);
          cart.appendChild(priceDivElm);
          cart.appendChild(button);
          container.appendChild(cart);

          //delete Item
          button.addEventListener("click", function () {
            var id = this.getAttribute("data-id");
            console.log(id);
            for (k = 0; k < booksOrder.length; k++) {
              if (booksOrder[k] == id) {
                booksOrder.splice(k, 1);
                for (l = 0; l < users.length; l++) {
                  if (users[l].email == email) {
                    users[l].purchasedBooks = booksOrder;
                    localStorage.setItem("users", JSON.stringify(users));
                    location.reload();
                  }
                }

                break;
              }
            }
          });
        }
      }
    }
  } else {
    var container = document.getElementById("cart-page");
    var emptyMessage = document.createElement("div");
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.fontSize = "24px";
    emptyMessage.style.marginTop = "250px";
    emptyMessage.style.marginBottom = "250px";
    emptyMessage.textContent = " No books have been purchased yet.";
    container.appendChild(emptyMessage);
  }
} else {
  var container = document.getElementById("cart-page");
  var emptyMessage = document.createElement("div");
  emptyMessage.style.textAlign = "center";
  emptyMessage.style.fontSize = "24px";
  emptyMessage.style.marginTop = "250px";
  emptyMessage.style.marginBottom = "250px";
  emptyMessage.textContent = " No books have been purchased yet.";
  container.appendChild(emptyMessage);
}
