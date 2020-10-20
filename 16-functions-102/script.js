/**
 * FUNCTIONS 102
 *
 *
 */

const speak = (name, output) => {  // name = "Bull"
	let greeting = `Hello ${name}, nice to meet you!`; // "Hello Bull, nice to meet you!"
	console.log(`output inside speak for ${name} is:`, output);
	output(greeting);
}

const logMsg = function(msg) {  // msg = "Hello Bull, nice to meet you!"
	console.log("Log message:", msg);  // "Log message: Hello Bull, nice to meet you!"
}

// Function Expression
const alertMsgExp = function(msg) {
	alert(`ALERT!: ${msg}`);
}

// ES6 (Fat) Arrow Function (with *only one* parameter, we can skip the parenthesis around the parameter)
const alertMsg = msg => {
	alert(`ALERT!: ${msg}`);
}

// ES6 (Fat) Arrow Function (with no parameters, we need the paranthesis)
const hi = () => {
	console.log("Hi!");
}

// ES6 (Fat) Arrow Function (with two or more parameters, we also need the paranthesis)
const bye = (name, time) => {
	console.log(`Bye ${name}, have a good ${time}`);
}


/*
let bill = "Bill";
let bull = "Bull";
speak(bill, alertMsg);
speak(bull, logMsg);
*/

// speak("Johan", logMsg);
// speak("Johan", function(msg) {  // msg = "Hello Johan, nice to meet you!"
// 	console.log("Log message from anonymous function:", msg);  // "Log message from anonymous function: Hello Johan, nice to meet you!"
// });
speak("Johan", msg => {  // msg = "Hello Johan, nice to meet you!"
	console.log("Log message from anonymous function:", msg);  // "Log message from anonymous function: Hello Johan, nice to meet you!"
});

// const calcArea = function(radius) {
// 	return radius ** 2 * Math.PI;
// }
// const calcArea = radius => {
// 	return radius ** 2 * Math.PI;
// }
const calcArea = radius => radius ** 2 * Math.PI;   // one-line (arrow) function

const logAreaExp = function(msg, area) {
	console.log(msg, area);
}

const logAreaArrow = (msg, area) => {
	console.log(msg, area);
}

const logAreaOneLine = (msg, area) => console.log(msg, area);

logAreaOneLine("Area of circle with radius 10 is", calcArea(10));
logAreaOneLine("Area of circle with radius 42 is", calcArea(42));
logAreaOneLine("Area of circle with radius 1337 is", calcArea(1337));
