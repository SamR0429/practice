
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


const passwordStageEl = document.querySelector(".passwords-stage");
const generateButton = document.querySelector(".generate-passwords");

generateButton.addEventListener("click" , function (){

    let randomPasswordOne = Math.floor(Math.random() * characters.length);
    let randomPasswordTwo = Math.floor(Math.random() * characters.length);

    passwordStageEl.innerHTML = (characters[randomPasswordOne]) + " vs. " + (characters[randomPasswordTwo]);

});

//have a start generating function and then second function to actually make the random passwords
//assign those generated password in the start function
//render them in their own boxes



