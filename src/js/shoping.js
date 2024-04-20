let anw = localStorage.getItem("items");
var itemqty = JSON.parse(localStorage.getItem("items"));
console.log(itemqty);
itemqty.forEach((e) => {
  let shops = document.querySelector(".shops");
  shops.insertAdjacentHTML(
    "afterbegin",
    '<div class="main__products-shop"><div class="products__container-shop"><div class="product-shop"><img class="product__image-shop" src="' +
      e.SRC +
      '" alt="shoe"><p>*'+e.count+'</p><p>'+e.price+'$</p><p class="product__caption-shop">' +
      e.name +
      "</p> </div></div> "
  );
});
let totalprice = document.querySelector('.totalprice');
let productPrice = 0;
itemqty.forEach(e=>{
    productPrice=productPrice+e.price*e.count;
    totalprice.textContent="total price :"+productPrice;
})
console.log(productPrice);

 