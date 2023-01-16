import { translate } from "./translate";

describe('translate English test', () => {
    it("Should return correct morse code", () => {
        expect(translate("hello")).toBe(".... . .-.. .-.. --- ")
    })
    it("Should return correct morse code for sentences", () => {
        expect(translate("hello there my friend")).toBe(".... . .-.. .-.. --- / - .... . .-. . / -- -.-- / ..-. .-. .. . -. -.. ")
    })
    

});
describe('translate special character test', () => {
    
    it("Should return correct morse code for numbers", () => {
        expect(translate("123456789")).toBe(".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ")
    })
    it("Should return correct morse code for special characters", () => {
        expect(translate("()?/.-,")).toBe("-.--. -.--.- ..--.. -..-. .-.-.- -....- --..-- ")
    })

});

describe('error handling', () => {
    
    it("Should return correct Errors", () => {
        expect(translate("")).toBe("Don't leave above input blank")
        
    })
    it("Should return correct morse code for special characters", () => {
        expect(translate("👋")).toBe("English and numeric characters only !")
    })

});
