import { reduceStock } from "./products.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";

// TODO: Implement these functions

function processPayment(paymentMethod, couponCode = null) {
  let trolley = getCartItems();
  let trolley_total = getCartTotal(); // 2. Apply discount if coupon provided
  if (validatePaymentMethod(paymentMethod)) {
    console.log("Payment Processing");
    for (let stock of trolley) {
      console.log(reduceStock(stock.id, stock.quantity));
    }
  }
  let oredered = {
    orderId: generateOrderId(),
    items: trolley,
    total: trolley_total,
    paymentMethod: paymentMethod,
    status1: "success",
    message: "completeed shopping",
  };
  console.log(clearCart());
  return oredered;
}

function validatePaymentMethod(method) {
  if (method === "card" || method === "upi" || method === "cod") {
    return true;
  }
  return false;
}
function generateOrderId() {
  return "ORD" + Date.now();
}
console.log(processPayment("card", "FLAT500"));

export { processPayment, validatePaymentMethod, generateOrderId };
