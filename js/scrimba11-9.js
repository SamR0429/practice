
// practice question 1
// let firstName = "sam"
// let greeting = "hi there"
//
// function greetings(){
//     console.log(greeting + ", " + firstName + " !");
// }
//
// greetings();

// practice question 2
// let myPoints = 3;
// function add3Points(){
//  myPoints += 3;
// }
// function remove1Point(){
//     myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);

let errorP = document.querySelector(".error");

//need .innerHtml to set html with error phrase

function oops(){
    errorP.innerHTML = "Something went wrong, please try again";
}
