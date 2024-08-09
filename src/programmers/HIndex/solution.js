function solution(citations) {
    let citArray = citations.sort((a,b) => a-b)
    let citArrayLength = citArray.length
    let answer = 0;

    for(let i=0; i<citArray[citArrayLength-1]; i++) {
        citArray.forEach((item, index) => {
            if(i <= item && i <= citArrayLength - index) {
                answer = i
            }
        })
    }

    return answer;
}

module.exports = solution;
