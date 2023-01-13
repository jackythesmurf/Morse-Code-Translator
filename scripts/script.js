import {morseCodeDictionary} from "./dictionary.js";

const translate = (englishInput) => {
    let translation = ""
    for (let char of englishInput){
        let morseCode = morseCodeDictionary[char]
        if (morseCode == undefined){
            morseCode=''
        } else {
            translation +=  morseCode + " "
        }
    }
    return translation
}

const showOutput = (englishInput) => {
    const morseTextBox = document.querySelector("#morsecode-output");
    morseTextBox.innerHTML = translate(englishInput);
}

const main = () => {
    const englishTextBox = document.querySelector("#english-input");

    // sources the live input of user
    englishTextBox.addEventListener("input", function () {
        let englishInput = englishTextBox.value.toUpperCase();
        showOutput(englishInput)
    })
}

window.onload = main;