/**
 * ARRAY METHODS
 *
 * sort()
 * find() <--
 * filter()
 * map()
 * reduce()
 */

const numbers = [ 5, 21, 13, 8, 28, 50, 47, 24, 18, 47, 18, 15, 11, 43, 5, 33 ];
// const res = numbers.find(num => {
// 	return num >= 25;
// });
const res = numbers.find(num => num >= 25);
console.log("The first number which is greater than (or equal to) 25 in the array is:", res);

const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

// CUMBERSOME, OLD, BAD WAY TO FIND THINGS
/*
let nomNomProduct;
products.forEach(product => {
	console.log(`Checking if product "${product.name}" matches SKU "GOOD-COOKIES"...`);
	if (product.sku === "GOOD-COOKIES") {
		console.log("FOUND IT! 😋");
		nomNomProduct = product;
	}
});
*/
const nomNomProduct = products.find(product => product.sku === "GOOD-COOKIES");
if (nomNomProduct) {
	console.log("YAY FOUND COOKIES!");
} else {
	console.log("SAD COOKIE MONSTER 🥺");
}
