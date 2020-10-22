/**
 * PRIMITIVE VS REFERNCE DATA TYPES
 *
 * Primitive data types
 * - String
 * - Number
 * - Boolean
 * - Null
 * - Undefined
 *
 * Reference data types
 * - Object (Arrays, Classes)
 * - Symbol
 */

// primitive data types "primitive values"
let pointsJohan = 1337;
let pointsPeter = pointsJohan;

console.log("pointsJohan", pointsJohan); // 1337
console.log("pointsPeter", pointsPeter); // 1337

pointsJohan = 42;

console.log("pointsJohan", pointsJohan); // 42
console.log("pointsPeter", pointsPeter); // 1337

// reference data types "reference value"
let petOne = {
	name: 'Mr Fluffles',
	age: 7
}

let petTwo = petOne;

console.log("petOne:", petOne);
console.log("petTwo:", petTwo);

petOne.name = "Mrs Purr";

console.log("petOne:", petOne); // { name: "Mrs Purr", age: 7 }
console.log("petTwo:", petTwo); // { name: "Mr Fluffles", age: 7 }

