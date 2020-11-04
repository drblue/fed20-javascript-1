/**
 * Workshop: TODOS
 * Lesson: 10
 * Link: https://fed20.thehiveresistance.com/javascript-dag-10-array-sort-och-filter/
 *
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
		html += `
			<li class="todo list-group-item ${todo.completed ? 'completed' : 'incomplete'}" data-index="${index}">
				<span class="todo-title">${todo.title}</span>
				<button class="btn btn-danger btn-sm">X</button>
			</li>
		`;
	});

	todosEl.innerHTML = html;
}
renderTodos();

// add click listener to the actual list, and check if the clicked target is
// a list-item, and only then remove it
todosEl.addEventListener('click', e => {
	if (e.target.tagName === "SPAN") {
		// user clicked on a todo title, so toggle its `completed` status

		// get index from parent `li`-element
		const todoIndex = e.target.parentElement.dataset.index; // `<li data-index>`

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

	// empty input-field
	newTodoDescriptionEl.value = "";

	// PROFIT! 💰
});

// handle user resetting the "New Todo" form
newTodoFormEl.addEventListener('reset', e => {
	document.querySelector('#it-crowd-reset').classList.add('show');

	setTimeout(() => {
		document.querySelector('#it-crowd-reset').classList.remove('show');
	}, 3000);
});
