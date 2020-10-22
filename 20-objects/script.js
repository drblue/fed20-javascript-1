/**
 * OBJECTS
 *
 *
 */

/*
// Arrays aren't that suited for grouping related data together since they are index-based and relies on the order of values

const fluffles = [
	"Mr Fluffles",  // 0 = name
	3,              // 1 = age
	"Peter",        // 2 = owner
	"Annoy people", // 3 = hobbies
	"Unknown"       // 4 = species
];

const captainCat = [
	"Captain Cat",  // 0 = name
	"Cat.",         // 1 = species
	7,              // 2 = age
	"Agda",         // 3 = owner
	"HIIT"          // 4 = hobbies
];

const meowJr = [
	"Meow Jr",      // 0 = name
	"Kitten",       // 1 = species
	1,              // 2 = age
	"HIIT",         // 3 = hobbies
	"Agda"          // 4 = owner
];
*/


/*
// Objects are better suited for representing data that has an inherent connection and is not dependent on the order of the keys

const fluffles = {
	name: "Mr Fluffles", // key-value pair
	species: "Unknown",
	age: 3,
	owner: "Peter",
	hobbies: "Annoy people"
}

const captainCat = {
	name: "Captain Cat", // key-value pair
	species: "Cat.",
	owner: "Agda",
	hobbies: "HIIT",
	age: 7
}

const meowJr = {
	hobbies: "Be Cute.",
	species: "Kitten",
	age: 1,
	name: "Meow Jr" // key-value pair
}
*/


// We access a property using dot-notation
// console.log(captainCat.owner);  // "Agda"

// If we try to access a property that does not exist on the object, we get `undefined`
// console.log(meowJr.owner);


// We can also add the objects directly into an array

const cats = [
	{
		name: "Mr Fluffles", // key-value pair
		species: "Unknown",
		age: 3,
		owner: "Peter",
		hobbies: "Annoy people"
	},
	{
		name: "Captain Cat", // key-value pair
		species: "Cat.",
		owner: "Agda",
		hobbies: "HIIT",
		age: 7
	},
	{
		hobbies: "Be Cute.",
		species: "Kitten",
		age: 1,
		name: "Meow Jr" // key-value pair
	}
];

cats.forEach(cat => {
	if (cat.owner) {
		console.log(`${cat.name} is ${cat.age} years old, owned by ${cat.owner} and favorit thing to do is ${cat.hobbies}.`);
	} else {
		console.log(`${cat.name} is ${cat.age} years old, favorit thing to do is to ${cat.hobbies}`);
	}
});
