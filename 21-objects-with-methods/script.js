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
	},
}

const increaseAge = pet => {
	console.log("inside increaseAge, before:", pet);
	pet.age++;
	console.log("inside increaseAge, after:", pet);
}

console.log("Barksby age before:", barksby.age);
increaseAge(barksby);
console.log("Barksby age after:", barksby.age);
