const solution = require("./solution.js")

describe("섬 연결하가", () => {
    it("결과1.", () => {
        expect(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])).toEqual(4);
    })
});