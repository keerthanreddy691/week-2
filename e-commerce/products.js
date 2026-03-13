const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 25,
    category: "accessories",
  },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];
function getProductById(id) {
  let details = products.find((product) => product.id === id);
  if (!details) {
    return false;
  } else {
    return details;
  }
}

function getAllProducts() {
  let things = products.map((product) => product);
  return things;
}
function getProductsByCategory(category) {
  let devices = products.filter((product) => {
    if (product.category === category) {
      return product;
    }
  });
  if (!devices) {
    return "not found";
  } else {
    return devices;
  }
}
function searchProducts(query) {
  let data = products.find((product) => {
    if (product.name === query) {
      return product;
    }
  });
  if (!data) {
    return "nope";
  } else {
    return data;
  }
}
function checkStock(productId, quantity) {
  let device = products.find((product) => product.id === productId);
  if (!device) {
    return false;
  } else {
    if (device.stock < quantity) {
      return false;
    }
    return true;
  }
}
function reduceStock(productId, quantity) {
  for (let product of products) {
    if (product.id === productId) {
      product.stock -= quantity;
      return "reduced";
    }
  }
  return "failed to reduce quantity";
}
export {
  products,
  getProductById,
  getAllProducts,
  getProductsByCategory,
  searchProducts,
  checkStock,
  reduceStock,
};
