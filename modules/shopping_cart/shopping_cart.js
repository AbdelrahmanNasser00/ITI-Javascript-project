document.addEventListener("DOMContentLoaded", function () {
    var apiData = JSON.parse(localStorage.getItem("apiData"));
  
    var users = JSON.parse(localStorage.getItem("users"));
  
    var currentUser = JSON.parse(sessionStorage.getItem("currentUser")) == null?JSON.parse(localStorage.getItem("currentUser")):JSON.parse(sessionStorage.getItem("currentUser"));

    
  
    var cUser;
    var addedToCardBooksIds = [];
  
    var addedToCardBooks = [];
  
    for (var i = 0; i < users.length; i++) {
      
      if (users[i].email === currentUser.email) {
        cUser = users[i];
  
      }
    }
  
    addedToCardBooksIds = cUser.addedToCard;
    // console.log(addedToCardBooksIds)
  
  //   console.log(favouriteBooksIds)
  
    if(addedToCardBooksIds != null){
      for(var i = 0; i<apiData.length;i++){
  
          for(var j = 0; j<addedToCardBooksIds.length;j++){
  
              if(apiData[i].id == addedToCardBooksIds[j]){
                addedToCardBooks.push(apiData[i])
              }
  
          }
  
      }
    }

    // console.log("addedToCardBooks");
    // console.log(addedToCardBooks);
  var favDiv = document.getElementById("shopCart");
  console.log(favDiv)
  for (var i = 0; i < addedToCardBooks.length; i++) {
      var item = document.createElement("section");
      item.classList = i % 2 === 0 ? "item item1" : "item item1";
      favDiv.appendChild(item);
  
      var imgDiv = document.createElement("section");
      imgDiv.id = "imgDiv";
      item.appendChild(imgDiv);
  
      var img = document.createElement("img");
      img.src = addedToCardBooks[i].cover_image;
      imgDiv.appendChild(img);
  
      var itemInfo = document.createElement("section");
      itemInfo.id = "itemInfo";
      item.appendChild(itemInfo);
  
      var title = document.createElement("h2");
      title.innerText = addedToCardBooks[i].title;
      title.id = "title";
      itemInfo.appendChild(title);
  
      var author = document.createElement("p");
      author.innerText = addedToCardBooks[i].author;
      author.id = "author";
      itemInfo.appendChild(author);
  
      var description = document.createElement("p");
      description.innerText = addedToCardBooks[i].description;
      description.id = "description";
      itemInfo.appendChild(description);
  
      var price = document.createElement("h3");
      price.innerText = addedToCardBooks[i].price;
      price.id = "price";
      itemInfo.appendChild(price);
  
  
  
      // Use a block scope to preserve the correct `i` value
      (function(book) {
          var goToItem = document.createElement("button");
          goToItem.innerText = "Go to Item";
          goToItem.id = "goToItem";
  
  
          goToItem.addEventListener("click", function() {
              console.log('clicked');
              window.location.href = "../product_page/product_page.html?id=" + book.id;
          });
  
          itemInfo.appendChild(goToItem);
      })(addedToCardBooks[i]);
      (function(book) {
          var addPaymentMethod = document.createElement("button");
          addPaymentMethod.innerText = "Add Payment Method";
          addPaymentMethod.id = "addPaymentMethod";
  
  
          addPaymentMethod.addEventListener("click",function(){
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
            console.log(users);

          })
  
          itemInfo.appendChild(addPaymentMethod);
      })(addedToCardBooks[i]);
      
  }
  
  
  });
  
  