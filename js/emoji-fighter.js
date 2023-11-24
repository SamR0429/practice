
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.querySelector(".stage");
let fightButton = document.querySelector(".fightButton");

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let randomFighterOne = Math.floor(Math.random() * fighters.length);
    let randomFighterTwo = Math.floor(Math.random() * fighters.length);

    stageEl.innerHTML = (fighters[randomFighterOne] + " vs. " + fighters[randomFighterTwo]);

});
