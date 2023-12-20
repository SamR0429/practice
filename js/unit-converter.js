/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// will need to change innerHTML of

let input = 1;
let metersConversion;
let feetConversion;
let litersConversion;
let gallonConversion;

const convertBtn = document.querySelector(".convert-btn");
const lengthTxtField = document.querySelector(".length-field-text");
const volumeTxtField = document.querySelector(".volume-field-text");
const massTxtField = document.querySelector(".mass-field-text");


function meterFeetConversion() {
    // console.log(lengthConversion)
    metersConversion = input * 3.281;
    feetConversion = input * 0.3048;
    lengthTxtField.innerHTML = `${input} meters = ${metersConversion} feet | ${input} feet = ${feetConversion} meters`;
}

function literGallonConversion() {
    // console.log(volumeConversion)
    litersConversion = input * 0.264;
    gallonConversion = input * 3.785
    volumeTxtField.innerHTML = `${input} liters = ${litersConversion} gallons | ${input} gallons = ${gallonConversion} liters`;
}

convertBtn.addEventListener("click", function () {
    meterFeetConversion()
    literGallonConversion()
});