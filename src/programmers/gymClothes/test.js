const solution = require("./solution.js")

describe("체육복", () => {
    it("결과1.", () => {
        expect(solution(5, [2, 4], [1, 3, 5])).toEqual(5);
    })
    it("결과2.", () => {
        expect(solution(5, [2, 4], [3])).toEqual(4);
    })
    it("결과3.", () => {
        expect(solution(3, [3], [1])).toEqual(2);
    })
});