/**
 * FUNCTIONS 102
 *
 *
 */

const speak = function(name, output) {  // name = "Bull"
	let greeting = `Hello ${name}, nice to meet you!`; // "Hello Bull, nice to meet you!"
	console.log(`output inside speak for ${name} is:`, output);
	output(greeting);
}

const logMsg = function(msg) {  // msg = "Hello Bull, nice to meet you!"
	console.log("Log message:", msg);  // "Log message: Hello Bull, nice to meet you!"
}

const alertMsg = function(msg) {
	alert(`ALERT!: ${msg}`);
}

let bill = "Bill";
let bull = "Bull";
speak(bill, alertMsg);
speak(bull, logMsg);
