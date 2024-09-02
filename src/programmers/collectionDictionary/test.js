const solution = require("./solution.js")

describe("모음사전", () => {
    it("결과1.", () => {
        expect(solution("AAAAE")).toEqual(6);
    })
    it("결과2.", () => {
        expect(solution("AAAE")).toEqual(10);
    })
    it("결과3.", () => {
        expect(solution("I")).toEqual(1563);
    })
    it("결과4.", () => {
        expect(solution("EIO")).toEqual(1189);
    })
});