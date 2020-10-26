/**
 * DOM - Document Object Model
 *
 */

const firstLink = document.querySelector('#link-1');
const firstLinkParent = firstLink.parentElement;

const firstParagraph = document.querySelector('.content p');
console.log("First paragraph:", firstParagraph);
console.log("First paragraphs parent is:", firstParagraph.parentElement);
console.log("First paragraphs next sibling is:", firstParagraph.nextElementSibling);
console.log("First paragraphs prev sibling is:", firstParagraph.previousElementSibling);

const content = document.querySelector('.content');
const contentParagraphs = content.querySelectorAll('p');
console.log("content paragraphs:", contentParagraphs);

// Array.from(content.children).forEach(child => {
// 	console.log("child:", child);
// })
