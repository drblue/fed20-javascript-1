// array
/*
let students = [
	"Spider-Man",  // 0
	"Iron Man",    // 1
	"Black Widow", // 2
	"Deadpool",    // 3
	"Ant-Man"      // 4
];

console.log(students);
console.log(`The third student in the list is ${students[2]}.`);

console.log(`There are ${students.length} students in the list.`);

students[3] = "Alivepool";
console.log(students);

let names = students.join(" - ");
console.log(`The students are: ${names}!`);

// find a specific student, returns index of student OR -1 if not found
let index = students.indexOf("Thanos");
console.log(`Found student at index ${index}`);

let newStudents = ["Hulk", "Thor", "Wanda Maximoff"];

let marvelUniverse = students.concat(newStudents);
console.log("marvelUniverse:", marvelUniverse);

// remove last item from the array
let lastAddedStudent = students.pop(); // students is now only 4 items long

// add a student to the list
students.push("Thanos"); // students is now 5 items long, and Thanos is added last in the array
*/

/*
let names = [
	"Johan",
	"Pelle",
	"Alicia",
	50,
	42,
	-1,
	false
];

console.log("names:", names);
*/

/*
let students = [
	[
		"Johan",
		42
	],
	[
		"Pelle",
		1337
	]
];
console.log("students:", students);

// let student = students[0];
// let name = student[0];

let name = students[0][0];
*/

let todos = [
	"Eat lunch",
	"Code JavaScript",
	"<sleep></sleep>",
	"repeat"
];
console.log(`You have ${todos.length} things to do!`);
