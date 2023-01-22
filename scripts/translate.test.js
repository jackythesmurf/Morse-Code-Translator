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

    it("Should return correct english for morse code", () => {
        expect(translate(".... . .-.. .-.. ---", "", " ", englishDictionary)).toBe("HELLO")
    }
    )
    it("Should return correct english for morse code for sentences", () => {
        expect(translate(".... . .-.. .-.. --- / - .... . .-. .", "", " ", englishDictionary)).toBe("HELLO THERE")
    })
})

describe('error handling', () => {
    it("Should throw error if input is blank", () => {
        expect(() => translate("", "", "", englishDictionary)).toThrow("Don't leave above input blank")
    })
    it("Should throw error if input is not valid", () => {
        expect(() => translate("!", "", "", englishDictionary)).toThrow('"!" is not a valid character')
    })
    it("Should throw error if input is not valid", () => {
        expect(() => translate("HELLO THERE!", "", "", morseCodeDictionary)).toThrow('"!" is not a valid character')
    })
    it("Should throw error if input is blank", () => {
        expect(() => translate("", "", "", morseCodeDictionary)).toThrow(("Don't leave above input blank"))
    })
})