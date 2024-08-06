const solution = require("./solution.js")

describe("주식가격", () => {
    it("결과1.", () => {
        expect(solution([1, 2, 3, 2, 3])).toEqual([4, 3, 1, 1, 0]);
    })
});
