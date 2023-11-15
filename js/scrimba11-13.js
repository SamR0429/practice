
let homeScore = 0;
let guestScore = 0;

const homeScoreP = document.querySelector(".home-score");
const guestScoreP = document.querySelector(".guest-score");


function plusOne(){
    homeScore+= 1;
    console.log("clicked add one")
    homeScoreP.innerHTML = homeScore;
}

function plusTwo(){
    homeScore+= 2;
    homeScoreP.innerHTML = homeScore;
}

function plusThree(){
    homeScore+= 3;
    homeScoreP.innerHTML = homeScore;
}

function plusOneGuest(){
    guestScore+=1;
    guestScoreP.innerHTML = guestScore;
}

function plusTwoGuest(){
    guestScore+=2;
    guestScoreP.innerHTML = guestScore;
}

function plusThreeGuest(){
    guestScore+=3;
    guestScoreP.innerHTML = guestScore;
}