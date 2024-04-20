/// ************ products object************///

const products = [
  {
    id: 0,
    SRC: "/src/image/pexels-lisa-fotios-1750564.jpg",
    price: 400,
    isLiked: false,
    count: 0,
    name: "addidasNemeziz",
  },
  {
    id: 1,
    SRC: "/src/image/pexels-adrian-dorobantu-2300334.jpg",
    price: 600,
    isLiked: false,
    count: 0,
    name: "adiddasNew",
  },
  {
    id: 2,
    SRC: "/src/image/pexels-nagy-szabi-4066968.jpg",
    price: 2200,
    isLiked: false,
    count: 0,
    name: "addidasAnimal",
  },
  {
    id: 3,
    SRC: "/src/image/pexels-nagy-szabi-4066968.jpg",
    price: 2200,
    isLiked: false,
    count: 0,
    name: "addidasX12",
  },
];
const nikeProducts = [
  {
    id: 0,
    SRC: "/src/image/nike/nike0.png",
    price: 367,
    isLiked: false,
    count: 0,
    name: "nikeTempo",
  },
  {
    id: 1,
    SRC: "/src/image/nike/nike1.png",
    price: 1337,
    isLiked: false,
    count: 0,
    name: "nikeMercurial",
  },
  {
    id: 2,
    SRC: "/src/image/nike/nike2.png",
    price: 672,
    isLiked: false,
    count: 0,
    name: "nikeZooma",
  },
  {
    id: 3,
    SRC: "/src/image/nike/nike3.png",
    price: 1247,
    isLiked: false,
    count: 0,
    name: "nikeParallex",
  },
];
/// ************make products ************///
let secc = document.querySelector(".seccc");
products.forEach((e) => {
  secc.insertAdjacentHTML(
    "afterbegin",
    '<div class="main__products"><div class="products__container"><div class="product"><img class="product__image" src="' +
      e.SRC +
      '" alt="shoe"><div class="like"> <i class="fas fa-heart heart"></i></div><span class="price">' +
      e.price +
      '$</span><p class="product__caption">' +
      e.name +
      '</p><div class="calculator"><button onclick="addidas(this)" id="' +
      e.id +
      '" class="minus">-</button><input type="text" class="count" readonly><button onclick="addidas(this)" id="' +
      e.id +
      '" class="plus">+</button></div><button class="send" onclick="sendTocart(' +
      e.id +
      ')">send</button></div></div></div>'
  );
});

/// ************Shoping cart ************///
let shopingCart = [];
/// ************finish shoping cart ************///

function sendTocart(el) {
  let choice = products.findIndex((e) => {
    return e.id === el;
  });
  if (products[choice].count) {
    shopingCart.push(products[choice]);
    alert(`you chise ${products[choice].name} adedd  to shoping cart`);
    localStorage.setItem("items",JSON.stringify(shopingCart))
  } else {
    alert("please choice one of any ");
  }
}
function sendTocartSeccond(el) {
  let choice = nikeProducts.findIndex((e) => {
    return e.id === el;
  });
  if (nikeProducts[choice].count) {
    shopingCart.push(nikeProducts[choice]);
    alert(`you chise ${nikeProducts[choice].name} adedd  to shoping cart`);
    localStorage.setItem("items",JSON.stringify(shopingCart))

  } else {
    alert("please choice one of any ");
  }

}
nikeProducts.forEach((e) => {
  let nike = document.querySelector(".nike");
  nike.insertAdjacentHTML(
    "afterbegin",
    '<div class="main__products"><div class="products__container"><div class="product"><img class="product__image" src="' +
      e.SRC +
      '" alt="shoe"><div class="like"> <i class="fas fa-heart heart" onclick="liker(this,'+e.id+')"></i></div><span class="price">' +
      e.price +
      '$</span><p class="product__caption">' +
      e.name +
      '</p><div class="calculator"><button onclick="nike(this)" id="' +
      e.id +
      '" class="minus">-</button><input type="text" class="count" readonly><button id="' +
      e.id +
      '" onclick="nike(this)" class="plus">+</button></div><button  class="send" onclick="sendTocartSeccond(' +
      e.id +
      ')">send</button></div></div></div>'
  );
});
/// ************count products ************///
let counter = 0;
function addidas(e) {
  if (e.textContent === "+") {
    products[e.id].count++;
    e.previousSibling.value = products[e.id].count;
  } else {
    products[e.id].count && products[e.id].count--;
    e.nextSibling.value = products[e.id].count;
  }
}

function nike(e) {
  console.log(nikeProducts[e.id]);

  if (e.textContent === "+") {
    nikeProducts[e.id].count++;
    e.previousSibling.value = nikeProducts[e.id].count;
  } else {
    nikeProducts[e.id].count && nikeProducts[e.id].count--;
    e.nextSibling.value = nikeProducts[e.id].count;
  }
}
/// ************count products finish************///
/// ************finish maker products ************///

/// ************ products object finish************///

/// ************make darkmode side bar************///
const darkMode_btn = document.querySelector(".dark-mode__container");
const darkMode_circle = document.querySelector(".circle");

darkMode_btn.addEventListener("click", () => {
  darkMode_circle.classList.toggle("circle__right");
});

/// ************make darkmode side bar finish************///

/// ************make darkmode top bar************///
const on_offer = document.querySelector(".on-off");
const top_menu_darkmode_handler = document.querySelector(".dark-mode");
top_menu_darkmode_handler.addEventListener("click", () => {
  on_offer.textContent === "ON"
    ? (on_offer.textContent = "OFF")
    : (on_offer.textContent = "ON");
});
/// ************make darkmode top bar finish************///

/// ************side bar lefter************///
const main_sideBar = document.querySelector(".side-bar__container");
const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("click", () => {
  main_sideBar.classList.toggle("left");
});
/// ************side bar lefter finish************///

/// ************like products ************///

const productImage = document.querySelector(".product__image");
const Heart = document.querySelector(".heart");

Heart.addEventListener("click", (e) => {
  // productImage.src = products[2].SRC;
  console.log(e);
});

function liker(el,dl) {
  nikeProducts[dl].isLiked = !nikeProducts[dl].isLiked;
if (nikeProducts[dl].isLiked) {
  el.classList.add("red-heart")
  
}else{
  el.classList.remove("red-heart")

}

/// ************like products finish ************///

}
let roader = document.getElementById('road');
let titr =document.getElementById('title');

roader.addEventListener("click",function (){
  window.open("../../shopingCart.html");
  
})