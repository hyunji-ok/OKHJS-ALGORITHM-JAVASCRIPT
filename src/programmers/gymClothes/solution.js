function solution(n, lost, reserve) {
    let realLost = lost.filter(item => 
        !reserve.includes(item)
    ).sort((a,b) => a-b)

    let realReserve = reserve.filter(item => 
        !lost.includes(item)
    ).sort((a,b) => a-b)

    let answer = n - realLost.length;

    for(let i=0; i<realLost.length; i++) {
        const lostNum = realLost[i]
        for(let j=0; j<realReserve.length; j++) {
            const reserveNum = realReserve[j]
            if(reserveNum === lostNum-1 || reserveNum === lostNum+1) {
                answer++;
                realReserve[j] = -1
                break
            }
        }
    }

    return answer;
}

module.exports = solution;