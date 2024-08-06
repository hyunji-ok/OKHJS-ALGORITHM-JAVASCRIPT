function solution(nums) {
    const totalLength = nums.length/2
    const setNums = new Set(nums)
    const setNumsLength = setNums.size
    return totalLength > setNumsLength ? setNumsLength : totalLength;
}

module.exports = solution;