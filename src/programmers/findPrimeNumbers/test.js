const solution = require("./solution.js")

describe("소수 찾기", () => {
    it("결과1.", () => {
        expect(solution("17")).toEqual(3);
    })
    it("결과2.", () => {
        expect(solution("011")).toEqual(2);
    })
});