/**
 * ARRAY METHODS
 *
 * sort()
 * find()
 * filter()
 * map()
 * reduce() <--
 */

const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
// const numbers = [ 1, 2, 3, 4, 5 ];
// console.log("numbers:", numbers);

// reduce array of numbers to the total value of all numbers
const sum = numbers.reduce((acc, num) => {
	return acc + num;
}, 0);

// console.log("sum:", sum);


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
// reduce array of students to the total points for all students
const totalPoints = students.reduce((sum, student) => {
	return sum + student.points;
}, 0);
console.log("Total points for all students:", totalPoints);


const products = [
	{
		name: "Corrosive bowl",
		in_stock: 321,       // 0 + (0.99 * 321) = 317,79
		price: 0.99,
	},
	{
		name: "Cotton spice rack",
		in_stock: 2,        // 317,79 + (149.99 * 2) = 617,77
		price: 149.99,
	},
	{
		name: "Inside-out Oreo cookies",
		in_stock: 18,       // 617,77 + (2.49 * 18) = 662,59
		price: 2.49,
	},
	{
		name: "The uncomfortable broom",
		in_stock: 1,       // 662,59 + (28.65 * 1) = 691,24
		price: 28.65,
	},
];
const totalStockValue = products.reduce((sum, product) => {
	return sum + (product.price * product.in_stock);
}, 50000);

console.log(`The total stock value is $ ${totalStockValue}.`);
