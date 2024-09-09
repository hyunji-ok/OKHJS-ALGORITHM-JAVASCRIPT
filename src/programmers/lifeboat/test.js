const solution = require("./solution.js")

describe("구명보트", () => {
    it("결과1.", () => {
        expect(solution([70, 50, 80, 50], 100)).toEqual(3);
    })
    it("결과2.", () => {
        expect(solution([70, 80, 50], 100)).toEqual(3);
    })
});