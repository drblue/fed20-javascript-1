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
const todoCounterEl = document.querySelector('#todo-count');

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
	let html = "";

	// loop over each todo and create a list-item for each todo, and add them to the HTML list
	todos.forEach((todo, index) => {
		let cssClasses = (todo.completed)
			? "todo list-group-item completed"
			: "todo list-group-item incomplete";

		html += `
			<li class="${cssClasses}" data-index="${index}">
				<span class="todo-title">${todo.title}</span>
				<button class="btn btn-danger btn-sm">X</button>
			</li>
		`;
	});

	todosEl.innerHTML = html;
}

// add click listener to the actual list, and check if the clicked target is
// a list-item, and only then remove it
todosEl.addEventListener('click', e => {
	if (e.target.tagName === "SPAN") {
		// user clicked on a todo title, so toggle its `completed` status

		// get index from parent `li`-element
		const todoIndex = e.target.parentElement.dataset.index;

		// get todo from todos-array
		const todo = todos[todoIndex];

		// invert its completed-status
		todo.completed = !todo.completed;

		// render new todo-list
		renderTodos();

	} else if (e.target.tagName === "BUTTON") {
		// user clicked on the big red X-button, so we need to ask our parent
		// for the index of the todo
		const todoIndex = e.target.parentElement.dataset.index;
		todos.splice(todoIndex, 1);

		// render new todo-list
		renderTodos();

		// make user annoyed by initiating countdown
		startTodoCounter();
	}
});

// handle user submitting the "New Todo" form
newTodoFormEl.addEventListener('submit', e => {
	// stop form from being submitted to the server, i.e. stop its default action
	e.preventDefault();

	// get description of new todo from input-field
	const todoDescription = newTodoDescriptionEl.value.replace(/(<([^>]+)>)/ig, '');

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

	// make user annoyed by initiating countdown
	startTodoCounter();

	// empty input-field
	newTodoDescriptionEl.value = "";

	// PROFIT! 💰
});

// handle user resetting the "New Todo" form
newTodoFormEl.addEventListener('reset', e => {
	document.querySelector('img').classList.remove('hide');

	setTimeout(() => {
		document.querySelector('img').classList.add('hide');
	}, 3000);
});

// render the initial todo-list
renderTodos();

// get a random delay for scaring the user
const getRandomDelay = (max = 5000) => Math.ceil(Math.random() * max);

const showGhost = () => {
	document.querySelector('#boo').classList.add('scare');
	setTimeout(() => {
		hideGhost();
		scareTheUser();
	}, 500);
}
const hideGhost = () => {
	document.querySelector('#boo').classList.remove('scare');
}

const scareTheUser = () => {
	const delay = getRandomDelay();
	console.log(`Scaring the user in ${delay} milliseconds... MO-HA-HA-HA`)
	setTimeout(() => {
		showGhost();
	}, delay);
}
// scareTheUser();

const startTodoCounter = () => {
	let counter = 88;
	const counterIntervalId = setInterval(() => {
		counter--;
		todoCounterEl.innerText = counter;
		if (counter <= todos.length) {
			clearInterval(counterIntervalId);
		}
	}, 15);
}
startTodoCounter();
