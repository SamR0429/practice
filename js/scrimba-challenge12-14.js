
// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${ Math.round(totalPrice * 10 ** 2) / 10 ** 2 }`


