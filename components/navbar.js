document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">

    <!-- LOGO IZQUIERDA -->
    <a class="navbar-brand fw-bold" href="index.html">
      Pikokopi
    </a>

    <!-- BOTÓN MÓVIL -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarPikokopi">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- MENÚ CENTRO -->
    <div class="collapse navbar-collapse justify-content-center" id="navbarPikokopi">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="categorias.html">Categorías</a>
        </li>
      </ul>
    </div>

    <!-- CARRITO DERECHA -->
    <div class="d-flex">
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
