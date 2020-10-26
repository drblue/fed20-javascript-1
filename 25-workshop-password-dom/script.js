/**
 * Workshop: Password Checker (DOM-edition)
 * Lesson: 6
 * Link: https://fed20.thehiveresistance.com/javascript-1-dag-6-objekt-document-object-model-dom/
 *
 * Skapa ett input-fält där användaren kan skriva in ett lösenord och klicka
 * på en knapp för att få reda på om lösenordet är säkert eller ej.
 *
 * Börja med att meddela användaren via en alert()-ruta, men ett stort plus om
 * du kan få till det så resultatet visas på sidan i en Bootstrap Alert, och
 * att den är av typen danger om det är ett osäkert lösenord och av typen
 * success om det är ett säkert lösenord.
 *
 * Kan du även göra så att input-fältet töms efter varje lösenords-test?
 *
 */

const btnCheckPasswordEl = document.querySelector('#btnCheckPassword');
const inputPasswordEl = document.querySelector('#inputPassword');

const isPasswordSecure = function(password) {
	const specialChars = [
		"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
	];

	let passwordHasSpecialChar = false;
	// loop over specialChars
	for (let i = 0; i < specialChars.length; i++) {
		// does password include the char we're at?
		if (password.includes(specialChars[i])) {
			// yep, it did. set status variable to true!
			passwordHasSpecialChar = true;
			break;
		}
	}

	if (password.length >= 8 && passwordHasSpecialChar) {
		return true;

	} else if (password.length >= 12 && password.includes('-')) {
		return true;

	} else if (password.length >= 16) {
		return true;

	} else {
		return false;
	}
}

// react to the event of a user clicking on the btnCheckPassword-button
// or: ON the btnCheckPassword-button, react to the EVENT of a CLICK
btnCheckPasswordEl.addEventListener('click', () => {
	const inputPassword = inputPasswordEl.value;

	const secure = isPasswordSecure(inputPassword);
	if (secure) {
		alert(`✅ The password "${inputPassword}" is secure!`);
	} else {
		alert(`🚨 The password "${inputPassword}" is NOT secure!`);
	}
});
