function solution(participant, completion) {
    let answerMap = new Map()

    participant.forEach(element => {
        if(answerMap.has(element)){
            answerMap.set(element, answerMap.get(element)+1)
        } else {
            answerMap.set(element, 1)
        }
    });

    completion.forEach(element => {
        answerMap.set(element, answerMap.get(element)-1)

        if(answerMap.get(element)===0){
            answerMap.delete(element)
        }
    })

    return Array.from(answerMap.keys())[0];
}

module.exports = solution;
