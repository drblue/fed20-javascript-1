/**
 * SCOPE
 *
 * Global vs Local Scope
 *
 * Med `let` och `const` har vi scoped variables, vilket inte gick
 * med `var` som alltid gjorde dem globala (förutom i funktioner).
 */

/*
let points = 10;

if (true) {
	let points = 20;
	console.log("Inside if-statement", points); // 20

	if (true) {
		let points = 30;
		console.log("Inside inner if-statement", points); // 30
	}

	console.log("After inner if-statement", points); // 20
}

console.log("Outside if-statement", points); // 10
*/

/*
let students = ['Kalle', 'Linus', 'Alicia', 'Maja', 'Joakim'];
let student = "Lisa";
for (let i = 0; i < students.length; i++) {
	let student = students[i];
	console.log(`Student name: ${student}`);
}
console.log(`After for-loop, student is ${student}`); // "Lisa"
*/

for (let i = 1; i <= 10; i++) {
	// console.log("at first iteration", i);
	for (let j = 20; j <= 40; j++) {
		console.log("at second iteration", i, j);
	} // i = 40
}
