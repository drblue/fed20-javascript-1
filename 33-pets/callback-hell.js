/**
 * CALLBACK HELL
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

getJSON('pets/birds.json', (err, birds) => {
	getJSON('pets/cats.json', (err, cats) => {
		getJSON('pets/dogs.json', (err, dogs) => {
			getJSON('pets/hamsters.json', (err, hamsters) => {
				getJSON('pets/bunnies.json', (err, bunnies) => {
					// THEY'RE SO FLUFFY!

				});
			});
		})
	})
});
