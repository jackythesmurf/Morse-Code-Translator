import { morseCodeDictionary } from "./dictionary.js";
import { liveSound } from "./sound.js";
import { playSound } from "./sound.js";

let active = true;
const playMorseLive = (letter) => {
  let currentMorseCode = document.querySelector("#output").innerHTML;
  var AudioContext = window.AudioContext;
  var ctx = new AudioContext();
  var dot = 1.2 / 15;
  var t = ctx.currentTime;

  var oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 600;

  var gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, t);

  switch (letter) {
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
  if (active == false) {
    return;
  }
  const morseTextBox = document.querySelector("#output");
  let translatedTxt = translate(englishInput);
  let i = 0;

  morseTextBox.innerHTML = "";

  const textType = setInterval(() => {
    active = false;
    morseTextBox.innerHTML += translatedTxt[i];
    playMorseLive(translatedTxt[i]);
    i++;
    if (translatedTxt.length === i) {
      active = true;

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
    showOutput(englishInput);
  });

  playSound.addEventListener("click", () => {
    if (active == false) {
        return;
      }
    let currentMorseCode = document.querySelector("#output").innerHTML;
    var AudioContext = window.AudioContext;
    var ctx = new AudioContext();
    var dot = 1.2 / 15;
    var t = ctx.currentTime;

    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);
    console.log(currentMorseCode);

    currentMorseCode.split("").forEach(function (letter) {
      switch (letter) {
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
    });

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
  });
};

window.onload = main;
