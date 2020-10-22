/**
 * DOM - Document Object Model
 *
 */

// document.querySelectorAll('p').forEach(paragraph => {
// 	console.log("Hello I am a paragraph:", paragraph);
// 	console.log("innerText:", paragraph.innerText);
// 	console.log("innerHTML:", paragraph.innerHTML);
// });

const errorDiv = document.querySelector('div.error');

// innerHTML retrieves the content inside the element,
// *INCLUDING* HTML-child-elements and whitespaces
console.log("errorDiv innerHTML:", errorDiv.innerHTML);

// innerText retrieves ONLY the *VISIBLE* text inside the element and
// ALL text from child elements, and removes any whitespaces
console.log("errorDiv innerText:", errorDiv.innerText);

// textContent retrives ALL text from inside the element and ALL text
// from child elements, including whitespaces
console.log("errorDiv textContent:", errorDiv.textContent);
