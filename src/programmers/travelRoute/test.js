const solution = require("./solution.js")

describe("여행경로", () => {
    it("결과1.", () => {
        expect(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])).toEqual(	["ICN", "JFK", "HND", "IAD"]);
    })
    it("결과2.", () => {
        expect(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]))
        .toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
    })
});