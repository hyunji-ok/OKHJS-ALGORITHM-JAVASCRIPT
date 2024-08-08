const solution = require("./solution.js")

describe("디스크 컨트롤러", () => {
    it("결과1.", () => {
        expect(solution([[0, 3], [1, 9], [2, 6]])).toEqual(9);
    })
    it("결과2.", () => {
        expect(solution([[5, 10], [6, 8], [14, 2], [11, 5], [100, 7]])).toEqual(11);
    })
    it("결과3.", () => {
        expect(solution([[0, 1], [2, 2], [2, 3]])).toEqual(2);
    })
    it("결과4.", () => {
        expect(solution([[0, 3], [4, 4], [5, 3], [7, 1]])).toEqual(4);
    })
    it("결과5.", () => {
        expect(solution([[1, 4], [7, 9], [1000, 3]])).toEqual(5);
    })
    it("결과6.", () => {
        expect(solution([[7, 8], [3, 5], [9, 6]])).toEqual(9);
    })
    it("결과7.", () => {
        expect(solution([[0, 3], [10, 1]])).toEqual(2);
    })
    it("결과8.", () => {
        expect(solution([[0, 3], [4, 4], [5, 3], [7, 1]])).toEqual(4);
    })
    it("결과9.", () => {
        expect(solution([[0, 10], [4, 10], [5, 11], [15, 2]])).toEqual(15);
    })
    it("결과10.", () => {
        expect(solution([[0, 3], [2, 5], [4, 2]])).toEqual(5);
    })
    it("결과11.", () => {
        expect(solution([[0, 3], [10, 1]])).toEqual(2);
    })
    it("결과12.", () => {
        expect(solution([[7, 8], [3, 5], [8, 6]])).toEqual(8);
    })
    it("결과13.", () => {
        expect(solution([[0, 16], [0, 14], [15, 1], [13, 13]])).toEqual(21);
    })
    it("결과14.", () => {
        expect(solution([[0, 3], [5, 20], [7, 4]])).toEqual(15);
    })
    it("결과15.", () => {
        expect(solution([[0, 2]])).toEqual(2);
    })
});
