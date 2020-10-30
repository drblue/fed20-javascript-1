/**
 * Guess My Number.
 *
 */

/*
1. En input-box där man kan gissa på ett tal. En knapp för att gissa.
  1.1. Visa resultatet i en alert.
*/

const cheatMode = true;
const formGuess = document.querySelector('#form-guess');
const turnout = document.querySelector('#turnout');
const btnGiveup = document.querySelector('#btn-giveup');

// Slumpa ut ett tal att gissa på
const getRandomNumber = function(max = 10) {
	return Math.ceil(Math.random() * max);
};

let correctNumber;
let guesses;

const startGame = function() {
	// get a random number
	correctNumber = getRandomNumber();

	// reset guesses to zero
	guesses = 0;
	document.querySelector('#guesses').innerHTML = ``;

	// cheat? enter KONAMI-code
	if (cheatMode) {
		document.querySelector('#imma-cheat').innerText = correctNumber;
	}

	// make all pretty images hidden
	turnout.className = "";

	// empty 'guess number' input field
	document.querySelector('#input-guess').value = "";
}
startGame();

// Reagera på när någon klickar på gissa-knappen eller trycker i formuläret
formGuess.addEventListener('submit', function(e) {
	// Stoppa formuläret från att skickas till servern
	e.preventDefault();
	console.log("Look at all my guesses");

	// Öka antalet gissningar användaren gjort
	guesses++;
	document.querySelector('#guesses').innerHTML = `Guesses: <strong>${guesses}</strong>`;

	// Ta reda på vad användaren gissat på
	const guessedNumber = Number(document.querySelector('#input-guess').value);

	// Jämföra användarens gissning med det rätta talet
	if (guessedNumber === correctNumber) {
		// Det gissade talet var rätt
		turnout.className = "correct";
	} else if (guessedNumber > correctNumber) {
		// Det gissade talet var för högt
		turnout.className = "too-high";
	} else if (guessedNumber < correctNumber) {
		// Det gissade talet var för lågt
		turnout.className = "too-low";
	}
});

btnGiveup.addEventListener('click', function() {
	console.log("CLickety click");
	// Slumpa ut ett nytt tal och nollställ antalet gissningar
	startGame();
});
