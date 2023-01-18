import { translate } from "./translate.js";
import { playMorseLive } from "./audioMorse.js";
import { showOutput } from "./displayTxt.js";
import { englishPlayLive } from "./audioEnglish.js";

// Initial Start Up Code
let PRESS_ONCE = [true];
let AUDIOCONTEXT = window.AudioContext;
let CTX = new AUDIOCONTEXT();

const main = () => {
  const englishTextBox = document.querySelector("#input");
  const translateButton = document.querySelector("#translate-button");
  const playSound = document.querySelector("#playbutton");
  const switchTranslation = document.querySelector("#switchbutton");

  let languageToTranslate = "english";

  switchTranslation.addEventListener("click", () => {
    let inputLanguage = document.querySelector("#original-language")
    let outputLanguage = document.querySelector("#translated-language")
    if (languageToTranslate==="english"){
      languageToTranslate = "morse"
      inputLanguage.innerHTML = "Type Morse Code Here =>"
      outputLanguage.innerHTML = "Translated English =>"
    } else if (languageToTranslate==="morse"){
      languageToTranslate = "english"
      inputLanguage.innerHTML = "Type English Here =>"
      outputLanguage.innerHTML = "Translated Morse Code =>"
    }
  })

  translateButton.addEventListener("click", () => {
    if (languageToTranslate === "english") {
      let input = englishTextBox.value.toUpperCase();
      if (PRESS_ONCE[0]) {
        showOutput(input, "english", PRESS_ONCE, CTX);
        PRESS_ONCE[0] = false;
      }
    } else if (languageToTranslate==="morse") {
      englishPlayLive("hi there", true)

    }
  });
  playSound.addEventListener("click", () => {
    let output = document.querySelector("#output").innerHTML;
    if (languageToTranslate === "english") {
      if (PRESS_ONCE[0]) {
        playMorseLive(output, false, PRESS_ONCE, CTX);
        PRESS_ONCE[0] = false;
      }
    } else if (languageToTranslate==="morse") {

    }
  });
};

window.onload = main;
