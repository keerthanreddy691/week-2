import { getCartTotal, cartItems } from "./cart.js";
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 10 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};
function validateCoupon(couponCode, getCartTotal, cartItems) {
  let total = getCartTotal();

  let coupon = coupons[couponCode];

  if (!coupon) {
    return false;
  }

  if (total < coupon.minAmount) {
    return false;
  }
  if (coupon.category === "electronics") {
    let hasElectronics = cartItems.some(
      (item) => item.category === "electronics",
    );

    if (!hasElectronics) {
      return;
      false;
    }
  }

  return true;
}
function calculateDiscount(couponCode, getCartTotal) {
  let total = getCartTotal();
  for (let coupuon in coupons) {
    if (coupuon === couponCode && coupons[coupuon].type === "percentage") {
      return total - (coupons[coupuon].value / 100) * total;
    } else if (coupuon === couponCode && coupons[coupuon].type === "flat") {
      return total - coupons[coupuon].value;
    }
  }
}
function applyDiscount(getCartTotal, couponCode, cartItems) {
  let amount = 0;
  if (validateCoupon(couponCode, getCartTotal, cartItems)) {
    let amount = calculateDiscount(couponCode, getCartTotal);
  }
  console.log(amount);
}
export { validateCoupon, calculateDiscount, applyDiscount };
