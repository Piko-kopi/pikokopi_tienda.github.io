function pedirWhatsapp(nombre, precio) {
  const mensaje = `Hola 👋 quiero pedir: ${nombre} - Bs ${precio}`;
  const url = `https://wa.me/5917XXXXXXXX?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
