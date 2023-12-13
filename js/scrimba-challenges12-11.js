
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr){

    for (let i = 0; i < arr.length; i ++){
        console.log(arr[i]);
    }

}

logItems(myCourses);


// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("myCredits", "100");
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits);



let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
];

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (){

    console.log(data[0].score);
});

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)



// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries," and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString;
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
console.log(sentence)
