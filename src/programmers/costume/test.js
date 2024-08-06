const solution = require("./solution.js")

describe("의상", () => {
    it("결과1.", () => {
        expect(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
    })
    it("결과2.", () => {
        expect(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])).toBe(3);
    })
});
