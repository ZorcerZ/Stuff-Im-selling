const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Mechanical Keyboard",
    price: 35,
    colors: [
      {
        code: "black",
        img: "./img/Pictek.png",
      },
      {
        code: "darkblue",
        img: "./img/Pictek.png",
      },
    ],
  },
  {
    id: 2,
    title: "Google Speaker",
    price: 60,
    colors: [
      {
        code: "lightgray",
        img: "./img/Googlenest(1).png",
      },
      {
        code: "green",
        img: "./img/Googlenest(1).png",
      },
    ],
  },
  {
    id: 3,
    title: "Oculus Quest 2",
    price: 250,
    colors: [
      {
        code: "lightgray",
        img: "./img/OculusQ2.png",
      },
      {
        code: "green",
        img: "./img/OculusQ2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Ps4 Pro",
    price: 0,
    colors: [
      {
        code: "black",
        img: "./img/Ps4proCM19.webp",
      },
      {
        code: "lightgray",
        img: "./img/Ps4ProCM19.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Nothing Yet",
    price: 0,
    colors: [
      {
        code: "gray",
        img: "./img/",
      },
      {
        code: "black",
        img: "./img/",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
