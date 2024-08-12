const solution = require("./solution.js")

describe("H-Index", () => {
    it("결과1.", () => {
        expect(solution([3, 0, 6, 1, 5])).toEqual(3);
    })
    it("결과2.", () => {
        expect(solution([5, 6, 7, 8])).toEqual(4);
    })
});
