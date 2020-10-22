/**
 * Inputs and buttons in JavaScript
 *
 */

const firstName = document.querySelector('#firstName');
const btnSayHi = document.querySelector('#btnSayHi');

// we can get the value of a input field by utilizing the .value property
// i.e., firstName.value

// we can also react to the EVENT when a user CLICKS on our BUTTON
btnSayHi.addEventListener('click', () => {
	alert(`Hi ${firstName.value}!`);
})
