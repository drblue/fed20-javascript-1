/**
 * ARRAY METHODS
 *
 * sort()
 * find()
 * filter() <--
 * map()
 * reduce()
 */

/** numbers */
const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];

// filter out all numbers >= 25
const largeNumbers = numbers.filter(num => {
	/*
	if (num >= 25) {
		return true;
	} else {
		return false;
	}
	*/
	// return (num >= 25) ? true : false;
	return (num >= 25);
});
console.log("largeNumbers:", largeNumbers);

// get all numbers below 15
const smallNumbers = numbers.filter(num => num < 15);
console.log("smallNumbers:", smallNumbers);

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
// get all students which are godkända (>= 40)
const passed = students.filter(student => student.points >= 40);
console.log("students who passed the exam:", passed);
