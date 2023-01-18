import { translate } from "./translate.js";
import { morseCodeDictionary } from "./dictionary.js";
import { englishDictionary } from "./dictionary.js";
import { playMorseLive } from "./audioMorse.js";

export const showOutput = (inputStr, languageToTranslate, PRESS_ONCE, CTX) => {
  const outputTextBox = document.querySelector("#output");
  outputTextBox.innerHTML = "";
  if (languageToTranslate === "english") {
    let translatedTxt = translate(inputStr, " ", "", morseCodeDictionary);
    let i = 0;

    const textType = setInterval(() => {
      outputTextBox.innerHTML += translatedTxt[i];
      playMorseLive(translatedTxt[i], true, PRESS_ONCE, CTX);
      i++;
      if (translatedTxt.length === i) {
        PRESS_ONCE[0] = true;
        clearInterval(textType);
      }
    }, 200);
    return translatedTxt;
  }
};
