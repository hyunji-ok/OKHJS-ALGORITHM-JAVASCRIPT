const solution = require("./solution.js")

describe("큰 수 만들기", () => {
    it("결과1.", () => {
        expect(solution("1924", 2)).toEqual("94");
    })
    it("결과2.", () => {
        expect(solution("1231234", 3)).toEqual("3234");
    })
    it("결과3.", () => {
        expect(solution("4177252841", 4)).toEqual("775841");
    })
});