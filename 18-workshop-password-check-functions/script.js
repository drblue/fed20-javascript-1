/**
 * Workshop: Password Checker using Functions
 * Lesson: 4
 * Link: https://fed20.thehiveresistance.com/javascript-1-dag-4-truthiness-functions-102-callbacks-foreach/
 *
 * Skriv om lösenordskollen till att använda funktioner (inkl. forEach) och
 * kollar en lista av lösenord.
 *
 * Ni ska ha en funktion som tar emot ett lösenord och validerar det. Den ska
 * returnera true om det är ett tillräckligt säkert lösenord, eller false om
 * det inte uppfyller kraven.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 *
 * ROADMAP
 *
 * 1. Skapa en array som alla lösenord ligger i.
 *
 * 2.1. Flytta logiken som kollar om lösenordet uppfyller kraven till en egen
 * funktion.
 *
 * 2.2. Kalla på funktionen en gång för varje lösenord i array:en och skicka
 * med lösenordet till funktionen.
 *
 * 3. Ändra så att funktionen returnerar true/false istället för att logga till
 * konsollen.
 *
 * 4. Ändra itereringen (loopningen) för lösenorden till att vara en anonym
 * funktion som i sin tur kallar på valideringen, men sparar resultatet och
 * loggar det till konsollen.
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
