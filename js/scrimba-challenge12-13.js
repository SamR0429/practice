
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const images = [
    "img/hip1.jpg",
    "img/hip2.jpg",
    "img/hip3.jpg"
]

const containerEL = document.querySelector(".container");

function renderEmployees(){
    let imgDOM = "";
    for (let i = 0; i < images.length; i++) {
        imgDOM += `<img alt="Employee in the company" class="team-img" src="${images[i]}">`;
    }
    containerEL.innerHTML = imgDOM;
}

renderEmployees();
