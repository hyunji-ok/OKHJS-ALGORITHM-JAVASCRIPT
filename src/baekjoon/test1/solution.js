function solution(clothes) {
    let answerMap = new Map();

    clothes.forEach(element => {
        if(answerMap.has(element[1])) {
            answerMap.get(element[1]).push(element[0])
        } else {
            answerMap.set(element[1], [element[0]])
        }
    });

    let answer = 1
    
    Array.from(answerMap.values()).forEach(element => {
        answer = answer * (element.length + 1)
    })
    
    return answer - 1;
}

module.exports = solution;