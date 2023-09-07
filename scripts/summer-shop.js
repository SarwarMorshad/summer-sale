const selectedProductsList = document.getElementById("selectedProductsList");
const couponCodeInput = document.getElementById("couponCode");
const applyCouponButton = document.getElementById("applyCoupon");
const totalPriceElement = document.getElementById("totalPrice");
const discountElement = document.getElementById("discount");
const totalElement = document.getElementById("finalPrice");
const purchaseButton = document.getElementById("purchaseButton");
const modal = document.getElementById("myModal");
const goHomeButton = document.getElementById("goHomeButton");

let selectedProducts = [];
let totalDiscount = 0;
let totalPrice = 0;

function updateTotalPrice() {
  totalPriceElement.textContent = totalPrice.toFixed(2);
  discountElement.textContent = totalDiscount.toFixed(2);
  totalElement.textContent = (totalPrice - totalDiscount).toFixed(2);
}

function applyCoupon() {
  const couponCode = couponCodeInput.value;
  if (couponCode === "SELL200" && totalPrice >= 200) {
    totalDiscount = totalPrice * 0.2;
    updateTotalPrice();
    couponCodeInput.value = "";
  } else {
    alert("Invalid coupon code or total price below 200 .");
  }
}

applyCouponButton.addEventListener("click", applyCoupon);

const products = document.querySelectorAll(".product");

products.forEach((product) => {
  product.addEventListener("click", () => {
    const productName = product.getAttribute("data-name");
    const productPrice = parseFloat(product.getAttribute("data-price"));

    selectedProducts.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateTotalPrice();

    const listItem = document.createElement("li");
    listItem.setAttribute("type", "1");
    listItem.style.marginLeft = "20px";
    listItem.textContent = productName;
    selectedProductsList.appendChild(listItem);

    applyCouponButton.disabled = false;
    purchaseButton.disabled = false;
  });
});
