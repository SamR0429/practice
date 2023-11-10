let num1 = 8;
let num2 = 2;
// let sum;
let sumP = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//needs innerHtml in all functions ??
//the commented is what you wrote and its working correctly but this version is shorter and shorter is good

function add() {
/*    sum = num1 + num2;
    sumP.innerHTML = sum;*/
    sumP.innerHTML = "Sum: " + num1 + num2;
}

function subtract() {
    // sum = num1 - num2;
    // sumP.innerHTML = sum;
    sumP.innerHTML = "Sum: " + num1 - num2;

}

function divide() {
    // sum = num1 / num2;
    // sumP.innerHTML = sum;
    sumP.innerHTML = "Sum: " + num1 / num2;

}

function multiply() {
    // sum = num1 * num2;
    // sumP.innerHTML = sum;
    sumP.innerHTML = "Sum: " + num1 * num2;

}