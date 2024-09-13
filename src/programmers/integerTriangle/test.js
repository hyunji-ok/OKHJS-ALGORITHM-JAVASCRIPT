const solution = require("./solution.js")

describe("정수 삼각형", () => {
    it("결과1.", () => {
        expect(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	)).toEqual(30);
    })
});