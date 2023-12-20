/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// will need to change innerHTML of

let input = 1;
let lengthConversion = 0;
let volumeConversion = 0;

const convertBtn = document.querySelector(".convert-btn");
const lengthTxtField = document.querySelector(".length-field-text");
const volumeTxtField = document.querySelector(".volume-field-text");
const massTxtField = document.querySelector(".mass-field-text");


function meterFeetConversion() {
    // console.log(lengthConversion)
    lengthConversion = input * 3.281;
    lengthTxtField.innerHTML = `${input} meters = ${lengthConversion} | ${input} feet = equation goes here for feet`;
}

function literGallonConversion() {
    // console.log(volumeConversion)
    volumeConversion = input * 0.264;
    volumeTxtField.innerHTML = `${input} liters = ${lengthConversion} | ${input} gallons = equation goes here for gallons`;
}

convertBtn.addEventListener("click", function () {
    meterFeetConversion()
    literGallonConversion()
});