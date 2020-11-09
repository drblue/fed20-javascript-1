/**
 * ASYNCHRONOUS JAVASCRIPT
 * using XMLHttpRequest
 * to <https://jsonplaceholder.typicode.com/posts>
 *
 */

const request = new XMLHttpRequest();

// tell request that we want to be updated when it's status changes
request.addEventListener('readystatechange', () => {
	// check if readyState of request is 4 (=== DONE)
	if (request.readyState === 4) {
		// request is DONE!

		if (request.status === 200) {
			// we're successful!
			console.log("Request returned successful!");

			// parse responseText into JavaScript array of objects
			const response = JSON.parse(request.responseText);

			// loop over response and console.log every title
			response.forEach(item => {
				// console.log(`Post title: "${item.title}"`);
				document.querySelector('#posts').innerHTML += `<li>${item.title}</li>`
			});

		} else {
			// something went wrong
			// request returned battle-damanged
			console.log("Request was unsuccessful 🥺");
		}
	}
});

// open connection to URL
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// fire away request
request.send();

console.log("Request sent...");


/**
 * GET USERS
 */

const requestUsers = new XMLHttpRequest();

// tell request that we want to be updated when it's status changes
requestUsers.addEventListener('readystatechange', () => {
	// check if readyState of request is 4 (=== DONE)
	if (requestUsers.readyState === 4) {
		// request is DONE!

		if (requestUsers.status === 200) {
			// we're successful!
			console.log("Request returned successful!");

			// parse responseText into JavaScript array of objects
			const response = JSON.parse(requestUsers.responseText);

			// loop over response and console.log every title
			response.forEach(item => {
				// console.log(`Post title: "${item.title}"`);
				document.querySelector('#users').innerHTML += `<li>${item.name}</li>`
			});

		} else {
			// something went wrong
			// request returned battle-damanged
			console.log("Request for users was unsuccessful 🥺");
		}
	}
});

// open connection to URL
requestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');

// fire away request
requestUsers.send();

console.log("Request for users sent...");
