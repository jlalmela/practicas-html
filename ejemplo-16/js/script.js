const header = document.querySelector("header");
const logo = document.querySelector("#logotipo");

header.addEventListener("click", function() {
  header.style.backgroundColor = "#ff0000";
});

logo.addEventListener("click", function() {
  header.style.backgroundColor = "#0000ff";
});