/**
 * @jest-environment jsdom
 */
import { createButtons } from "../script.js";

describe("Button Generation", () => {
    document.body.innerHTML = `
        <div id="number-buttons"></div>
        <div id="word-buttons"></div>
    `;

    test("should create 20 number buttons", () => {
        createButtons("number-buttons", Array.from({ length: 20 }, (_, i) => i + 1), "number");
        const numberButtons = document.querySelectorAll("#number-buttons button");
        expect(numberButtons.length).toBe(20);
    });


    test("should create 20 word buttons", () => {
        const numberWords = [
            "One", "Two", "Three", "Four", "Five", 
            "Six", "Seven", "Eight", "Nine", "Ten", 
            "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
            "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"
        ];
        createButtons("word-buttons", numberWords, "word");
        const wordButtons = document.querySelectorAll("#word-buttons button");
        expect(wordButtons.length).toBe(20);
    });

}); 

