const solution = require("./solution.js")

describe("단속카메라", () => {
    it("결과1.", () => {
        expect(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])).toEqual(2);
    })
});