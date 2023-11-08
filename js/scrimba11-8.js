
//document.querySelector(".count-el").innerHTML = 5 ;

// let bonusPoints = 50;
//
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
//
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
//
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// let count = 0 ;
// console.log(count);

// let myAge = 24;
// let humanDogRatio = 7;
//
// let result = myAge * humanDogRatio;
// console.log(result)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//////////////////////////////////////////////////////////
let count = 0;


//////////////////////////////////////////////////////////
let countEL = document.querySelector(".count-el");

let saveBtn = document.querySelector(".save-btn");

//////////////////////////////////////////////////////////
function increment(){
    count = count + 1;
    countEL.innerHTML = count;
}

function save(){
    console.log(count);
}
