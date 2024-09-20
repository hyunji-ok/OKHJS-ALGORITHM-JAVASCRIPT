const solution = require("./solution.js")

describe("타켓 넘버", () => {
    it("결과1.", () => {
        expect(solution([1, 1, 1, 1, 1], 3)).toEqual(5);
    })
    it("결과1.", () => {
        expect(solution([4, 1, 2, 1], 4)).toEqual(2);
    })
});