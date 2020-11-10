/**
 * ASYNCHRONOUS JAVASCRIPT
 * using XMLHttpRequest
 * to <https://jsonplaceholder.typicode.com/posts>
 *
 * MINI-WORKSHOP: Skriv en funktion som kan hämta vilken URL som helst
 * och ÄNDÅ ta emot en callback som får både om något går fel OCH datan
 * från om requesten lyckas.
 *
 */

const getJSON = (url, callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			if (request.status === 200) {
				const response = JSON.parse(request.responseText);

				// send response to callback
				callback(undefined, response);

			} else {
				console.log("Request was unsuccessful 🥺");
				callback(request.status);
			}
		}
	});

	request.open('GET', url);
	request.send();
}

getJSON('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
	if (err) {
		document.querySelector('#posts').innerHTML = `<li>Something went wrong! Error code ${err}</li>`;

	} else {
		posts.forEach(item => {
			document.querySelector('#posts').innerHTML += `<li>${item.title}</li>`
		});
	}
});

getJSON('https://jsonplaceholder.typicode.com/users', (err, users) => {
	if (err) {
		document.querySelector('#users').innerHTML = `<li>Something went wrong! Error code ${err}</li>`;

	} else {
		users.forEach(item => {
			document.querySelector('#users').innerHTML += `<li>${item.name}</li>`
		});
	}
});

