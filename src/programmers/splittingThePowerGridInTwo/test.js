const solution = require("./solution.js")

describe("전력망을 둘로 나누기", () => {
    it("결과1.", () => {
        expect(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])).toEqual(3);
    })
    it("결과2.", () => {
        expect(solution(4, [[1,2],[2,3],[3,4]])).toEqual(0);
    })
    it("결과3.", () => {
        expect(solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]])).toEqual(1);
    })
});