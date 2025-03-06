
// Array for numbers 1 to 20
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// Array for number words (1 to 20)
const numberWords = [
    "One", "Two", "Three", "Four", "Five", 
    "Six", "Seven", "Eight", "Nine", "Ten", 
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"
];


// Function to create buttons
function createButtons(containerId, values, type) {
    const container = document.getElementById(containerId);
    
    values.forEach(value => {
        const button = document.createElement("button");
        button.textContent = value;
        button.classList.add("btn", "btn-outline-primary", "m-2", "game-button");
        button.setAttribute("data-type", type);
        button.setAttribute("data-value", value.toString().toLowerCase());
        container.appendChild(button);
    });
}

// Generate number and word buttons
createButtons("number-buttons", numbers, "number");
createButtons("word-buttons", numberWords, "word");


// Export for Jest
module.exports = { createButtons };

