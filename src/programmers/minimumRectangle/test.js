const solution = require("./solution.js")

describe("최소직사각형", () => {
    it("결과1.", () => {
        expect(solution([[60, 50], [30, 70], [60, 30], [80, 40]])).toEqual(4000);
    })
    it("결과2.", () => {
        expect(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])).toEqual(120);
    })
    it("결과3.", () => {
        expect(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])).toEqual(133);
    })
});
