
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// let firstPassword = "";
// let secondPassword = "";

// const passwordStageEl = document.querySelector(".passwords-stage");



// generateButton.addEventListener("click" , function (){
//
//     let randomPasswordOne = Math.floor(Math.random() * characters.length);
//     let randomPasswordTwo = Math.floor(Math.random() * characters.length);
//
//     passwordStageEl.innerHTML = (characters[randomPasswordOne]) + "  &  " + (characters[randomPasswordTwo]);
//
// });

//have a start generating function and then second function to actually make the random passwords
//assign those generated password in the start function
//render them in their own boxes

// function generatesPasswords(){
//
//     firstPassword = Math.floor(Math.random() * characters.length);
//     // console.log(firstPassword)
//     firstPasswordEl.innerHTML = firstPassword;
//
//     secondPassword = Math.floor(Math.random() * characters.length);
//     // console.log(secondPassword)
//     secondPasswordEl.innerHTML = secondPassword;
//
// }

let passwordLength = 15;
const generatedPasswordOne = generateRandomPassword()
const generatedPasswordTwo  = generateRandomPassword()


const firstPasswordEl = document.querySelector(".first-password");
const secondPasswordEl = document.querySelector(".second-password");
const generateButton = document.querySelector(".generate-passwords");


firstPasswordEl.innerHTML = generatedPasswordOne;
secondPasswordEl.innerHTML = generatedPasswordTwo;


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}





// console.log("Here is a random password: ", generatedPasswordOne + " also " + generatedPasswordTwo)

