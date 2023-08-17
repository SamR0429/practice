//global variables

const pokemonContainer = document.getElementById("pokemon");
const inputButton = document.querySelector("button");
const inputFeild = document.querySelector("input");

//functions
async function getPokemonInfo(pokemonName) {
    let results = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    let data = await results.json();
    console.log(data);

    renderPokemonInfo(data);
}

function renderPokemonInfo(pokemonInfo) {
    let pokemonName = pokemonInfo.name;
    let pokemonWeight = pokemonInfo.weight;
    let pokemonHeight = pokemonInfo.height;

    console.log(pokemonName);
    console.log(pokemonWeight);
    console.log(pokemonHeight);

    pokemonContainer.innerHTML = `
        <div class="pokemon-container">
            <h2 class="pokemon-card">${pokemonName}</h2>
            <p>${pokemonHeight}</p>
            <p>${pokemonWeight}</p>
        </div>
    `;

}

function handleInputButtonClick(e){
    //take input
    let userPokemonInput = inputFeild.value;

    //send name to getPokemonInfo
    getPokemonInfo(userPokemonInput);
}


//event listeners
inputButton.addEventListener("click", handleInputButtonClick);


// getPokemonInfo("pikachu");