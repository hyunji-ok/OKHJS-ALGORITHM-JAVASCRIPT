const solution = require("./solution.js")

describe("사칙연산", () => {
    it("결과1.", () => {
        expect(solution(["1", "-", "3", "+", "5", "-", "8"])).toEqual(1);
    })
    it("결과2.", () => {
        expect(solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"])).toEqual(3);
    })
});