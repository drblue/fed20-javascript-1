/**
 * PROMISES
 *
 */

/*
const teacherIsNice = true;

const willWeGetAnswersToTheExam = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (teacherIsNice) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
}

const studentHappiness = willWeGetAnswersToTheExam();
console.log("We're still not sure about that promise...");

studentHappiness.then(() => {
	alert("🥳 Promise has been fulfilled! YAY!");
}).catch(() => {
	alert("😔 YOU ALWAYS MAKE PROMISES BUT NEVER HOLD THEM!");
});

console.log("You have reached the end.");
*/

const getJSON = url => {
	return new Promise((resolve, reject) => {
		// do stuff
		// then, resolve or reject

		// create new request
		const request = new XMLHttpRequest();

		// add event listener, that when finished, either resolves or rejects the promise
		request.addEventListener('readystatechange', () => {
			if (request.readyState === 4) {
				if (request.status === 200) {
					const response = JSON.parse(request.responseText);

					// resolve promise and pass along the data we recieved
					resolve(response);

				} else {
					// something went wrong, reject promise
					reject(request.status);
				}
			}
		});

		// send request
		request.open('GET', url);
		request.send();
	});
}

console.log("Requesting 🐾...");

// Promise Chaining
getJSON('pets/dogs.json')
.then(dogs => {
	console.log("Got dogs!", dogs);

	// get dem damn cats too
	return getJSON('pets/cats.json');
})
.then(cats => {
	console.log("Got cats!", cats);

	return getJSON('pets/birds.json');
})
.then(birds => {
	console.log("Got dem birds", birds);

})
.catch(err => {
	console.error("Who let the pets out?", err);
});

console.log("We've been promised puppies, lets see...");
