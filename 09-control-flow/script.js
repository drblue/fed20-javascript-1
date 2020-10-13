/*
const minAge = 18;
const maxAge = 67;

let age = 50;

// && = AND
// || = OR

// (     true     &&    true    ) == true
if (age >= minAge && age < maxAge) {
	console.log(`Welcome in, your age of ${age} is between ${minAge} and ${maxAge}`);
} else {
	console.log("Go away. Too old or too young.");
}

let name = "Peter";
// (     false      ||     true     ) == true
if (name == "Johan" || name == "Peter") {
	console.log("🤘🏻");
} else {
	console.log("👶🏻");
}

// console.log(`Your age is ${age} and you're allowed in:`, isOfMinAge);
*/

/*
console.log("before loop");

for (let i = 1; i < 5; i++) {
	console.log("in loop, i is:", i);
}

console.log("after loop");
*/

let students = [
	"Spider-Man",    // 0
	"Iron Man",      // 1
	"Black Widow",   // 2
	"Deadpool",      // 3
	"Ant-Man",       // 4
	"Thanos",        // 5
	"Captain Marvel" // 6
];

if (students.length > 5) {
	for (let i = 0; i < students.length; i++) {
		console.log("Student name: " + students[i]);
	}
} else {
	console.log("Too few students to start Avengers.");
}
