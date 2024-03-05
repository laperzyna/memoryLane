// create a new Date object
const now = new Date();
const dateString = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// get the element by ID
const dateElement = document.getElementById('date');

// set the date
dateElement.textContent = dateString;
