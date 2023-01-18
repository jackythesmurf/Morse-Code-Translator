export const englishPlayLive = (letter, live) => {
  const msg = new SpeechSynthesisUtterance();
  // Check if element is from input or from output
  // if (element.id === "input") {
  // 	msg.text = element.value;
  // } else {
  // 	msg.text = element.innerText;
  // }

  if (live) {
    msg.text = letter;
    msg.voice = speechSynthesis
      .getVoices()
      .find((voice) => voice.voiceURI === "");
    window.speechSynthesis.speak(msg);
  }
};
