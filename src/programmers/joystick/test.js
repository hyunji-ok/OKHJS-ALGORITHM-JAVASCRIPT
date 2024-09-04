const solution = require("./solution.js")

describe("조이스틱", () => {
    it("결과1.", () => {
        expect(solution("JEROEN")).toEqual(56);
    })
    it("결과2.", () => {
        expect(solution("JAN")).toEqual(23);
    })
});