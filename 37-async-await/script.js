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
