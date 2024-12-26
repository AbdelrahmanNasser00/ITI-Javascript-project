/****************************TO GET ALL BOOKS FROM LOCAL STORAGE********************************** */

var localBooksData = JSON.parse(localStorage.getItem("apiData"))

const bookCovers = [
  { title: "To Kill a Mockingbird", image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg" },
  { title: "1984", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { title: "Pride and Prejudice", image: "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/p/r/pride_and_prejudice_cover_p36000_web.jpg" },
  { title: "The Great Gatsby", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
  { title: "Moby-Dick", image: "https://covers.storytel.com/jpg-640/9780739632215.239da4bf-996f-4d57-a51c-738d532ed22e?optimize=high&quality=70&width=600" },
  { title: "The Lord of the Rings", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057098.jpg" },
  { title: "The Catcher in the Rye", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg" },
  { title: "The Hobbit", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg" },
  { title: "One Hundred Years of Solitude", image: "https://covers.openlibrary.org/b/id/8228760-L.jpg" },
  { title: "War and Peace", image: "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800555-229x300.jpg" },
  { title: "The Odyssey", image: "https://covers.openlibrary.org/b/id/8228786-L.jpg" },
  { title: "The Divine Comedy", image: "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800432.jpg" },
  { title: "The Brothers Karamazov", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg" },
  { title: "Crime and Punishment", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg" },
  { title: "The Picture of Dorian Gray", image: "https://diwanegypt.com/wp-content/uploads/2024/10/9789778800395.jpg" },
  { title: "Brave New World", image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg" },
  { title: "The Count of Monte Cristo", image: "https://covers.openlibrary.org/b/id/8228846-L.jpg" },
  { title: "Anna Karenina", image: "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg" },
  { title: "The Alchemist", image: "https://covers.openlibrary.org/b/id/8228861-L.jpg" },
  { title: "The Adventures of Huckleberry Finn", image: "https://covers.openlibrary.org/b/id/8228874-L.jpg" },
  { title: "The Iliad", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg" },
  { title: "Don Quixote", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056923.jpg" },
  { title: "Frankenstein", image: "https://covers.openlibrary.org/b/id/8228903-L.jpg" },
  { title: "Alice's Adventures in Wonderland", image: "https://covers.openlibrary.org/b/id/8228910-L.jpg" },
  { title: "The Little Prince", image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800364.jpg" },
  { title: "The Book Thief", image: "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg" },
  { title: "Slaughterhouse-Five", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg" },
  { title: "The Grapes of Wrath", image: "https://covers.openlibrary.org/b/id/8228950-L.jpg" },
  { title: "Fahrenheit 451", image: "https://covers.openlibrary.org/b/id/8228965-L.jpg" },
  { title: "The Lord of the Flies", image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg" },
  { title: "The Hitchhiker's Guide to the Galaxy", image: "https://covers.openlibrary.org/b/id/8228981-L.jpg" },
  { title: "A Tale of Two Cities", image: "https://covers.openlibrary.org/b/id/8228993-L.jpg" },
  { title: "The Chronicles of Narnia", image: "https://covers.openlibrary.org/b/id/8229007-L.jpg" },
  { title: "The Handmaid's Tale", image: "https://covers.openlibrary.org/b/id/8229014-L.jpg" },
  { title: "The Name of the Rose", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg" },
  { title: "The Trial", image: "https://covers.openlibrary.org/b/id/8229030-L.jpg" },
  { title: "The Kite Runner", image: "https://diwanegypt.com/wp-content/uploads/2024/10/9789778800395.jpg" },
  { title: "To Kill a Mockingbird", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg" },
  { title: "1984", image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800364.jpg" },
  { title: "The Great Gatsby", image: "https://ih1.redbubble.net/image.5107592605.3195/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" },
  { title: "The Hobbit", image: "https://covers.openlibrary.org/b/id/8138460-L.jpg" },
  { title: "War and Peace", image: "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg" },
  { title: "Brave New World", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056923.jpg" },
  { title: "The Odyssey", image: "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800432.jpg" },
  { title: "The Brothers Karamazov", image: "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800555-229x300.jpg" },
  { title: "The Alchemist", image: "https://covers.openlibrary.org/b/id/8228861-L.jpg" },
  { title: "Frankenstein", image: "https://covers.openlibrary.org/b/id/8228903-L.jpg" },
  { title: "The Picture of Dorian Gray", image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg" },
  { title: "Anna Karenina", image: "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg" },
  { title: "Don Quixote", image: "https://ih1.redbubble.net/image.5107592605.3195/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" }
];

// console.log(bookImageUrls.length)

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


/************************ CARDS***********************/

function getCard(img,name,author,price){
  return `
              <img src=${img} alt="" class="book-img">
              <h3 class="book-name">${name}</h3>
              <h4 class="book-auther">${author}</h4>
              <p class="book-price"><span class="pound">EGP </span>${price}</p>
  `
}

function displayBooks(){
  
  var cards=document.getElementById("cards");
  for(i=0;i<localBooksData.length;i++)
    {
      var book=document.createElement("div");
      book.classList.add("book-card");
      book.innerHTML=getCard(bookCovers[i].image,
        bookCovers[i].title,
        localBooksData[i].author,
        localBooksData[i].price);

      cards.append(book);

    }
  }

displayBooks()

/*********************************************************************************************** */

// logout button
function logout() {
  sessionStorage.removeItem("currentUser");
  localStorage.removeItem("currentUser");
}



