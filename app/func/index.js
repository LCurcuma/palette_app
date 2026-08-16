let colorsNumbers = document.getElementById("color_amount").value;
let colorsNumbersCont = document.getElementById("color_amount");
let colors = document.getElementById("generated_colors");
let errorText = document.getElementById("error_text");

colorsNumbersCont.addEventListener("input", () => {
  colorsNumbers = document.getElementById("color_amount").value;
    if (colorsNumbers > 3 && colorsNumbers <= 16) {
    errorText.innerHTML = "";
    colors.innerHTML = "";
    for (i = 0; i < colorsNumbers; i++) {
      let color = document.createElement("div");
      let colorLock = document.createElement("i");
      let colorText = document.createElement("p");

      color.classList.add("color");
      color.setAttribute("id", "color" + i);
      colorLock.classList.add("fa-solid");
      colorLock.classList.add("fa-unlock");
      colorText.classList.add("color_text");
      colorText.innerText = "#000000";

      colors.appendChild(color);
      color.appendChild(colorLock);
      color.appendChild(colorText);
    }
  } else if (colorsNumbers <= 3) {
    errorText.innerHTML = "";
    colors.innerHTML = "";

    let error = document.createElement("p");
    error.innerText = "Значение не может быть меньше 4";
    errorText.appendChild(error);
  }
});
