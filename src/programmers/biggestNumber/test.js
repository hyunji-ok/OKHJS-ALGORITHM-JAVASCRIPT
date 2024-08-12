const solution = require("./solution.js")

describe("가장 큰 수", () => {
    it("결과1.", () => {
        expect(solution([6, 10, 2])).toEqual("6210");
    })
    it("결과2.", () => {
        expect(solution([3, 30, 34, 5, 9])).toEqual("9534330");
    })
});
