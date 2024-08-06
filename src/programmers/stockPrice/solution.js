function solution(prices) {
    let answer = [];
    for(let i=0; i<prices.length; i++) {
        if(i === prices.length-1) {
            answer.push(0)
            break;
        }

        let answerCandi = 0;
        for(let j=i+1; j<prices.length; j++) {
            answerCandi++;
            if(prices[i]>prices[j]) {
                break;
            }
        }
        answer.push(answerCandi)
    }
    return answer;
}

module.exports = solution