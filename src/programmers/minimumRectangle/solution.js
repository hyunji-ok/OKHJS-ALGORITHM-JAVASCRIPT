function solution(sizes) {
    let widths = []
    let heights = []
    sizes.forEach(item => {
        widths.push(item[0] > item[1] ? item[0] : item[1])
        heights.push(item[0] < item[1] ? item[0] : item[1])
    })

    return Math.max.apply(null, widths) * Math.max.apply(null, heights);
}

module.exports = solution;
