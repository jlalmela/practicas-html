window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".contenedor"); // Seleccionamos el contenedor
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  const alternarImagenes = () => {
    // Alterna la clase 'mostrar-img2' en el contenedor
    contenedor.classList.toggle("mostrar-img2");
  };

  // Escuchamos clics y toques en el contenedor para alternar las imágenes
  contenedor.addEventListener("click", alternarImagenes);
  // Para dispositivos táctiles, usamos 'touchstart' sin { once: true } si quieres que se pueda alternar varias veces
  contenedor.addEventListener("touchstart", alternarImagenes);
});