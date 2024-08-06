const solution = require("./solution.js")

describe("베스트앨범", () => {
    it("결과1.", () => {
        expect(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])).toEqual([4, 1, 3, 0]);
    })
});
