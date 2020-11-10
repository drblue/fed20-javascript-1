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
