import { morseCodeDictionary } from "./dictionary";

export const translate = (englishInput) => {
  if(englishInput===''){
    return "Don't leave above input blank"
  }
  let translation = "";
  for (let char of englishInput) {
    let morseCode = morseCodeDictionary[char.toUpperCase()];
    if (morseCode == undefined) {
      return "English and numeric characters only !"
    } else {
      translation += morseCode + " ";
    }
  }
  return translation;
};

