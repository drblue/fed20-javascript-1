/**
 * DOM - Document Object Model 102
 *
 */

const listitemsEl = document.querySelector('ul');
const listitems = document.querySelectorAll('li');
const addButton = document.querySelector('#add');

addButton.addEventListener('click', () => {
	const listitem = document.createElement('li');
	listitem.innerText = 'I am a new list item 👶🏻';
	// this wont have an event listener as its created after we iterate over all listitems

	listitemsEl.append(listitem);
});

listitems.forEach(listitem => {
	listitem.addEventListener('click', vadsomhelst => {
		console.log("Will remove list item", vadsomhelst.target);
		vadsomhelst.target.remove();
	});
});

