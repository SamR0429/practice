// for(let i = 10; i <= 100 ; i+= 10){
//     console.log(i);
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.querySelector(".greeting-el");
//
// for (let i = 0; i < sentence.length; i++){
//     console.log(sentence[i]);
//     greetingEl.innerHTML += sentence[i] + ' ';
// }

// let player1Time = 102
// let player2Time = 107
//
// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
//
// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);
//
// function getTotalRaceTime(){
//    return player1Time + player2Time;
// }
//
// let totalTime = getTotalRaceTime();
//
// console.log(totalTime);

// let randomNumber = Math.floor( Math.random() * 6 ) + 1

// console.log(randomNumber)

// function rollDice(){
//     return Math.floor( Math.random() * 6 ) + 1
// }
//
// console.log(rollDice());

// let hasSolvedChallenge = false
// let hasHintsLeft = false
//
// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution();
// }
//
// function showSolution() {
//     console.log("Showing the solution....")
// }

// let likesDocumentaries = true;
// let likesStartups = false;
//
// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie();
// }
//
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

listings = {
    bedrooms: 4,
    ac: true,
    description: "really nice castle",
    rooms: ["small", "medium", "large", "small"]
}

console.log(listings.ac);
console.log(listings.rooms[1]);