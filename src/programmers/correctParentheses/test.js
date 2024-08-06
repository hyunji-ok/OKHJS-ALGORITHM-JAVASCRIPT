const solution = require("./solution.js")

describe("올바른 괄호", () => {
    it("결과1.", () => {
        expect(solution("()()")).toBe(true);
    })
    it("결과2.", () => {
        expect(solution("(())()")).toBe(true);
    })
    it("결과3.", () => {
        expect(solution(")()(")).toBe(false);
    })
    it("결과4.", () => {
        expect(solution("(()(")).toBe(false);
    })
    it("결과5.", () => {
        expect(solution("(()))")).toBe(false);
    })
});