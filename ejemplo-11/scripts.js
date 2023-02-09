var image = document.getElementById("imagen1");

image.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

var image2 = document.getElementById("imagen2");

image2.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

var body = document.getElementById("body");
body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
