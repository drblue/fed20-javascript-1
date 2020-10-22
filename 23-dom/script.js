/**
 * DOM - Document Object Model
 *
 */

// const errorDiv = document.querySelector('div.error');
const firstLink = document.querySelector('#link-1');
console.log("firstLink href:", firstLink.getAttribute('href'));

const image = document.querySelector('img');
console.log("image src:", image.getAttribute('src'));
console.log("image alt:", image.getAttribute('alt'));
console.log("image class:", image.getAttribute('class'));

// change image src
image.setAttribute('src', 'https://i.imgur.com/FcBXQKk.jpeg');
