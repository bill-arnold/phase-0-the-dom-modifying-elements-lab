// index.js

// Remove the existing 'main' element
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new 'h1' element
const newHeader = document.createElement('h1');

// Set the id attribute to 'victory'
newHeader.id = 'victory';

// Set the innerHTML with the desired message
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append the new 'h1' element to the body
document.body.appendChild(newHeader);
