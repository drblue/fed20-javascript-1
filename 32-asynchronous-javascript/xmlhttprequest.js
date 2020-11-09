/**
 * ASYNCHRONOUS JAVASCRIPT
 * using XMLHttpRequest
 * to <https://jsonplaceholder.typicode.com/posts>
 *
 */

const getPosts = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			if (request.status === 200) {
				const response = JSON.parse(request.responseText);

				// send response to callback
				callback(response);

			} else {
				console.log("Request was unsuccessful 🥺");
			}
		}
	});

	request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
	request.send();
}

const renderPostsToHTML = (posts) => {
	posts.forEach(item => {
		document.querySelector('#posts').innerHTML += `<li>${item.title}</li>`
	});
}

const consoleLogPostTitles = (posts) => {
	posts.forEach(item => {
		console.log(item.title);
	});
}

getPosts(renderPostsToHTML);
getPosts(consoleLogPostTitles);
