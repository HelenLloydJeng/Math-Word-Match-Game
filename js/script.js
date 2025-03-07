// Array for numbers 1 to 20
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// Array for number words (1 to 20)
const numberWords = [
    "One", "Two", "Three", "Four", "Five", 
    "Six", "Seven", "Eight", "Nine", "Ten", 
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"
];

let choiceOne;
let choiceTwo;
let choiceOneElement;
let choiceTwoElement;
// Initialize score variable
let score = 0;


// Function to create buttons
function createButtons(containerId, values, type) {
    const container = document.getElementById(containerId);
    const elements = [];


    values.forEach((value, index) => {
        const button = document.createElement("button");
        button.textContent = value;
        button.classList.add("btn", "btn-outline-primary", "m-2", "game-button");
        button.setAttribute("data-type", type);
        button.setAttribute("data-value", type === 'word' ? numbers[index] : value.toString().toLowerCase());
        elements.push(button)

        button.addEventListener("click", (e) => {
            setChoices(e.target);
    
        })
    });

    // Shuffle the elements array
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]];
    }

    // Append shuffled elements to container
    elements.forEach(button => {
        container.appendChild(button);
    });
}

function setChoices(element) {
    const isNumber = element.dataset.type === 'number';
    const isWord = element.dataset.type === 'word';
    
    // Prevent selecting from the same list twice
    if (choiceOne && (
        (isNumber && choiceOneElement.dataset.type === 'number') ||
        (isWord && choiceOneElement.dataset.type === 'word')
    )) {
        return;
    }

    // If no first choice made yet
    if (!choiceOne) {
        choiceOne = element.dataset.value;
        choiceOneElement = element;
        element.classList.add("clicked");
    }
    // If first choice exists but no second choice
    else if (!choiceTwo && element !== choiceOneElement) {
        choiceTwo = element.dataset.value;
        choiceTwoElement = element;
        element.classList.add("clicked");
        checkChoices();
    }
}

function checkChoices() { 
    if (choiceOne === choiceTwo) {
            Swal.fire({
            position: "top",
            icon: "success",
            title: "Correct!",
            showConfirmButton: true,
            customClass: {
                popup: "custom-success-popup",
                title: "custom-popup-title",
                confirmButton: "custom-popup-button"
            }
                     
          }).then(() => resetGame());
    } else {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "You're wrong",
            showConfirmButton: true,
            customClass: {
                popup: "custom-error-popup",
                title: "custom-popup-title",
                confirmButton: "custom-popup-button"
            }
           
                     }).then(() => resetGame());
    }
}
function resetGame() {
    choiceOneElement.classList.remove('clicked')
    choiceTwoElement.classList.remove('clicked')
    choiceOne = null
    choiceTwo = null
    choiceOneElement = null
    choiceTwoElement = null
}

// Generate number and word buttons
createButtons("number-buttons", numbers, "number");
createButtons("word-buttons", numberWords, "word");