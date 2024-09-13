const solution = require("./solution.js")

describe("N으로 표현", () => {
    it("결과1.", () => {
        expect(solution(5, 12)).toEqual(4);
    })
    it("결과2.", () => {
        expect(solution(2, 11)).toEqual(3);
    })
});