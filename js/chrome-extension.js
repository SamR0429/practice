
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const inputEl = document.querySelector(".input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector(".ul-el");

inputBtn.addEventListener("click", function () {
    console.log("button clicked")

    myLeads.push(inputEl.value);

    console.log(myLeads)
});

let listItems = '';

for(let i = 0; i < myLeads.length; i ++){

    //this is the original version and we refactored to make code work faster ?? and to clean up the code. this is done to wait until the for loop is done iterating to then render so to not mess with the dom every iteration
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    listItems += "<li>" + myLeads[i] + "</li>";
}

    ulEl.innerHTML = listItems;
