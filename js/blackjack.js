
let player = {
    name: "Sam",
    chips: 10
}

let cards = [];
let sum = 0;
let hasWon = false;
let isAlive = false;
let message = '';
const messageEl = document.querySelector(".message-el");

const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");
const playerEl = document.querySelector(".player-el");


playerEl.innerHTML = player.name + ": $" + player.chips;


function getRandom() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }

}

function startGame() {
    isAlive = true;

    let firstCard = getRandom();
    let secondCard = getRandom();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame() {

    cardsEl.innerHTML = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i] + " ";
    }

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

}

function newCard() {

    if (isAlive === true && hasWon === false) {
        let thirdCard = getRandom();
        console.log("drawing of a new card");
        sum += thirdCard;
        cards.push(thirdCard);
        // console.log(cards);
        renderGame();
    }

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

// for(let i = 0; i < cards.length; i ++){
//     console.log(cards[i]);
// }


