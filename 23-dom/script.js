/**
 * DOM - Document Object Model
 *
 */

const siteTitle = document.querySelector('h1');
console.log("siteTitle:", siteTitle, typeof siteTitle);
console.log("siteTitle innerText is:", siteTitle.innerText);

siteTitle.innerText = "The DOM is DUMB";

const popupButton = document.querySelector('button');
console.log("popupButton:", popupButton, typeof popupButton);
console.log("popupButton innerText is:", popupButton.innerText);

popupButton.innerText = "You have clicked me 6 times, don't you have some other button to disturb?";

const paragraphs = document.querySelectorAll('p');
console.log("paragraphs:", paragraphs);
console.log("paragraphs[0]:", paragraphs[0]);
console.log("paragraphs.length:", paragraphs.length);

const errorParagraph = document.querySelector('p.error');
errorParagraph.innerText = "SO. MANY. ERRORS.";
