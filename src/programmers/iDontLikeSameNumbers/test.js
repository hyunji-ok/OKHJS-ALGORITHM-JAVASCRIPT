const solution = require("./solution.js")

describe("같은 숫자는 싫어", () => {
    it("결과1.", () => {
        expect(solution([1,1,3,3,0,1,1])).toEqual([1,3,0,1]);
    })
    it("결과2.", () => {
        expect(solution([4,4,4,3,3])).toEqual([4,3]);
    })
});
