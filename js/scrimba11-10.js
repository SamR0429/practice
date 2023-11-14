let num1 = 8;
let num2 = 2;
// let sum;
let sumP = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

//needs innerHtml in all functions ??
//you were so close in your origin try you just needed to do a "let" and then concatinate it into the innerHtml

function add() {
    let result = num1 + num2;
    sumP.innerHTML = "Sum:" + result;
}

function subtract() {
    let result = num1 - num2;
    sumP.innerHTML = "Sum:" + result;
}

function divide() {
    let result = num1 / num2;
    sumP.innerHTML = "Sum:" + result;
}

function multiply() {
    let result = num1 * num2;
    sumP.innerHTML = "Sum:" + result;
}