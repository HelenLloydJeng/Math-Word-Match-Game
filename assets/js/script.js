/* jshint esversion: 6 */
/* global Swal */


// Array of number-word pairs
const numberPairs = [
  { number: 1, word: "One" },
  { number: 2, word: "Two" },
  { number: 3, word: "Three" },
  { number: 4, word: "Four" },
  { number: 5, word: "Five" },
  { number: 6, word: "Six" },
  { number: 7, word: "Seven" },
  { number: 8, word: "Eight" },
  { number: 9, word: "Nine" },
  { number: 10, word: "Ten" }
];

let choiceOne;
let choiceTwo;
let choiceOneElement;
let choiceTwoElement;
let score = 0;

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to create buttons
function createButtons(containerId, values, type) {
    const container = document.getElementById(containerId);
    const elements = [];

    values.forEach((value) => {
        const button = document.createElement("button");
        button.textContent = value;
        button.classList.add("btn", "btn-outline-primary", "m-2", "game-button");
        button.setAttribute("data-type", type);

        if (type === "number") {
            button.setAttribute("data-value", value.toString());
        } else {
            const numberEquivalent = numberPairs.find(pair => pair.word === value).number;
            button.setAttribute("data-value", numberEquivalent.toString());
        }

        elements.push(button);

        button.addEventListener("click", (e) => {
            setChoices(e.target);
        });
    });

    // Shuffle display order of buttons
    for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]];
    }

    elements.forEach((button) => container.appendChild(button));
}

// Set choices
function setChoices(element) {
    const isNumber = element.dataset.type === "number";
    const isWord = element.dataset.type === "word";

    // Prevent selecting from the same list twice
    if (
        choiceOne &&
        ((isNumber && choiceOneElement.dataset.type === "number") ||
        (isWord && choiceOneElement.dataset.type === "word"))
    ) {
        return;
    }

    if (!choiceOne) {
        choiceOne = element.dataset.value;
        choiceOneElement = element;
        element.classList.add("clicked");
    } else if (!choiceTwo && element !== choiceOneElement) {
        choiceTwo = element.dataset.value;
        choiceTwoElement = element;
        element.classList.add("clicked");
        checkChoices();
    }
}

// Check if choices match
function checkChoices() {
    if (choiceOne === choiceTwo) {
        choiceOneElement.classList.add("pop-out");
        choiceTwoElement.classList.add("pop-out");

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Correct!",
            showConfirmButton: true,
            customClass: {
                popup: "custom-success-popup",
                title: "custom-popup-title",
                confirmButton: "custom-popup-button",
            },
        }).then(() => {
            setTimeout(() => {
                choiceOneElement.classList.remove("pop-out");
                choiceTwoElement.classList.remove("pop-out");
                updateScore(1);
                resetGame();
            }, 300);
        });
    } else {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Wrong! Try again.",
            showConfirmButton: true,
            customClass: {
                popup: "custom-error-popup",
                title: "custom-popup-title",
                confirmButton: "custom-popup-button",
            },
        }).then(() => resetGame());
    }
}

// Update score
function updateScore(points) {
    score += points;
    document.getElementById("score").textContent = score;
}

// Reset game
function resetGame(isNewGame = false) {
    if (choiceOneElement) choiceOneElement.classList.remove("clicked");
    if (choiceTwoElement) choiceTwoElement.classList.remove("clicked");

    choiceOne = null;
    choiceTwo = null;
    choiceOneElement = null;
    choiceTwoElement = null;

    if (isNewGame) {
        score = 0;
        document.getElementById("score").textContent = score;
    }

    // Clear buttons
    document.getElementById("number-buttons").innerHTML = "";
    document.getElementById("word-buttons").innerHTML = "";

    // Shuffle pairs
    shuffleArray(numberPairs);

    // Generate buttons from shuffled pairs
    const shuffledNumbers = numberPairs.map(pair => pair.number);
    const shuffledWords = numberPairs.map(pair => pair.word);

    createButtons("number-buttons", shuffledNumbers, "number");
    createButtons("word-buttons", shuffledWords, "word");
}

// Start button
document.getElementById("start-restart").addEventListener("click", function () {
    resetGame(true);
});

// Initial start
resetGame(true);
