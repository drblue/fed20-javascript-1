/**
 * ASYNCHRONOUS JAVASCRIPT
 * using XMLHttpRequest
 * to <https://jsonplaceholder.typicode.com/posts>
 *
 */

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
	if (request.readyState === 4) {
		if (request.status === 200) {
			const response = JSON.parse(request.responseText);

			response.forEach(item => {
				document.querySelector('#posts').innerHTML += `<li>${item.title}</li>`
			});

		} else {
			console.log("Request was unsuccessful 🥺");
		}
	}
});

request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request.send();

/**
 * GET USERS
 */

const requestUsers = new XMLHttpRequest();

requestUsers.addEventListener('readystatechange', () => {
	if (requestUsers.readyState === 4) {
		if (requestUsers.status === 200) {
			const response = JSON.parse(requestUsers.responseText);

			response.forEach(item => {
				document.querySelector('#users').innerHTML += `<li>${item.name}</li>`
			});

		} else {
			console.log("Request for users was unsuccessful 🥺");
		}
	}
});

requestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
requestUsers.send();
