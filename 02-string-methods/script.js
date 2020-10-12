let name = "Alicia";

console.log("Name is:", name);
console.log("Length of name:", name.length);

console.log("Name SHOUTED is:", name.toUpperCase()); // "ALICIA"
console.log("Name whispered is:", name.toLowerCase()); // "alicia"

console.log("Name is:", name); // "Alicia"

console.log("First char of name is:", name[0]);
console.log("Second char of name is:", name[1]);

console.log("Char 'c' is at index:", name.indexOf("c"));
console.log("Third char of name is:", name[3]);

console.log("First occurance of char 'i' is at index:", name.indexOf('i'));
console.log("Last occurance of char 'i' is at index:", name.lastIndexOf('i'));

// let result = name.replace('i', 'j');
// console.log(result); // Aljcia

// get part of string
// let result = name.slice(0, 3); // Ali
// let result = name.slice(3, -1); // ci

let pizza_slice = name.slice(3, 5);
console.log("PIZZA?", pizza_slice);

let tinyName = name.substr(3, 5);
console.log("tinyName:", tinyName);

let email = "pelle";
console.log("does the email contain an at-char?", email.includes('@'));
