
let homeScore = 0;

const scoreSpan = document.querySelector(".score");

// const onePoint = document.querySelector(".add-one");
// const twoPoint = document.querySelector(".add-two");
// const threePoint = document.querySelector(".add-three");

function plusOne(){
    homeScore+= 1;
    console.log("clicked add one")
    scoreSpan.innerHTML = homeScore;
}

