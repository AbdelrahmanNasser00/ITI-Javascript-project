document.addEventListener("DOMContentLoaded", function () {
  var id = new URLSearchParams(window.location.search).get("id");

  var apiData = JSON.parse(localStorage.getItem("apiData"));

  var addToCardSection = document.getElementById("addToCardSection");

  for (var book of apiData) {
    if (book.id == id) {
      var mainContent = document.getElementById("main-content");

      var bookImageSect = document.createElement("section");

      bookImageSect.id = "bookImageSect";

      bookImageSect.innerHTML = `
                <div id="imgBorder">
                    <img id="bookImage" src="${book.cover_image}" alt="Book Image">
                </div>
            `;

      const bookInfo = document.createElement("section");
      bookInfo.id = "bookInfo";
      bookInfo.innerHTML = `
    <h2 id="title">${book.title}</h2>
    <p id="author">${book.author}</p>
    <p id="description">${book.description}</p>
    <h2 id="price">$${book.price}</h2>
    <div id="tags">
        <span class="tag">Year: ${book.publication_year}</span>
        ${book.genre.map((g) => `<span class="tag">${g}</span>`).join(" ")}
    </div>
    <button title="add to favourite" id="wishlistButton"><i class="fas fa-heart"></i> </button>
    <button id="addToCard"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
`;

      var addToCardImg = document.getElementById("addToCardImg");
      addToCardImg.src = book.cover_image;

      var addToCardTitle = document.getElementById("addToCardTitle");
      addToCardTitle.innerHTML = book.title;

      var authorName = document.getElementById("authorName");
      authorName.innerHTML = book.author;

      var addToCardPrice = document.getElementById("addToCardPrice");
      addToCardPrice.innerHTML = `Hardcover|${book.price}|Qty: 1`;

      var conShopping = document.getElementById("contShop");

      var styleSheet = document.styleSheets[0];
      var keyframes2 = `
      @keyframes anim2 {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    `;
      conShopping.addEventListener("click", function () {
        styleSheet.insertRule(keyframes2, styleSheet.cssRules.length);
        addToCardSection.style.animationName = "anim2";
        addToCardSection.style.animationDuration = "1s";
        addToCardSection.style.animationFillMode = "forwards";
      });

      mainContent.appendChild(bookImageSect);
      mainContent.appendChild(bookInfo);
    }
  }
  const wishlistButton = document.getElementById("wishlistButton");

  wishlistButton.addEventListener("click", () => {
    wishlistButton.style.color = "red";
  });

  // Recommended Books Section
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function getRandomBooks(arr, numBooks) {
    shuffleArray(arr);
    return arr.slice(0, numBooks);
  }

  const recommendedBooks = getRandomBooks(apiData, 5);

  const recommendedSection = document.getElementById("recommended-section");

  const recommendTitle = document.createElement("h2");

  recommendTitle.id = "recommend";

  recommendTitle.textContent = "We Also Recommend";

  recommendedSection.appendChild(recommendTitle);

  const recommendedDiv = document.createElement("div");

  recommendedDiv.id = "recommended";

  recommendedBooks.forEach((book) => {
    var item = document.createElement("div");
    item.setAttribute("data-id", book.id);

    item.classList.add("item");

    item.innerHTML = `
            <img src="${book.cover_image}" alt="${book.title}" class="book-img">
            <h3 class="book-name">${book.title}</h3>
            <h4 class="book-author">${book.author}</h4>
            
        `;
    item.addEventListener("click", function () {
      console.log("clicked");
      (window.location.href = "product_page.html?id=" + book.id), "target";
    });
    recommendedDiv.appendChild(item);
  });

  recommendedSection.appendChild(recommendedDiv);

  // Image Hover Effect
  var bookImg = document.getElementById("bookImage");

  bookImg.addEventListener("mouseover", () => {
    var width = parseInt(bookImg.width);
    var height = parseInt(bookImg.height);
    bookImg.width = width + 10;
    bookImg.height = height + 10;
  });

  bookImg.addEventListener("mouseleave", () => {
    var width = parseInt(bookImg.width);
    var height = parseInt(bookImg.height);
    bookImg.width = width - 10;
    bookImg.height = height - 10;
  });

  var keyframes = `
  @keyframes anim1 {
     from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;

  var addToCart = document.getElementById("addToCard");

  addToCart.addEventListener("click", () => {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    addToCardSection.style.animationName = "anim1";

    addToCardSection.style.animationDuration = "1s";

    addToCardSection.style.animationFillMode = "forwards";
  });
});
