/**
 * TRUTHINESS
 *
 * truthy = sant-ish
 * falsy = falskt-ish
 */

if (true) {
	console.log("it's true that true is true!");
}

if (false) {
	console.log("i'm never going to be run"); // will not run
}

if (!false) {
	console.log("the opposite of false is true, and true is true");
}

if (0) {
	console.log("i'm also never going to be run");
}

if (1) {
	console.log("1 is true!");
}

if (42) {
	console.log("42 is also true!");
}

if (null) {
	console.log("Will never run");
}

if (undefined) {
	console.log("Will never run");
}

if (!null) {
	console.log("The opposite of null is truthy");
}
