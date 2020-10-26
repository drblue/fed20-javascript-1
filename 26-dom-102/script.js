/**
 * DOM - Document Object Model 102
 *
 */

const listitemsEl = document.querySelector('ul');
const listitems = document.querySelectorAll('li');
const addButton = document.querySelector('#add');

// add event listener to parent ul element
listitemsEl.addEventListener('click', e => {
	console.log("This is an UL click event", e);

	// stop from bubbling
	e.stopPropagation();

	if (e.target.tagName === "LI") {
		console.log("You've clicked on a list item!");
		e.target.remove();
	}
});

addButton.addEventListener('click', () => {
	const listitem = document.createElement('li');
	listitem.innerText = 'I am a new list item 👶🏻';
	// this wont have an event listener as its created after we iterate over all listitems

	listitemsEl.append(listitem);
});

/*
listitems.forEach(listitem => {
	listitem.addEventListener('click', vadsomhelst => {
		console.log("Will remove list item", vadsomhelst.target);
		// vadsomhelst.target.remove();
	});
});
*/

// add click listener to link
document.querySelector('a').addEventListener('click', e => {
	e.preventDefault();

	alert("You clicked a link!");
})
