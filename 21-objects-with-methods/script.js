/**
 * OBJECTS WITH METHODS
 *
 *
 */

const barksby = {
	name: "Mr Barksby", // key-value pair
	species: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
	speak: function() {
		console.log("Woof!");
	},
	about: function() {
		console.log(`Hello, my name is ${this.name} and I'm a ${this.species} and I am ${this.age} years old.`);
		// console.log("this inside about method:", this);
		console.log("Age:", this.age);
	}
}

// this = Window
barksby.about();

const fluffles = {
	name: "Mr Fluffles", // key-value pair
	species: "Unknown",
	age: 3,
	owner: "Peter",
	hobbies: "Annoy people",
	speak: function() {
		console.log("MEOW!!!!");
	},
	about: function() {
		console.log(`Hello, my name is ${this.name} and I'm a ${this.species} and I am ${this.age} years old.`);
		// console.log("this inside fluffles-object:", this);
		console.log("Age:", this.age);
	}
}
fluffles.about();

// console.log("this outside of any object:", this); // Window
