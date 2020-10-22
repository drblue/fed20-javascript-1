/**
 * DOM - Document Object Model
 *
 */

const alertDiv = document.querySelector('div.alert');

// get an elements classes
console.log(alertDiv.classList);

// add a class to an element
alertDiv.classList.add("error");

// remove a class from an element
alertDiv.classList.remove("error");

// toggle a class on/off on an element
alertDiv.classList.toggle("error");
