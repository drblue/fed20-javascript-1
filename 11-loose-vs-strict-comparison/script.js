/**
 * Loose vs Strict comparison
 */

let age = 25;

// loose comparison
console.log(age == 25); // true
console.log(age == "25"); // true

// strict comparison
console.log(age === 25); // true
console.log(age === "25"); // false
