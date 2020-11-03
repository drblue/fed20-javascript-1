/**
 * ARRAY METHODS
 *
 * sort()
 * find()
 * filter()
 * map()
 * reduce()
 */

/** numbers */
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
// console.log("Numbers in chaos:", numbers);

// sort numbers THE CORRECT WAY
numbers.sort((a, b) => a - b);
/*
numbers.sort((a, b) => {
	return (a - b);  // if a < b, return negative value, if a > b, return positive, otherwise 0

	// if a is less than b (i.e. it should be sorted BEFORE b), return -1
	if (a < b) {
		return -1;
	}

	// if a is greater than b (i.e. it should be sorted AFTER b), return 1
	if (a > b) {
		return 1;
	}

	// if we've arrived here, then a is neither less than b, nor greater than b
	// i.e., a is equal to b
	return 0;
});
*/

// console.log("Numbers in proper order:", numbers);


/** names */
const names = ["Johan", "Fredrik", "Peter", "Alicia", "Maja", "Elliot"];
// console.log("Names in chaos:", names);

// make pretty
names.sort();

// console.log("Names in proper(!) order:", names);

/** sorting of objects also works! */
const students = [
	{
		name: "Johan",
		points: 1337,
	},
	{
		name: "Peter",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];
/*
students.sort((a, b) => {
	if (a.points < b.points) {
		return -1;
	}

	if (a.points > b.points) {
		return 1;
	}

	return 0;
});
*/

// sort students with lowest score first
/*
students.sort((a, b) => {
	return (a.points - b.points);
});
*/

// sort students with HIGHEST score first
students.sort((a, b) => {
	return (b.points - a.points);
});
console.log("sorted BEST students first:", students)
