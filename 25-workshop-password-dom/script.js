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

// isPasswordSecure("password");
// isPasswordSecure("secret");
// isPasswordSecure("secret-password");

/*
let passwords = [
	"secret", // osäker
	"p@ssword", // säker
	"pa$$word", // säker
	"secretpassword", // osäker
	"secret-password", // säker
	"such-password-much-secure-very-long" // säker
];

passwords.forEach((item, index) => {
	console.log("Inside forEach-loop", index, item);

	const result = isPasswordSecure(item);
	if (result) {
		console.log(`🔐 Password '${item}' is secure`);
	} else {
		console.log(`🚨 Password '${item}' is *NOT* secure`);
	}
});
*/
