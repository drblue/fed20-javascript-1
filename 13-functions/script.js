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
const sayBye = function(name) {
	console.log(`Bye ${name}`);
}
// sayBye("Johan");
// sayBye("Fredrik");

const greet = function(time, name = "Anonymous") {
	alert(`Good ${time}, ${name}!`);
}
// greet("morning", "Johan");
// greet("evening", "class");
// greet("night", "all");
// greet("morning");
// let t = "morning";
// let n = "Johan";
// greet(t, n);  // greet("morning", "Johan");

const greetingGenerator = function(time = "morning", name = "Anonymous") {
	return `Good ${time}, ${name}`;
}
// let msg = greetingGenerator("evening", "class"); // msg = "Good evening, class";
// console.log("msg", msg);

let r;
let a;

const calcArea = function(radius) {
	return radius ** 2 * Math.PI;
}

/*
r = 10;
a = calcArea(r);
console.log(`The area of a circle with radius ${r} is ${a}.`);

r = 20;
a = calcArea(r);
console.log(`The area of a circle with radius ${r} is ${a}.`);
*/

let circles = [10, 15, 20, 30, 42];
for (let i = 0; i < circles.length; i++) {
	const a = calcArea(circles[i]);
	console.log(`The area of a circle with radius ${circles[i]} is ${a}.`);
}
