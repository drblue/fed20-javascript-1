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

newTodoButtonEl.addEventListener('click', () => {
	// prompt user for description of new todo
	const todoDescription = prompt('What needs to be done?');

	// create new todo list-item
	const newTodoEl = document.createElement('li');

	// add class `list-group-item` to new todo list-item
	newTodoEl.classList.add('list-group-item');

	// set content of new todo list-item to whatever the user entered
	newTodoEl.innerText = todoDescription;

	// add new todo list-item to list of todos
	todosEl.append(newTodoEl);

	// PROFIT! 💰
});
