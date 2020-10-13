let minAge = 18;
let maxAge = 50;
let age = 30;

console.log(age > minAge); // 30 > 18 // true

age = 18;
console.log(age > minAge); // 18 > 18 // false
console.log(age >= minAge); // 18 >= 18 // true

console.log(age < maxAge); // 18 < 50 // true

let name = "Johan";
console.log(name == "Johan"); // "Johan" == "Johan" // true

console.log(name == "Peter"); // "Johan" == "Peter" // false
console.log(name != "Peter"); // "Johan" != "Peter" // true
