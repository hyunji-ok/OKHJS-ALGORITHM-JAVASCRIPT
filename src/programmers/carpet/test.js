const solution = require("./solution.js")

describe("카펫", () => {
    it("결과1.", () => {
        expect(solution(10, 2)).toEqual([4, 3]);
    })
    it("결과2.", () => {
        expect(solution(8, 1)).toEqual([3, 3]);
    })
    it("결과3.", () => {
        expect(solution(24, 24)).toEqual([8, 6]);
    })
});