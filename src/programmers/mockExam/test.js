const solution = require("./solution.js")

describe("모의고사", () => {
    it("결과1.", () => {
        expect(solution([1,2,3,4,5])).toEqual([1]);
    })
    it("결과2.", () => {
        expect(solution([1,3,2,4,2])).toEqual([1,2,3]);
    })
});
