const solution = require("./solution.js")

describe("test1", () => {
    it("결과1.", () => {
        expect(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toEqual(5);
    })
    it("결과2.", () => {
        expect(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])).toEqual(3);
    })
});
