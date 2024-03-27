// Importar la biblioteca `qrcode.min.js`
const QRCode = require("qrcode.min");

// Generar el código QR para el DNI
const qrcode = new QRCode();
qrcode.addData("12345678A");
qrcode.setSize(150);
qrcode.render("qrcode.png");
