
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


//have a start generating function and then second function to actually make the random passwords
//assign those generated password in the start function
//render them in their own boxes


function generateRandomPassword(){

    let randomPassword =  Math.floor(Math.random() * characters.length) +1 ;
    // console.log(randomPassword)

}

function startGenerating(){

    let firstPassword = generateRandomPassword();
    let secondPassword = generateRandomPassword();

}

function renderGeneratedPasswords(){



}