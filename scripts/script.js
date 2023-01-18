
import { translate } from "./translate.js";
import { playMorseLive } from "./audioMorse.js";
import { showOutput } from "./displayTxt.js";

// Initial Start Up Code
let PRESS_ONCE = [true];
let AUDIOCONTEXT = window.AudioContext;
let CTX = new AUDIOCONTEXT();


const main = () => {
  const englishTextBox = document.querySelector("#input");
  const translateButton = document.querySelector("#translate-button");
  const playSound = document.querySelector("#playbutton");

  translateButton.addEventListener("click", () => {
    let englishInput = englishTextBox.value.toUpperCase();
    if (PRESS_ONCE[0]) {
      showOutput(englishInput, "english", PRESS_ONCE, CTX);
      PRESS_ONCE[0] = false;
    }
  });
  playSound.addEventListener("click", () => {
    let currentMorseCode = document.querySelector("#output").innerHTML;
    if (PRESS_ONCE[0]) {
      playMorseLive(currentMorseCode, false, PRESS_ONCE, CTX );
      PRESS_ONCE[0] = false;
    }
  });
};

window.onload = main;
