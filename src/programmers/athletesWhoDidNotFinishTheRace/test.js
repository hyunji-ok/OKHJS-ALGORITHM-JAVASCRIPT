const solution = require("./solution.js")

describe("완주하지 못한 선수", () => {
    it("결과1.", () => {
        expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
    })
    it("결과2.", () => {
        expect(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 	["josipa", "filipa", "marina", "nikola"])).toBe("vinko");
    }),
    it("결과3.", () => {
        expect(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])).toBe("mislav");
    })
});
