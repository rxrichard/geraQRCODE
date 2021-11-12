new QRCode(document.querySelector("#qrcode"), {
  text: "https://rxrichard.github.io",
  width: 300,
  height: 300,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
})