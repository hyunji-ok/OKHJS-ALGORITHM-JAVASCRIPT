const solution = require("./solution.js")

describe("네트워크", () => {
    it("결과1.", () => {
        expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toEqual(2);
    })
    it("결과2.", () => {
        expect(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toEqual(1);
    })
});