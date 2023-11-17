let firstCard = 5;
let secondCard = 7;
let cards = [firstCard, secondCard];
let hasWon = false;
let isAlive = true;
let message = '';
let sum = firstCard + secondCard;
const messageEl = document.querySelector(".message-el");

const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");


function startGame(){
    renderGame();
}

function renderGame() {


    cardsEl.innerHTML = "Cards: " + cards[0]+ " " + cards[1] ;

    sumEl.innerHTML = "Sum: " + sum;
    if (sum <= 20) {

        message = "do you want to draw a new card?";
    } else if (sum === 21) {
        message = "you won!";
        hasWon = true;
        // isAlive = false;
    } else {
        message = "sorry you lost the game :(";
        isAlive = false;
    }
     messageEl.innerHTML = message

    // console.log(hasWon);

    // console.log(isAlive);
    // console.log(message);
}

function newCard(){

    let thirdCard = 5;

    console.log("drawing of a new card");
    sum += thirdCard;
    renderGame();

}

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


