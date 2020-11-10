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

console.log("Getting the dogs...");
getJSON('pets/dogs.json', (err, dogs) => {
	console.log("Got dem dogs!");

	if (err) {
		document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">WHO LET THE DOGS OUT?! ERROR CODE ${err}! 🐶</div>`;

	} else {
		document.querySelector('#dogs').innerHTML =
			dogs
				.map(dog => `<li>${dog.name} is ${dog.age} years old.</li>`)
				.join('');
	}
});

console.log("Getting the cats...");
getJSON('pets/cats.json', (err, cats) => {
	console.log("Got ze cats!");

	if (err) {
		document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">Cat said: No. (ERROR CODE ${err})</div>`;

	} else {
		document.querySelector('#cats').innerHTML =
			cats
				.map(cat => `<li>${cat.name} is ${cat.age} years old.</li>`)
				.join('');
	}
});
