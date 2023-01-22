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
        if (translated === undefined) {
          throw new Error(`"${char}" is not a valid character`);
        }
        return translated;
      });
  };
  console.log(translatedFullTxt().join(wordSpacing));
  return translatedFullTxt().join(wordSpacing);
};

translate(".... . .-.. .-.. --- / - .... . .-. .", "", " ", englishDictionary);
translate("HELLO THERE", " ", "", morseCodeDictionary);
