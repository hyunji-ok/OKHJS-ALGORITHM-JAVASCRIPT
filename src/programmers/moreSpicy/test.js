const solution = require("./solution.js")

describe("더 맵게", () => {
    it("결과1.", () => {
        expect(solution([1, 2, 3, 9, 10, 12], 7)).toEqual(2);
    })
    it("결과2.", () => {
        expect(solution([0, 2, 4], 12)).toEqual(2);
    })
    it("결과3.", () => {
        expect(solution([1, 0, 0, 0], 3)).toEqual(-1);
    })
    it("결과4.", () => {
        expect(solution([1, 0, 0, 0], 2)).toEqual(3);
    })
});
