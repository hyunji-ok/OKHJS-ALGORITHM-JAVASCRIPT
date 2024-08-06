const solution = require("./solution.js")

describe("프로세스", () => {
    it("결과1.", () => {
        expect(solution([2, 1, 3, 2], 2)).toBe(1);
    })
    it("결과2.", () => {
        expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
    })
});
