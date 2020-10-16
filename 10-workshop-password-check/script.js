/**
 * Workshop: Password Checker
 * Lesson: 2
 * Link: https://fed20.thehiveresistance.com/javascript-1-dag-2-null-undefined-type-conversion-template-literals-and-arrays/
 */

let password;
password = "password"; // inte giltigt
// password = "p@ssword"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

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
	}
}

console.log(`🕵🏻‍♂️ Checking password '${password}'`);

if (password.length >= 8 && passwordHasSpecialChar) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}
