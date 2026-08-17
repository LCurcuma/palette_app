//global variables
let colorsNumbers = document.getElementById("color_amount").value;
let colorsNumbersCont = document.getElementById("color_amount");
let colors = document.getElementById("generated_colors");
let errorText = document.getElementById("error_text");
let generateBTN = document.getElementById("generate");
let colorTiles = document.getElementsByClassName("color");
let amountOfColors = document.getElementsByClassName("color").length;
let colorCodes = [];

//number of the colors
colorsNumbersCont.addEventListener("input", () => {
  colorsNumbers = document.getElementById("color_amount").value;
  if (colorsNumbers > 3 && colorsNumbers <= 16) {
    errorText.innerHTML = "";
    colors.innerHTML = "";
    colorCodes = [];
    for (i = 0; i < colorsNumbers; i++) {
      let color = document.createElement("div");
      let colorLock = document.createElement("i");
      let colorText = document.createElement("p");
      let r = getRandomColor();
      let g = getRandomColor();
      let b = getRandomColor();
      let HEX = rgbToHex((r = r), (g = g), (b = b));

      color.classList.add("color");
      color.setAttribute("id", "color" + i);
      color.setAttribute("style", `background: rgb(${r}, ${g}, ${b});;`);
      colorLock.classList.add("fa-solid");
      colorLock.classList.add("fa-unlock");
      colorLock.setAttribute("id", "lock" + i);
      colorText.classList.add("color_text");
      colorText.innerText = HEX;
      colorText.setAttribute("id", "code" + i);

      colors.appendChild(color);
      color.appendChild(colorLock);
      color.appendChild(colorText);
      colorCodes.push({ red: r, green: g, blue: b });
    }

    amountOfColors = document.getElementsByClassName("color").length;
  } else if (colorsNumbers <= 3) {
    errorText.innerHTML = "";
    colors.innerHTML = "";
    colorCodes = [];

    let error = document.createElement("p");
    error.innerText = "Значение не может быть меньше 4";
    errorText.appendChild(error);
    amountOfColors = document.getElementsByClassName("color").length;
  } else {
    errorText.innerHTML = "";
    colors.innerHTML = "";
    colorCodes = [];

    let error = document.createElement("p");
    error.innerText = "Значение не может быть больше 16";
    errorText.appendChild(error);
    amountOfColors = document.getElementsByClassName("color").length;
  }
});

//generate colors
generateBTN.addEventListener("click", () => {
  errorText.innerHTML = "";
  colors.innerHTML = "";
  colorCodes = [];
  for (i = 0; i < amountOfColors; i++) {
    let color = document.createElement("div");
    let colorLock = document.createElement("i");
    let colorText = document.createElement("p");
    let r = getRandomColor();
    let g = getRandomColor();
    let b = getRandomColor();
    let HEX = rgbToHex((r = r), (g = g), (b = b));

    color.classList.add("color");
    color.setAttribute("id", "color" + i);
    color.setAttribute("style", `background: rgb(${r}, ${g}, ${b});`);
    colorLock.classList.add("fa-solid");
    colorLock.classList.add("fa-unlock");
    colorLock.setAttribute("id", "lock" + i);
    colorText.classList.add("color_text");
    colorText.innerText = HEX;
    colorText.setAttribute("id", "code" + i);

    colors.appendChild(color);
    color.appendChild(colorLock);
    color.appendChild(colorText);
    colorCodes.push({ red: r, green: g, blue: b });
  }
});

function getRandomColor() {
  let number = Math.floor(Math.random() * 255);
  return number;
}

//rgb to HEX converter
// Source - https://stackoverflow.com/a/5624139
// Posted by Tim Down, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-17, License - CC BY-SA 4.0
//yes-yes, took it from stackoverflow

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
