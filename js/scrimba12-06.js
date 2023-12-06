
const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, username, emoji) {
    welcomeEl.textContent = `${greeting} ${username} ${emoji}`
}

greetUser("Hello again", "Per Harald Borgen", "👋");

/////////////////////////////////////////////////////////////////

// Create a function, add(), that adds two numbers together and returns the sum

function add(x , y){
    return x + y
}

console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111