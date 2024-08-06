const solution = require("./solution.js")

describe("다리를 지나는 트럭", () => {
    it("결과1.", () => {
        expect(solution(2, 10, [7,4,5,6])).toBe(8);
    })
    it("결과2.", () => {
        expect(solution(100, 100, [10])).toBe(101);
    })
    it("결과3.", () => {
        expect(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
    })
});