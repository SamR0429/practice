
let firstCard = 5;
let secondCard = 7;

let sum = firstCard + secondCard;

let hasWon = false;
let isAlive = true;

if (sum <= 20) {
    console.log("do you want to draw a new card?");
} else if (sum === 21) {
    console.log("you won!")
    hasWon = true;
    // isAlive = false;
} else {
    console.log("sorry you lost the game :(");
    isAlive = false;
}

console.log(hasWon);
console.log(isAlive);

//side tasks

// let age = 21;
//
// if (age <= 20) {
//     console.log("You can not enter the club!");
// } else {
//     console.log("Welcome!");
// }

// let age = 100;
//
// if(age < 100){
//     console.log("Not eligible");
// }else if(age === 100){
//     console.log("Here is your birthday card from the King!");
// }else {
//     console.log("Not elegible, you have already gotten one");
// }


