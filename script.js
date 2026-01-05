let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartPanel = document.getElementById("cart-panel");
const cartBtn = document.getElementById("cart-btn");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotalSpan = document.getElementById("cart-total");
const cartCountSpan = document.getElementById("cart-count");

cartBtn.onclick = () => {
  cartPanel.classList.toggle("open");
};

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart();
}

function removeItem(name) {
  cart = cart.filter(i => i.name !== name);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} x${item.qty}</p>
      <button onclick="removeItem('${item.name}')">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
  });

  cartTotalSpan.textContent = total;
  cartCountSpan.textContent = count;
}

function checkout() {
  alert(
    "Checkout disabled.\n\n" +
    "Real payments require an adult (18+).\n" +
    "This cart system is fully functional."
  );
}

renderCart();
