
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

function meterFeetConversion(){
   lengthConversion = input * 3.281;
    console.log(lengthConversion)
}

function literGallonConversion(){
   volumeConversion = input * 0.264;
   console.log(volumeConversion)
}

convertBtn.addEventListener("click", function (){
    meterFeetConversion()
    literGallonConversion()
});