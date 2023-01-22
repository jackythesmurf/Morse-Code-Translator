import { translate } from "./translate.js";
import { morseCodeDictionary } from "./dictionary.js";
import { englishDictionary } from "./dictionary.js";
import { playMorseLive } from "./audioMorse.js";
import { englishPlayLive } from "./audioEnglish.js";

export const showOutput = (inputStr, languageToTranslate, PRESS_ONCE, CTX) => {
  const outputTextBox = document.querySelector("#output");
  outputTextBox.value = "";
  if (languageToTranslate === "english") {
    let translatedTxt = translate(inputStr, " ", "", morseCodeDictionary);
    
    console.log("showoutput is running")
    let i = 0;
    const textType = setInterval(() => {
      outputTextBox.value += translatedTxt[i];
      playMorseLive(translatedTxt[i], true, PRESS_ONCE, CTX);
      i++;
      if (translatedTxt.length === i) {
        PRESS_ONCE[0] = true;
        clearInterval(textType);
      }
    }, 200);
    return translatedTxt;
  }
  if (languageToTranslate === "morse"){
    let i =0
    
    let translatedTxt = translate(inputStr, "", " ", englishDictionary)
    englishPlayLive(translatedTxt)
    const textType = setInterval(() => {
      outputTextBox.value += translatedTxt[i]
      i++
      if (translatedTxt.length === i) {
        clearInterval(textType)
      }
    }, 50)
    return translatedTxt
    
  }
};
