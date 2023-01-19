export const englishPlayLive = (letter) => {
  const msg = new SpeechSynthesisUtterance();

  msg.text = letter;
  msg.voice = speechSynthesis
    .getVoices()
    .find((voice) => voice.voiceURI === "");
  window.speechSynthesis.speak(msg);
};
