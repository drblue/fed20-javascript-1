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

const newTodoFormEl = document.querySelector('#new-todo-form');
const todosEl = document.querySelector('#todos');
const newTodoDescriptionEl = document.querySelector('#new-todo-description');

const todos = [
	{
		title: "Code",
		completed: false
	},
	{
		title: "Sleep",
		completed: true
	},
	{
		title: "Repeat",
		completed: true
	}
];

const renderTodos = () => {
	// empty HTML list of todos
	todosEl.innerHTML = "";

	// loop over each todo and create a list-item for each todo, and add them to the HTML list
	todos.forEach(todo => {
		// create elements 💥
		const todoEl = document.createElement('li');
		const todoTitleEl = document.createElement('span');
		const todoButtonEl = document.createElement('button');

		// add css classes
		todoEl.classList.add('todo', 'list-group-item');
		todoTitleEl.classList.add('todo-title');
		todoButtonEl.classList.add('btn', 'btn-danger', 'btn-sm');

		// if todo is completed, add css-class `completed` to the list-item
		if (todo.completed) {
			todoEl.classList.add('completed');
		}

		// set content
		todoTitleEl.innerText = todo.title;
		todoButtonEl.innerText = "X";

		// append span + button to list-item
		todoEl.append(todoTitleEl); // span
		todoEl.append(todoButtonEl); // button

		// FINALLY append list-item to ul
		todosEl.append(todoEl);
	});
}

// add click listener to the actual list, and check if the clicked target is
// a list-item, and only then remove it
todosEl.addEventListener('click', e => {
	if (e.target.tagName === "SPAN") {
		// user clicked on a todo title, so toggle its `completed` status
		todos.forEach(todo => {
			if (todo.title === e.target.innerText) {
				// we found it! invert `completed` status
				todo.completed = !todo.completed;
			}
		});

		// render new todo-list
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// user clicked on the big red X-button, so we need to find our sibling
		const clickedTodoTitle = e.target.previousElementSibling.innerText;

		todos.forEach((todo, index) => {
			if (todo.title === clickedTodoTitle) {
				// we found it! splice it!
				todos.splice(index, 1);
			}
		});

		// render new todo-list
		renderTodos();
	}
});

// handle user submitting the "New Todo" form
newTodoFormEl.addEventListener('submit', e => {
	// stop form from being submitted to the server, i.e. stop its default action
	e.preventDefault();

	// get description of new todo from input-field
	const todoDescription = newTodoDescriptionEl.value;

	if (todoDescription.length < 2) {
		alert("You need to enter more than that...");
		return;
	}

	// add todo to (array-)list of todos
	todos.push({
		title: todoDescription,
		completed: false
	});

	// render new list of todos to document
	renderTodos();

	// empty input-field
	newTodoDescriptionEl.value = "";

	// PROFIT! 💰
});

// handle user resetting the "New Todo" form
newTodoFormEl.addEventListener('reset', e => {
	document.querySelector('img').classList.remove('hide');
});

// render the initial todo-list
renderTodos();
