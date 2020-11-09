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
			console.log("Request returned successful!", request.responseText);
		} else {
			// something went wrong
			// request returned battle-damanged
			console.log("Request was unsuccessful 🥺");
		}
	}
});

// open connection to URL
request.open('GET', 'https://qwerwertretertetrertte.com');

// fire away request
request.send();

console.log("Request sent...");
