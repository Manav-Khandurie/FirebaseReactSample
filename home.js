// Get the button element by its id
const changeTextButton = document.getElementById('change-text-button');

// Get the header element by its id
const header = document.getElementById('header');

// Function to change the header text
function changeHeaderText() {
    header.textContent = 'New Header Text!';
}

// Add a click event listener to the button
changeTextButton.addEventListener('click', changeHeaderText);
