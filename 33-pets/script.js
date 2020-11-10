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

let ourPets;

console.log("Getting all pets...");
getJSON('pets/pets.json', (err, res) => {
	console.log("Got the pets!");

	if (err) {
		document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">Y U HAVE NO PETS? ERROR CODE ${err}!</div>`;

	} else {
		// start a request to each item in result
		ourPets = res;
	}
});

ourPets.forEach(pet => {
	getJSON(pet.url, (err, pets) => {
		console.log("Got moar pets!", pets);
	})
})
