/**
 * FETCH
 *
 */

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
