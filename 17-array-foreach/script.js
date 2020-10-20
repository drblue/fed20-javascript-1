/**
 * ARRAY FOREACH
 *
 * Iterate over an array and invoke a callback for each item in the array.
 */

let people = ["Johan", "Elliot", "Alicia", "Maja", "Bengt", "Agneta"];

// traditional for-loop for iterating over an array
// for (let i = 0; i < people.length; i++) {
// 	const person = people[i];
// 	console.log(`Name at position ${i}:`, person)
// }

// iterate over people and execute one-line arrow function once for each person, and log their name
people.forEach(person => console.log(`Name:`, person));

// iterate over people and execute one-line arrow function once for each person, and log their index and name
people.forEach((person, i) => console.log(`Name at position ${i}:`, person));
