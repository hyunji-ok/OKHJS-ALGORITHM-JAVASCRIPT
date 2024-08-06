const solution = require("./solution.js")

describe("전화번호 목록", () => {
    it("결과1.", () => {
        expect(solution(["119", "97674223", "1195524421"])).toBe(false);
    })
    it("결과2.", () => {
        expect(solution(["123","456","789"])).toBe(true);
    })
    it("결과3.", () => {
        expect(solution(["12","123","1235","567","88"])).toBe(false);
    })
});
