const solution = require("./solution.js")

describe("기능개발", () => {
    it("결과1.", () => {
        expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
    })
    it("결과2.", () => {
        expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([1, 3, 2]);
    })
});
