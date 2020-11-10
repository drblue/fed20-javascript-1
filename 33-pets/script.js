/**
 * PETS
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
				callback(request.status);
			}
		}
	});

	request.open('GET', url);
	request.send();
}

getJSON('pets/dogs.json', (err, dogs) => {
	if (err) {
		document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">WHO LET THE DOGS OUT?! ERROR CODE ${err}! 🐶</div>`;

	} else {
		document.querySelector('#dogs').innerHTML =
			dogs
				.map(dog => `<li>${dog.name} is ${dog.age} years old.</li>`)
				.join('');
	}
});
