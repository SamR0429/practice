
// for(let i = 10; i <= 100 ; i+= 10){
//     console.log(i);
// }

let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = document.querySelector(".greeting-el");

for (let i = 0; i < sentence.length; i++){
    console.log(sentence[i]);
    greetingEl.innerHTML += sentence[i] + ' ';
}

