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

const getPosts = (url, callback) => {
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

getPosts('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
	if (err) {
		document.querySelector('#posts').innerHTML = `<li>Something went wrong! Error code ${err}</li>`;

	} else {
		posts.forEach(item => {
			document.querySelector('#posts').innerHTML += `<li>${item.title}</li>`
		});
	}
});
