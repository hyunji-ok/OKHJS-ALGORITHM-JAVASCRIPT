const solution = require("./solution.js")

describe("단어 변환", () => {
    it("결과1.", () => {
        expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toEqual(4);
    })
    it("결과2.", () => {
        expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toEqual(0);
    })
});