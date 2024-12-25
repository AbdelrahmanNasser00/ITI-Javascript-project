

var xhr = new XMLHttpRequest();

var apiUrl="https://freetestapi.com/api/v1/books"
var proxyUrl = 'https://api.allorigins.win/get?url=';

xhr.open("Get",proxyUrl+apiUrl,true)

xhr.onload = function () {
  if(xhr.status >= 200 && xhr.status < 300){
    var allData = JSON.parse(xhr.responseText)

    var booksDataContent=JSON.parse(allData.contents)

    function RandomPrice() {
      return Math.floor(Math.random()*81)+20;
      }
      
    for (let i = 0; i < booksDataContent.length; i++) {
      booksDataContent[i].price=RandomPrice()
      
    }
  

    localStorage.setItem("apiData",JSON.stringify(booksDataContent))
    
  }else{
    console.log("error fetching data ",xhr.statusText);
  }
}

xhr.send()



var localBooksData = JSON.parse(localStorage.getItem("apiData"))
// console.log(localBooksData[0]);



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

const sortedBooksAscending = sortByPriceAscending(localBooksData);
// console.log(sortedBooksAscending); 


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

const sortedBooksDescending = sortByPriceDescending(localBooksData);
// console.log(sortedBooksDescending); 
 
