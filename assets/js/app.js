const contenedor = document.getElementById("productos-container");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card h-100">
        <img src="${p.imagen}" class="card-img-top">
        <div class="card-body">
          <h5>${p.nombre}</h5>
          <p>Bs ${p.precio}</p>
          <button class="btn btn-success w-100"
            onclick="pedirWhatsapp('${p.nombre}', ${p.precio})">
            Pedir por WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;
});
