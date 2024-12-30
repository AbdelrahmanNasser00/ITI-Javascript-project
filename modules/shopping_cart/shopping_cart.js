// document.addEventListener("DOMContentLoaded", function () {
//     var apiData = JSON.parse(localStorage.getItem("apiData"));
  
//     var users = JSON.parse(localStorage.getItem("users"));
  
//     var currentUser = JSON.parse(localStorage.getItem("currentUser"));
//     //   console.log(users);
//     //   console.log(currentUser);
  
//     var cUser;
//     var favouriteBooksIds = [];
  
//     var favouriteBooks = [];
  
//     for (var i = 0; i < users.length; i++) {
      
//       if (users[i].email === currentUser.email) {
//         cUser = users[i];
  
//       }
//     }
  
//     favouriteBooksIds = cUser.favBooks;
  
//   //   console.log(favouriteBooksIds)
  
//     if(favouriteBooksIds != null){
//       for(var i = 0; i<apiData.length;i++){
  
//           for(var j = 0; j<favouriteBooksIds.length;j++){
  
//               if(apiData[i].id == favouriteBooksIds[j]){
//                   favouriteBooks.push(apiData[i])
//               }
  
//           }
  
//       }
//     }
//     console.log(favouriteBooks);
//   var favDiv = document.getElementById("favDiv");
  
//   for (var i = 0; i < favouriteBooks.length; i++) {
//       var item = document.createElement("section");
//       item.classList = i % 2 === 0 ? "item item1" : "item item2";
//       favDiv.appendChild(item);
  
//       var imgDiv = document.createElement("section");
//       imgDiv.id = "imgDiv";
//       item.appendChild(imgDiv);
  
//       var img = document.createElement("img");
//       img.src = favouriteBooks[i].cover_image;
//       imgDiv.appendChild(img);
  
//       var itemInfo = document.createElement("section");
//       itemInfo.id = "itemInfo";
//       item.appendChild(itemInfo);
  
//       var title = document.createElement("h2");
//       title.innerText = favouriteBooks[i].title;
//       title.id = "title";
//       itemInfo.appendChild(title);
  
//       var author = document.createElement("p");
//       author.innerText = favouriteBooks[i].author;
//       author.id = "author";
//       itemInfo.appendChild(author);
  
//       var description = document.createElement("p");
//       description.innerText = favouriteBooks[i].description;
//       description.id = "description";
//       itemInfo.appendChild(description);
  
//       var price = document.createElement("h3");
//       price.innerText = favouriteBooks[i].price;
//       price.id = "price";
//       itemInfo.appendChild(price);
  
  
  
//       // Use a block scope to preserve the correct `i` value
//       (function(book) {
//           var goToItem = document.createElement("button");
//           goToItem.innerText = "Go to Item";
//           goToItem.id = "goToItem";
  
  
//           goToItem.addEventListener("click", function() {
//               console.log('clicked');
//               window.location.href = "../product_page/product_page.html?id=" + book.id;
//           });
  
//           itemInfo.appendChild(goToItem);
//       })(favouriteBooks[i]);
      
//   }
  
  
//   });
  
  