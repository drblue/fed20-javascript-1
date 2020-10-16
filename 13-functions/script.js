/**
 * FUNCTIONS
 *
 * Function declarations vs function expressions
 */

// Function declaration - is HOISTED to the top of the document automatically
function sayHi() {
	console.log("hi");
}
// sayHi();

// Function expression (an anonymous function is saved to a (scoped) constant variable)
const sayBye = function() {
	console.log("Baiiiii");
}
// sayBye();

/*
const PI = 3.1415;
let r;
let a;

r = 10;
a = r ** 2 * PI;
console.log(`The area of a circle with radius ${r} is ${a}.`);

r = 20;
a = r ** 2 * PI;
console.log(`The area of a circle with radius ${r} is ${a}.`);
*/
