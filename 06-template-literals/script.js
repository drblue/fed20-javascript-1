let test = "JavaScript 101";
let student = "Newbie Coder";
let points = 42;

// string concatenation
// let msg = "Hi " + student + ", your result on " + test + " was " + points + " points.";
// console.log(msg);

// template literals / template strings
let msg = `Hi ${student}, your result on ${test} was ${points} points.`;
console.log(msg);

let oldOutput = "<article><h1>" + test + "</h1><p>Congrats " + student + ", your score on " + test + " is " + points + "!</p></article>";

let output = `
<article>
	<h1>${test}</h1>
	<p>Congrats ${student}, your score on ${test} is ${points}!</p>
</article>
`;

console.log(output);
