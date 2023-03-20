//Object property shorthand

const name = "Yash";
const age = 20;

const user = {
  name,
  age,
  location: "India",
};

// console.log(user);

//Object Destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 200,
  salePrice: undefined,
  rating: 4.3,
};

// const { label: productLabel, price, rating = 5 } = product;

// console.log(productLabel, price, rating);

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
