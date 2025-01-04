/*********************************tha data that not found in api ***************************************/

import { getCard } from "../modules/shared.js";

const bookCovers = [
  {
    title: "To Kill a Mockingbird",
    image:
      "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
  },
  { title: "1984", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  {
    title: "Pride and Prejudice",
    image:
      "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/p/r/pride_and_prejudice_cover_p36000_web.jpg",
  },
  {
    title: "The Great Gatsby",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
  },
  {
    title: "Moby-Dick",
    image:
      "https://covers.storytel.com/jpg-640/9780739632215.239da4bf-996f-4d57-a51c-738d532ed22e?optimize=high&quality=70&width=600",
  },
  {
    title: "The Lord of the Rings",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057098.jpg",
  },
  {
    title: "The Catcher in the Rye",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg",
  },
  {
    title: "The Hobbit",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg",
  },
  {
    title: "One Hundred Years of Solitude",
    image: "https://covers.openlibrary.org/b/id/8228760-L.jpg",
  },
  {
    title: "War and Peace",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800555-229x300.jpg",
  },
  {
    title: "The Odyssey",
    image: "https://covers.openlibrary.org/b/id/8228786-L.jpg",
  },
  {
    title: "The Divine Comedy",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800432.jpg",
  },
  {
    title: "The Brothers Karamazov",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg",
  },
  {
    title: "Crime and Punishment",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg",
  },
  {
    title: "The Picture of Dorian Gray",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/10/9789778800395.jpg",
  },
  {
    title: "Brave New World",
    image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg",
  },
  {
    title: "The Count of Monte Cristo",
    image: "https://covers.openlibrary.org/b/id/8228846-L.jpg",
  },
  {
    title: "Anna Karenina",
    image:
      "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg",
  },
  {
    title: "The Alchemist",
    image: "https://covers.openlibrary.org/b/id/8228861-L.jpg",
  },
  {
    title: "The Adventures of Huckleberry Finn",
    image: "https://covers.openlibrary.org/b/id/8228874-L.jpg",
  },
  {
    title: "The Iliad",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg",
  },
  {
    title: "Don Quixote",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056923.jpg",
  },
  {
    title: "Frankenstein",
    image: "https://covers.openlibrary.org/b/id/8228903-L.jpg",
  },
  {
    title: "Alice's Adventures in Wonderland",
    image: "https://covers.openlibrary.org/b/id/8228910-L.jpg",
  },
  {
    title: "The Little Prince",
    image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800364.jpg",
  },
  {
    title: "The Book Thief",
    image:
      "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg",
  },
  {
    title: "Slaughterhouse-Five",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg",
  },
  {
    title: "The Grapes of Wrath",
    image: "https://covers.openlibrary.org/b/id/8228950-L.jpg",
  },
  {
    title: "Fahrenheit 451",
    image: "https://covers.openlibrary.org/b/id/8228965-L.jpg",
  },
  {
    title: "The Lord of the Flies",
    image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    image: "https://covers.openlibrary.org/b/id/8228981-L.jpg",
  },
  {
    title: "A Tale of Two Cities",
    image: "https://covers.openlibrary.org/b/id/8228993-L.jpg",
  },
  {
    title: "The Chronicles of Narnia",
    image: "https://covers.openlibrary.org/b/id/8229007-L.jpg",
  },
  {
    title: "The Handmaid's Tale",
    image: "https://covers.openlibrary.org/b/id/8229014-L.jpg",
  },
  {
    title: "The Name of the Rose",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057135.jpg",
  },
  {
    title: "The Trial",
    image: "https://covers.openlibrary.org/b/id/8229030-L.jpg",
  },
  {
    title: "The Kite Runner",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/10/9789778800395.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056893.jpg",
  },
  {
    title: "1984",
    image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800364.jpg",
  },
  {
    title: "The Great Gatsby",
    image:
      "https://ih1.redbubble.net/image.5107592605.3195/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    title: "The Hobbit",
    image: "https://covers.openlibrary.org/b/id/8138460-L.jpg",
  },
  {
    title: "War and Peace",
    image:
      "https://www.accartbooks.com/app/uploads/books/9788854420564-04-2-600x819.jpg",
  },
  {
    title: "Brave New World",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010056923.jpg",
  },
  {
    title: "The Odyssey",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800432.jpg",
  },
  {
    title: "The Brothers Karamazov",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/12/9789778800555-229x300.jpg",
  },
  {
    title: "The Alchemist",
    image: "https://covers.openlibrary.org/b/id/8228861-L.jpg",
  },
  {
    title: "Frankenstein",
    image: "https://covers.openlibrary.org/b/id/8228903-L.jpg",
  },
  {
    title: "The Picture of Dorian Gray",
    image: "https://diwanegypt.com/wp-content/uploads/2024/10/978977800401.jpg",
  },
  {
    title: "Anna Karenina",
    image:
      "https://diwanegypt.com/wp-content/uploads/2024/11/9786010057173.jpg",
  },
  {
    title: "Don Quixote",
    image:
      "https://ih1.redbubble.net/image.5107592605.3195/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
];

/************************ Fetch data from api ****************************/

if (!localStorage.getItem("apiData")) {
  var xhr = new XMLHttpRequest();

  var apiUrl = "https://freetestapi.com/api/v1/books";
  var proxyUrl = "https://api.allorigins.win/get?url=";

  xhr.open("Get", proxyUrl + apiUrl, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      var allData = JSON.parse(xhr.responseText);
      var booksDataContent = JSON.parse(allData.contents);

      function RandomPrice() {
        return Math.floor(Math.random() * 81) + 20;
      }
      /***********************complete api *****************************/
      for (let i = 0; i < booksDataContent.length; i++) {
        booksDataContent[i].price = RandomPrice();
        booksDataContent[i].title = bookCovers[i].title;
        booksDataContent[i].cover_image = bookCovers[i].image;
      }
      booksDataContent.sort((a, b) => a.id - b.id);

      localStorage.setItem("apiData", JSON.stringify(booksDataContent));
    } else {
      console.log("error fetching data ", xhr.statusText);
    }
  };

  xhr.send();
}

var localBooksData = JSON.parse(localStorage.getItem("apiData"));

/********************************filter function ********************************************/

function sortByPriceAscending(booksData) {
  const sortedData = [...booksData];

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i].price > sortedData[j].price) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

