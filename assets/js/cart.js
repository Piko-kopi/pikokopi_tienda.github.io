let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-count");
  if (badge) badge.innerText = count;
}

function addToCart(id) {
  const producto = productos.find(p => p.id === id);
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...producto, quantity: 1 });
  }

  saveCart();
  alert("Producto agregado al carrito 🛒");
}

updateCartCount();
