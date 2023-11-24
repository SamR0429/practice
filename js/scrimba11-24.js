
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];
//
// for(let i = 0; i < largeCountries.length; i++){
//     console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];
//
// largeCountries.pop();
// console.log(largeCountries)
//
// largeCountries.push("Pakistan");
// console.log(largeCountries)
//
// largeCountries.shift();
// console.log(largeCountries)
//
// largeCountries.unshift("China");
// console.log(largeCountries)
//
// ////////////////////////////////////////////////////////
//
// let dayOfMonth = 31;
// let weekday = "Friday";
//
// if (dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱");
// }
//
// ////////////////////////////////////////////////////////
//
// let hands = ["rock", "paper", "scissor"];
//
// function randomItem(){
//    let randomIndex = Math.floor(Math.random() * 3 )
//     return hands[randomIndex]
// }
//
// console.log(randomItem());

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.querySelector(".apple-shelf");
let orangeShelf = document.querySelector(".orange-shelf");

function fruitSorter(){

    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎"){
            // console.log(fruit[i])
            //you were so close to getting this one you just needed the += and then the emoji, youre adding and making the appleShelf retain the count with the +=
          appleShelf.innerHTML += "🍎";
        }else if (fruit[i] === "🍊"){
            orangeShelf.innerHTML += "🍊";
        }
    }

}

fruitSorter();
