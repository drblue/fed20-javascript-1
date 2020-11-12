/**
 * THIS in functions
 *
 */

console.log("this outside of a function:", this);

function funcDeclaration() {
	console.log("this inside of a function declaration:", this);
}

const funcExpression = function() {
	console.log("this inside of a function expression:", this);
}

const funcArrowExpression = () => {
	console.log("this inside of a arrow function expression:", this);
}

funcDeclaration();
funcExpression();
funcArrowExpression();

const whatIsThis = function() {
	console.log("whatIsThis:", this);
}
const whatIsThisArrow = () => {
	console.log("whatIsThisArrow:", this);
}


const myObj = {
	name: "My Object",
	color: "rgb",
	level: "Elite",
	completed: true,
	toggleCompletedArrow: whatIsThisArrow,
	toggleCompleted: whatIsThis
}

const mySecondObj = {
	name: "My Second Object",
	color: "hex",
	level: "N00b",
	completed: false,
	toggleCompletedArrow: whatIsThisArrow,
	toggleCompleted: whatIsThis
}

// this = Window
console.log("*** myObj ***");
myObj.toggleCompletedArrow();  // When declared as an arrow function, `this` is not bound to the object
myObj.toggleCompleted();  // `this` will be bound to the object that the function is declared/used on

console.log("*** mySecondObj ***");
mySecondObj.toggleCompletedArrow();  // When declared as an arrow function, `this` is not bound to the object
mySecondObj.toggleCompleted();  // `this` will be bound to the object that the function is declared/used on
