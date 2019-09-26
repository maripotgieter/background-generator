var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("randomButton");

function setGradient() {

    body.style.background = "linear-gradient(to right, " +
        color1.value +
        " , " +
        color2.value + ")";

    css.textContent = body.style.background + ";";

}

function setRandomGradient() {
    var rgbVals = randomRGB();
    var tempColor = "linear-gradient(to right, rgb(" +
        rgbVals[0] + "," + rgbVals[1] + "," + rgbVals[2] +
        "), rgb(" +
        rgbVals[3] + "," + rgbVals[4] + "," + rgbVals[5] + "))";

    body.style.background = tempColor;
//    color1.setAttribute("value", "rgb(" +
//        rgbVals[0] + "," + rgbVals[1] + "," + rgbVals[2] +
//        ")"); - something to consider at a later stage - only accepts hexadecimal values
    css.textContent = body.style.background + ";";
}

function randomNumber() {
    var number = Math.floor((Math.random() * 256) + 0).toString();
    console.log(number)
    return number;
}

function randomRGB() {
    var redOne = randomNumber();
    var greenOne = randomNumber();
    var blueOne = randomNumber();
    var redTwo = randomNumber();
    var greenTwo = randomNumber();
    var blueTwo = randomNumber();
    return [redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo];
}

randomButton.addEventListener("click", setRandomGradient)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)
