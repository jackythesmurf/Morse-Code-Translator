import { morseCodeDictionary } from "./dictionary.js";
import { englishDictionary } from "./dictionary.js";

export const translate = (input, wordSpacing, charSpacing, dictionary) => {
  if (input === "") {
    throw new Error("Don't leave above input blank");
  }

  const translatedFullTxt = () => {
    return input
      .toUpperCase()
      .split(charSpacing)
      .map((char) => {
        const translated = dictionary[char];
        return translated;
      });
  };
  return translatedFullTxt().join(wordSpacing);
};

translate(".... . .-.. .-.. --- / - .... . .-. .", "", " ", englishDictionary);
translate("HELLO THERE", " ", "", morseCodeDictionary);
