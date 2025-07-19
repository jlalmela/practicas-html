window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  const cambiarImagen = () => {
    img1.style.opacity = "0";
    img2.style.opacity = "1";
  };

  document.body.addEventListener("click", cambiarImagen);
  document.body.addEventListener("touchstart", cambiarImagen, { once: true });
});
