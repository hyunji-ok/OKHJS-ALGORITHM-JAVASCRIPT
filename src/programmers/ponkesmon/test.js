const solution = require("./solution.js")

describe("폰켓몬", () => {
    it("결과1.", () => {
        expect(solution([3,1,2,3])).toBe(2);
    })
    it("결과2.", () => {
        expect(solution([3,3,3,2,2,4])).toBe(3);
    })
    it("결과3.", () => {
        expect(solution([3,3,3,2,2,2])).toBe(2);
    })
});