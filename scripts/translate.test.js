import { translate } from "./translate";
import { morseCodeDictionary } from "./dictionary";
import { englishDictionary } from "./dictionary";

describe('translate English test', () => {
    it("Should return correct morse code", () => {
        expect(translate("HELLO", " ", "", morseCodeDictionary)).toBe(".... . .-.. .-.. ---")
    })
    it("Should return correct morse code for sentences", () => {
        expect(translate("HELLO THERE", " ", "", morseCodeDictionary)).toBe(".... . .-.. .-.. --- / - .... . .-. .")
    })


});
describe('translate special character test', () => {

    it("Should return correct morse code for numbers", () => {
        expect(translate("123456789", " ", "", morseCodeDictionary)).toBe(".---- ..--- ...-- ....- ..... -.... --... ---.. ----.")
    })
    it("Should return correct morse code for special characters", () => {
        expect(translate("()?/.-,", " ", "", morseCodeDictionary)).toBe("-.--. -.--.- ..--.. -..-. .-.-.- -....- --..--")
    })

});

describe('translate Morse to english', () => {


});