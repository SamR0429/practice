const theBox = document.querySelector(".box");

theBox.addEventListener("click", function () {
    console.log("i want to open the box!");
});

////////////////////////////////////////////////////////////////////////

const container = document.querySelector(".container");

container.innerHTML = "<button class='button'>Buy</button>";

//this part is targeting the button, and on click it will render the paragraph tag. the commented in the version that gave on scrimba which also works too but is using the onclick='' method with a separate function
const button = document.querySelector(".button");
button.addEventListener("click", function () {
    container.innerHTML += "<p>Thank you for buying!</p>"
});

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"
// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

//////////// different side question/////////

// template strings/literals

const recipient = "James"
const sender = "Sam"

// Refactor the email string to use template strings
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}!
`

console.log(email)