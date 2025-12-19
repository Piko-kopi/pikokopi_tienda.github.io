const contenedor = document.getElementById("productos-container");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card h-100">
        <img src="${p.imagen}" class="card-img-top">
        <div class="card-body">
          <h5>${p.nombre}</h5>
          <p>Bs ${p.precio}</p>
          <button class="btn btn-primary w-100"
            onclick="addToCart(${p.id})">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;
});
const categoriasContainer = document.getElementById("categorias-container");

if (categoriasContainer) {
  categorias.forEach(cat => {
    categoriasContainer.innerHTML += `
      <div class="text-center categoria-item">
        <div class="categoria-circle">
          <img src="${cat.imagen}" alt="${cat.nombre}">
        </div>
        <small class="categoria-text">${cat.nombre}</small>
      </div>
    `;
  });
}

