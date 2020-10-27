/**
 * Workshop: SIMPLE TODOS
 * Lesson: 7
 * Link: https://fed20.thehiveresistance.com/javascript-dag-7-dom-102/
 *
 * STEG 1
 * Skapa en lista av TODOs. Man ska kunna lägga till nya genom att klicka på en
 * knapp som tar emot TODO-beskrivning genom en prompt().
 *
 * STEG 2
 * Gör så att det även gå att ta bort TODOs.
 *
 * STEG 3
 * Lägg därefter till en input-fält istället och skriv så att knappen för att
 * lägga till TODO istället hämtar beskrivningen ifrån input-fältet.
 *
 * STEG 4
 * Se om du kan få till så att istället för att ta bort TODOs så blir dem
 * överstrukna. Kan du kanske kombinera båda så att när man klickar på texten
 * så blir dem överstrukna, men om man klickar på en knapp på varje TODO så
 * tags dem bort?
 */

const newTodoButtonEl = document.querySelector('#new-todo-button');
const todosEl = document.querySelector('#todos');
const newTodoDescriptionEl = document.querySelector('#new-todo-description');

// add click listener to the actual list, and check if the clicked target is
// a list-item, and only then remove it
todosEl.addEventListener('click', e => {
	if (e.target.tagName === "LI") {
		// user clicked on a list-item, so toggle class `completed` on it
		e.target.classList.toggle('completed');
	} else if (e.target.tagName === "BUTTON") {
		// user clicked on the big red X-button, so we self-destruct
		e.target.parentElement.remove();
	}
});

// handle user clicking on "New Todo" button
newTodoButtonEl.addEventListener('click', () => {
	// get description of new todo from input-field
	const todoDescription = newTodoDescriptionEl.value;

	if (todoDescription.length < 2) {
		alert("You need to enter more than that...");
		return;
	}

	// create new todo list-item
	const newTodoEl = document.createElement('li');

	// add class `todo` and `list-group-item` to new todo list-item
	newTodoEl.classList.add('todo', 'list-group-item');

	// set content of new todo list-item to whatever the user entered
	newTodoEl.innerText = todoDescription + " ";

	// create a button
	const newTodoDeleteButtonEl = document.createElement('button');
	newTodoDeleteButtonEl.classList.add('btn', 'btn-danger', 'btn-sm');
	newTodoDeleteButtonEl.innerText = "X";

	// add button to new todo list-item
	newTodoEl.append(newTodoDeleteButtonEl);

	// add new todo list-item to list of todos
	todosEl.append(newTodoEl);

	// empty input-field
	newTodoDescriptionEl.value = "";

	// PROFIT! 💰
});
