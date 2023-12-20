
let input = 1;
let metersConversion;
let feetConversion;
let litersConversion;
let gallonConversion;
let kilogramConversion;
let poundsConversion;

const convertBtn = document.querySelector(".convert-btn");
const lengthTxtField = document.querySelector(".length-field-text");
const volumeTxtField = document.querySelector(".volume-field-text");
const massTxtField = document.querySelector(".mass-field-text");


function meterFeetConversion() {
    // console.log(lengthConversion)
    feetConversion = input * 3.281;
    metersConversion = input * 0.3048;
    lengthTxtField.innerHTML = `${input} meters = ${feetConversion} feet | ${input} feet = ${metersConversion} meters`;
}

function literGallonConversion() {
    // console.log(volumeConversion)
    gallonConversion = input * 0.264;
    litersConversion = input * 3.785
    volumeTxtField.innerHTML = `${input} liters = ${gallonConversion} gallons | ${input} gallons = ${litersConversion} liters`;
}

function kilogramPoundConversion(){
    poundsConversion = input * 2.204;
    kilogramConversion = input * 0.453;
    massTxtField.innerHTML = `${input} kilos = ${poundsConversion} pounds | ${input} pounds = ${kilogramConversion} kilos`
}

convertBtn.addEventListener("click", function () {
    meterFeetConversion()
    literGallonConversion()
    kilogramPoundConversion()
});