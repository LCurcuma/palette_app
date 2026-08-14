let colorsNumbers = document.getElementById("color_amount").value;
let colorsNumbersCont = document.getElementById("color_amount");

colorsNumbersCont.addEventListener("input", () => {
    colorsNumbers = document.getElementById("color_amount").value;
    console.log(colorsNumbers);
})
console.log(colorsNumbersCont);