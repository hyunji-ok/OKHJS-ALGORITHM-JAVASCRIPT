const solution = require("./solution.js")

describe("이중우선순위큐", () => {
    it("결과1.", () => {
        expect(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])).toEqual([0,0]);
    })
    it("결과2.", () => {
        expect(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])).toEqual([333, -45]);
    })
});
