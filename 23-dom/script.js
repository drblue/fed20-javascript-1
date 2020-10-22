/**
 * DOM - Document Object Model
 *
 */

// get by ID
let firstLink = document.getElementById('link-1');
console.log(firstLink);

/*
 * getElementsByClassName and getElementsByTagName returns a
 * HTMLCollection which does NOT have a .forEach()-method
 */

// get by classname
let errors = document.getElementsByClassName('error');
console.log(errors);

// get by tag
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);


/*
 * querySelectorAll returns a NodeList which DOES have a
 * .forEach()-method
 */

let links = document.querySelectorAll('a');
console.log(links);

links.forEach((item) => {
	console.log(item);
});
