/**
 * FETCH
 *
 */

/*
// Fetch data from `pets/dogs.json`
fetch('pets/dogs.json')
// THEN convert it from JSON
.then(res => res.json())
// THEN use the converted data
.then(data => {
	document.querySelector('#output').innerHTML +=
		data.map(dog => `<li>🐶 ${dog.name} is ${dog.age} years old.</li>`).join('');
})
// CATCH if something goes wrong
.catch(err => {
	console.error("Something went wrong with the fetch", err);
});
*/

fetch('https://swapi.dev/api/people/')
.then(res => res.json())
.then(data => {
	// use data
	const peopleCards = data.results.map(person => {
		return `
			<div class="col-sm-6 col-md-4 col-lg-3">
				<div class="card mb-3 text-dark">
					<div class="card-body">
						<h2 class="h5 card-title">${person.name}</h2>
						<ul>
							<li>Gender: ${person.gender}</li>
							<li>Height: ${person.height} cm</li>
							<li>Weight: ${person.mass} kg</li>
						</ul>
					</div>
				</div>
			</div>
		`;
	}).join('');

	document.querySelector('#output').innerHTML += `<div class="row">${peopleCards}</div>`;
})
.catch(err => {
	document.querySelector('#errors').innerHTML += `<div class="alert alert-warning">Something went wrong: ${err}</div>`
});
