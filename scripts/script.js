import { morseCodeDictionary } from "./dictionary.js";
import {playMorseLive} from "./sound.js"
// Initial Start Up Code
let pressOnce = true;

const translate = (englishInput) => {
  let translation = "";
  for (let char of englishInput) {
    let morseCode = morseCodeDictionary[char];
    if (morseCode == undefined) {
      morseCode = "";
    } else {
      translation += morseCode + " ";
    }
  }
  return translation;
};

const showOutput = (englishInput) => {
  const morseTextBox = document.querySelector("#output");
  let translatedTxt = translate(englishInput);
  let i = 0;

  morseTextBox.innerHTML = "";
  const textType = setInterval(() => {
    morseTextBox.innerHTML += translatedTxt[i];
    playMorseLive(translatedTxt[i], true);
    i++;
    if (translatedTxt.length === i) {
      pressOnce = true;
      clearInterval(textType);
    }
  }, 200);

  return translatedTxt;
};

const main = () => {
  const englishTextBox = document.querySelector("#input");
  const translateButton = document.querySelector("#translate-button");
  const playSound = document.querySelector("#playbutton");

  // sources the live input of user

  translateButton.addEventListener("click", () => {
    let englishInput = englishTextBox.value.toUpperCase();
    if (pressOnce) {
      showOutput(englishInput);
      pressOnce = false;
    }
  });
  playSound.addEventListener("click", () => {
    let currentMorseCode = document.querySelector("#output").innerHTML;
    if (pressOnce) {
      playMorseLive(currentMorseCode);
      pressOnce = false;
    }
  });
};

window.onload = main;
