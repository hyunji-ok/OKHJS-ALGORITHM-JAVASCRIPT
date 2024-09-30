const solution = require("./solution.js")

describe("아이템 줍기", () => {
    it("결과1.", () => {
        expect(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8)).toEqual(17);
    })
    it("결과2.", () => {
        expect(solution([[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]], 9, 7, 6, 1)).toEqual(11);
    })
    it("결과3.", () => {
        expect(solution([[1,1,5,7]], 1, 1, 4, 7)).toEqual(9);
    })
    it("결과4.", () => {
        expect(solution([[2,1,7,5],[6,4,10,10]], 3, 1, 7, 10)).toEqual(15);
    })
    it("결과5.", () => {
        expect(solution([[2,2,5,5],[1,3,6,4],[3,1,4,6]], 1, 4, 6, 3)).toEqual(10);
    })
});