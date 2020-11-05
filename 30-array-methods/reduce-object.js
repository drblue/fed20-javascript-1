/**
 * ARRAY METHODS
 *
 * sort()
 * find()
 * filter()
 * map()
 * reduce() <--
 */

const students = [
	{
		name: "Johan",
		points: 133,
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
const studentPoints = {
	"Johan": 133,
	"Peter": 3,
	"Alicia": 42,
	"Elliot": 88,
	"Maja": 35
}
*/

// reduce array of students to the total points for all students
const studentPoints = students.reduce((sum, student) => {
	sum[student.name] = student.points;
	return sum;
}, {});
console.log("Student Points object:", studentPoints);
