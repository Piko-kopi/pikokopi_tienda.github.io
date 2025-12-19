document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="/">Pikokopi</a>

    <div class="d-flex align-items-center">
      <a href="carrito.html" class="btn btn-outline-light position-relative">
        🛒
        <span id="cart-count"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </a>
    </div>
  </div>
</nav>
`;