export function sortBooksLowToHigh() {
  const sortedBooksAscending = sortByPriceAscending(localBooksData);

  var cards = document.getElementById("cards");
  for (let i = 0; i < localBooksData.length; i++) {
    var book = document.createElement("div");
    book.classList.add("book-card");
    book.innerHTML = getCard(
      sortedBooksAscending[i].cover_image,
      sortedBooksAscending[i].title,
      sortedBooksAscending[i].author,
      sortedBooksAscending[i].price
    );

    const bookId = sortedBooksAscending[i].id;
    if (bookId) {
      book.addEventListener("click", function () {
        // Ensure valid ID format for redirection
        window.location.href = `../modules/product_page/product_page.html?id=${bookId}`;
      });
    } else {
      console.warn(`No valid ID found for book: ${sortedBooksAscending[i].title}`);
    }

    cards.append(book);
  }
}

function sortByPriceDescending(booksData) {
  const sortedData = [...booksData];

  for (let i = 0; i < sortedData.length; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i].price < sortedData[j].price) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }

  return sortedData;
}

export function sortBooksHighToLow() {
  const sortedBooksDescending = sortByPriceDescending(localBooksData);
  var cards = document.getElementById("cards");
  for (let i = 0; i < localBooksData.length; i++) {
    var book = document.createElement("div");
    book.classList.add("book-card");
    book.innerHTML = getCard(
      sortedBooksDescending[i].cover_image,
      sortedBooksDescending[i].title,
      sortedBooksDescending[i].author,
      sortedBooksDescending[i].price
    );

    
    const bookId = sortedBooksDescending[i].id;
        if (bookId) {
          book.addEventListener("click", function () {
            // Ensure valid ID format for redirection
            window.location.href = `../modules/product_page/product_page.html?id=${bookId}`;
          });
        } else {
          console.warn(`No valid ID found for book: ${sortedBooksDescending[i].title}`);
        }

    cards.append(book);
  }
}
