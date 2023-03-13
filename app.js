const data = [
  {
    id: 1,
    name: "FastRack Pro ",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 188,
    cat: "Luxury",
  },
  {
    id: 17,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 59,
    cat: "Casual",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
  {
    id: 6,
    name: "RARE Women's Synthetic Dress ",
    img: "https://m.media-amazon.com/images/I/71nWkTTddlL._UL1500_.jpg",
    price: 37,
    cat: "Dress",
  },
  {
    id: 7,
    name: "Dennis Lingo Men's Denim Shirt ",
    img: "https://m.media-amazon.com/images/I/41uTj4jAfaL.jpg",
    price: 52,
    cat: "Shirt",
  },
  {
    id: 8,
    name: "Dennis Men's Gray Denim Shirt ",
    img: "https://m.media-amazon.com/images/I/61UOZt077nL._UL1100_.jpg",
    price: 79,
    cat: "Shirt",
  },
  {
    id: 9,
    name: "Red Tape Men's Sports Running Shoes",
    img: "https://m.media-amazon.com/images/I/71dGYaE4omL._UL1500_.jpg",
    price: 270,
    cat: "Shoes",
  },
  {
    id: 10,
    name: "Neq Sandle For Boy's",
    img: "https://m.media-amazon.com/images/I/31dzTdBvN8L._SY300_SX300_.jpg",
    price: 124,
    cat: "Shoes",
  },
  {
    id: 11,
    name: "Varkala Silk Sarees Women's Banarasi ",
    img: "https://m.media-amazon.com/images/I/818VlOQzutL._UL1500_.jpg",
    price: 124,
    cat: "Sarees",
  },
  {
    id: 12,
    name: "Manohari Women's Heavy Sarees",
    img: "https://m.media-amazon.com/images/I/818VlOQzutL._UL1500_.jpg",
    price: 219,
    cat: "Sarees",
  },
  {
    id: 13,
    name: "oxolloxo Boom Navy Dobby Women Dress ",
    img: "https://m.media-amazon.com/images/I/61qFnvig7SL._UL1500_.jpg",
    price: 99,
    cat: "Dress",
  },
  {
    id: 14,
    name: "Luxury Chesterfield Sofa for Home Living Room",
    img: "https://m.media-amazon.com/images/I/71JkIqej5lL._SL1031_.jpg",
    price: 349,
    cat: "Luxury",
  },
  {
    id: 15,
    name: "Honor MagicBook X14",
    img: "https://m.media-amazon.com/images/I/71lSD111y0L._SL1500_.jpg",
    price: 253,
    cat: "Laptop",
  },
  {
    id: 16,
    name: "Macbook Pro",
    img: "https://m.media-amazon.com/images/I/71a0bMsxeLL._SL1500_.jpg",
    price: 649,
    cat: "Laptop",
  },
];

const productscontainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filterProducts) => {
  productscontainer.innerHTML = filterProducts
    .map(
      (product) => `
   <div class="product">
    <img
      src=${product.img}
      alt=""
      class="image"
    />
    <span class="name">${product.name}</span>
    <span class="price">$${product.price}</span>
  </div> 
    `
    )
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allcats = data.map((item) => item.cat);
  const categories = [
    "all",
    ...allcats.filter((item, i) => {
      return allcats.indexOf(item) === i;
    }),
  ];
  categoriesContainer.innerHTML = categories
    .map(
      (cat) => `
  <span class="cat">${cat}</span>
  `
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;

    selectedCat === "all"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;

    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrice();
