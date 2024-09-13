function solution(N, number) {
    let use = Array.from(new Array(9), () => new Set())

    if(N === number) {
        return 1
    } else {
        use.forEach((item, index) => {
            if(index !== 0) {
                item.add(Number(String(N).repeat(index)))
            }
        })

        for(let i=1; i<9; i++) {
            for(let j=1; j<i; j++) {
                for(let first of use[j]) {
                    for(let second of use[i-j]) {
                        use[i].add(first + second);
                        use[i].add(first - second);
                        use[i].add(first * second);
                        use[i].add(first / second);
                    }
                }
            }
            if(use[i].has(number)) return i
        }
        return -1
    }
}

module.exports = solution;