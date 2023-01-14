import { morseCodeDictionary } from "./dictionary.js";

// Initial Start Up Code
let pressOnce = true;

const playMorseLive = (letter, live) => {
  var AudioContext = window.AudioContext;
  var ctx = new AudioContext();
  var dot = 1.2 / 15;
  var t = ctx.currentTime;

  var oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 600;

  var gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, t);

  const setValuePerChar = (char) => {
    switch (char) {
      case ".":
        gainNode.gain.setValueAtTime(1, t);
        t += dot;
        gainNode.gain.setValueAtTime(0, t);
        t += dot;
        break;
      case "-":
        gainNode.gain.setValueAtTime(1, t);
        t += 3 * dot;
        gainNode.gain.setValueAtTime(0, t);
        t += dot;
        break;
      case " ":
        t += 7 * dot;
        break;
    }
  };
  if (live == true) {
    setValuePerChar(letter);
  } else {
    letter.split("").forEach((char) => {
      setValuePerChar(char);
    });
    let i = 0
    setInterval(() => {
      i++
      if( i == letter.length) {
        pressOnce = true
      }
    }, 200);
  }
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.start();
};

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
