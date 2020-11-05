/**
 * Workshop: TODOS
 * Lesson: 10
 * Link: https://fed20.thehiveresistance.com/javascript-dag-10-array-sort-och-filter/
 *
 * Steg 1
 * Lägg till ett ID på varje TODO-objekt.
 *
 * Steg 2
 * Rendera ut varje TODO's ID till DOM istället för dess array-index.
 *
 * Steg 3
 * Uppdatera click-eventhandler:n så att den hämtar ID från förälderns
 * data-attribut istället för index. Använd sedan detta ID för att hitta rätt
 * TODO i `todos`-array:en.
 *
 * Steg 4 (extra utmaning)
 * När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut
 * det högsta ID som finns och tar +1 på det, och använder det talet som den
 * nya TODO:ns ID.
 *
 */

const newTodoFormEl = document.querySelector('#new-todo-form');
const todosEl = document.querySelector('#todos');
const newTodoDescriptionEl = document.querySelector('#new-todo-description');
const todoCounterEl = document.querySelector('#todo-count');

const todos = [
	{
		id: 1,
		title: "Code",
		completed: true
	},
	{
		id: 42,
		title: "Sleep",
		completed: false
	},
	{
		id: 3,
		title: "Repeat",
		completed: true
	}
];

// Get HTML for TODO List
// Receives an array of TODOs and
// Returns a string of HTML
const getHtmlForTodoList = todoList => {
	// loop over list of todos, and transform (map) each todo into an HTML string
	const output = todoList.map(todo => {
		return `
			<li class="todo list-group-item bg-dark text-white ${todo.completed ? 'completed' : 'incomplete'}" data-id="${todo.id}">
				<span class="todo-title">${todo.title}</span>
				<button class="btn btn-danger btn-sm">X</button>
			</li>
		`;
	});

	// return variable with HTML
	return output.join('');
}

const renderTodos = () => {
	// filter todos
	const incompleteTodos = todos.filter(todo => !todo.completed);
	const completedTodos = todos.filter(todo => todo.completed);

	// output todos to DOM
	document.querySelector('#todos').innerHTML = getHtmlForTodoList(incompleteTodos);
	document.querySelector('#completed-todos').innerHTML = getHtmlForTodoList(completedTodos);
}
renderTodos();

// add click listener to both todo-lists, and check if the clicked target is
// a list-item, and take appropriate action
document.querySelectorAll('.todos').forEach(todolist => {
	todolist.addEventListener('click', e => {
		if (e.target.tagName === "SPAN") {
			// user clicked on a todo title, so toggle its `completed` status

			// get index from parent `li`-element
			const todoId = e.target.parentElement.dataset.id; // `<li data-id>`

			// FIND todo with `id` of `todoId` from `todos`-array
			const todo = todos.find(todo => {
				return (todo.id == todoId);
			});

			// invert its completed-status
			todo.completed = !todo.completed;

			// render new todo-list
			renderTodos();

		} else if (e.target.tagName === "BUTTON") {
			// user clicked on the big red X-button, so we need to ask our parent
			// for the index of the todo
			const targetTodoId = e.target.parentElement.dataset.id;
			const todoIndex = todos.findIndex(todo => todo.id == targetTodoId);

			todos.splice(todoIndex, 1);

			// render new todo-list
			renderTodos();
		}
	});
})

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

	const max = todos.reduce((maxId, todo) => {
		return todo.id > maxId
			? todo.id
			: maxId;
	}, 0);

	// add todo to (array-)list of todos
	todos.push({
		id: max + 1,
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
