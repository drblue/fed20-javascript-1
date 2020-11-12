/**
 * async/await
 *
 */

// WONT WORK!
/*
fetch('pets/pets.json')
	.then(res => res.json())
	.then(pets => {
		return fetch('pets/dogs.json')
			.then(res => res.json())
	})
	.then(dogs => {
		return fetch('pets/cats.json')
			.then(res => res.json())
	})
	.then(cats => {
		return fetch('pets/birds.json')
			.then(res => res.json())
	})
	.then(birds => {
		// FINALLY, all done
		console.log("FINALLY, all done!");
		console.log("Pets:", pets);
		console.log("Dogs:", dogs);
		console.log("Cats:", cats);
		console.log("Birds:", birds);
	})
	.catch(err => {
		console.error("Something went wrong with the fetching of the pets", err);
	});
*/

/*
// WILL WORK, BUT IS UGLY
fetch('pets/pets.json')
	.then(res => res.json())
	.then(pets => {
		fetch('pets/dogs.json')
			.then(res => res.json())
			.then(dogs => {
				fetch('pets/cats.json')
					.then(res => res.json())
					.then(cats => {
						fetch('pets/birds.json')
							.then(res => res.json())
							.then(birds => {
								// FINALLY, all done
								console.log("FINALLY, all done!");
								console.log("Pets:", pets);
								console.log("Dogs:", dogs);
								console.log("Cats:", cats);
								console.log("Birds:", birds);
							})
					})
			})
	})
	.catch(err => {
		console.error("Something went wrong with the fetching of the pets", err);
	});
*/

/*
const hello = () => {
	return "Hello";
}

const promisedHello = () => {
	return new Promise((resolve, reject) => {
		resolve("Hello");
	});
}

async function oldHello() {
	return "Hello";
}

const declarationHello = async function() {
	return "Hello";
}

const aHello = async () => {
	return "Hello from asyncHello function!";
}
aHello()
	.then(data => console.log("Success!", data))
	.catch(err => console.error("Promise was rejected!", err));
*/

/*
const getDogs = async () => {
	const response = await fetch('pets/dogs.json');
	const data = await response.json();

	return data;
}

const run = async () => {
	const dogs = await getDogs();
	console.log("Got dogs:", dogs);
}
run();
*/

// WILL WORK, *AND* IS READABLE AND ALSO PRETTY 😎
const searchStarWarsCharacters = async character => {
	const searchResult = await getJSON(`https://swapi.dev/api/people/?search=${character}`);
	return searchResult.results;
}

const getJSON = async url => {
	const res = await fetch(url);
	const data = await res.json();

	return data;
}

const getPets = async () => {
	const pets = await getJSON('pets/pets.json');
	const dogs = await getJSON('pets/dogs.json');
	const cats = await getJSON('pets/cats.json');
	const birds = await getJSON('pets/birds.json');

	console.log('Here be pets!', pets, dogs, cats, birds);
}
getPets();
