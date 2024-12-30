var currentUser=sessionStorage.getItem('currentUser');
if(currentUser)
{
    var email=(JSON.parse(currentUser)).email;
    var userOrders=[{
    'email':email,
    'orders':[1,2,3,6,7,8,9,10,11]
}]
localStorage.setItem('orders',JSON.stringify(userOrders));
var orderData=JSON.parse(localStorage.getItem('orders'));
var booksOrder=[];
//get orders
for(var i=0;i< orderData.length;i++)
    {
        if(orderData[i].email==email)
        {
            booksOrder=orderData[i].orders;
        }
    }
    //get books from localstorage #FCF7E6
    var books;
    books=JSON.parse(localStorage.getItem('apiData'));
    //get books from storage that match user order
    for(var i=0;i<booksOrder.length;i++)
    {
        for(j=0;j<books.length;j++)
        {
            if(booksOrder[i]==books[j].id)
            {
                console.log(books[0]);
               var container=document.getElementById('cart-page');
               container.style.margin='0 0 40px 0';
                //cart element
               var cart=document.createElement('div');
               cart.style.backgroundColor='#F9F1DD';
               cart.style.display='flex';
               cart.style.margin='30px 200px 10px 200px';
               cart.style.padding='30px 30px';
               cart.style.boxShadow='5px 5px 15px #C7C1B1';
               cart.style.borderRadius='30px';
               cart.style.position='relative';
               cart.setAttribute('class','cart');
               //image element
                var imgDiv=document.createElement('div');
                var imgElm=document.createElement('img');
                imgElm.src=books[j].cover_image;
                imgElm.style.height='150px'
                imgDiv.appendChild(imgElm);
                cart.appendChild(imgDiv);
                container.appendChild(imgDiv);
                //infodata element
                var infoDataDiv=document.createElement('div');
                infoDataDiv.style.position='relative';
                infoDataDiv.style.width='80%'
                infoDataDiv.setAttribute('id','info-data');
                //title
                var titleDivElm=document.createElement('h3');
                titleDivElm.style.fontSize='25px';
                titleDivElm.style.position='absolute';
                titleDivElm.style.top='30px';
                titleDivElm.style.left='60px'
                var titleDivText=document.createTextNode(books[j].title);
                titleDivElm.appendChild(titleDivText);
                //author
                var authDivElm=document.createElement('div');
                authDivElm.style.position='absolute';
                authDivElm.style.fontSize='25px';
                authDivElm.style.top='60px';
                authDivElm.style.left='60px'
                var authDivText=document.createTextNode(books[j].author);
                authDivElm.appendChild(authDivText);
                //published
                var publishDivElm=document.createElement('div');
                publishDivElm.style.position='absolute';
                publishDivElm.style.top='100px';
                publishDivElm.style.left='60px'
                var publishDivText=document.createTextNode('published '+books[j].publication_year);
                publishDivElm.appendChild(publishDivText);
                infoDataDiv.appendChild(titleDivElm);
                infoDataDiv.appendChild(authDivElm);
                infoDataDiv.appendChild(publishDivElm);
                //price element
                var priceDivElm=document.createElement('div');
                priceDivElm.style.position='absolute';
                priceDivElm.style.top='40%';
                priceDivElm.style.left='80%';
                priceDivElm.style.fontSize='30px';
                var priceDivText=document.createTextNode(books[j].price+"   EGP");
                priceDivElm.appendChild(priceDivText);
                cart.appendChild(imgDiv)
                cart.appendChild(infoDataDiv);
                cart.appendChild(priceDivElm);
                container.appendChild(cart);
                        
            }
        }
    }

    

}

