const solution = require("./solution.js")

describe("피로도", () => {
    it("결과1.", () => {
        expect(solution(80, [[80,20],[50,40],[30,10]])).toEqual(3);
    })
});