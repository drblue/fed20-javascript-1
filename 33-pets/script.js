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

console.log("Getting all pets...");
getJSON('pets/pets.json', (err, res) => {
	console.log("Got the pets!");

	if (err) {
		document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">Y U HAVE NO PETS? ERROR CODE ${err}!</div>`;

	} else {
		// iterate over result
		res.forEach(species => {
			// start a request to species.url
			console.log(`Fetching ${species.type}...`);

			getJSON(species.url, (err, animals) => {
				console.log(`Got ${species.type}...`);

				const output =
					animals
						.map(animal => `<li>${animal.name} is ${animal.age} years old</li>`)
						.join('');

				document.querySelector('#output').innerHTML += `<h2>${species.type}</h2><ul>${output}</ul>`;
			});
		});
	}
});
