
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${ totalPrice.toFixed(2)}`

//if we got the wrong data type for the totalPrice use the code below

// const totalPrice = "420.69235632455";
// const btn = document.getElementById("purchase-btn");
// btn.textContent = `Buy €${ Number(totalPrice).toFixed(2)}`

//you can delete this later , just trying to get a commit for the day!!

//01/02/2023
//hello
//hi
//see you later