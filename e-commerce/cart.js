import { getProductById, checkStock } from "./products.js";
let cartItems = [];
function addToCart(productId, quantity) {
  let det = getProductById(productId);
  if (!det) {
    return "Product not found";
  }
  if (!checkStock(productId, quantity)) {
    return "Quantity not sufficient";
  }
  let incart = cartItems.find((cart) => cart.id === productId);
  if (incart) {
    incart.quantity += quantity;
  } else {
    cartItems.push({
      id: det.id,
      name: det.name,
      price: det.price,
      quantity: quantity,
      category: det.category,
    });
  }
  return "success";
}

function removeFromCart(productId) {
  let index = cartItems.findIndex((cart) => cart.id === productId);
  if (index) {
    cartItems.splice(index, 1);
    return "success";
  } else {
    return "not found";
  }
}
function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) {
    return "product not found";
  } else {
    for (let items of cartItems) {
      if (items.id === productId) {
        items.quantity = newQuantity;
        break;
      }
    }
  }
  return "success";
}
function getCartItems() {
  return cartItems;
}
function getCartTotal() {
  let total = cartItems.reduce(
    (acc, cart) => acc + cart.quantity * cart.price,
    0,
  );
  return total;
}
function clearCart() {
  cartItems = [];
  return "cart cleared";
}

export {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart,
  cartItems,
};
