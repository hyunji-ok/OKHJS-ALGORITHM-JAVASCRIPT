function solution(answers) {
    let candi1 = [1, 2, 3, 4, 5]
    let candi2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let candi3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    let candi1Count = 0;
    let candi2Count = 0;
    let candi3Count = 0;

    for(let i=0; i<answers.length; i++) {
        if(answers[i] === candi1[i%candi1.length]) {
            candi1Count++;
        }
        if(answers[i] === candi2[i%candi2.length]) {
            candi2Count++;
        }
        if(answers[i] === candi3[i%candi3.length]) {
            candi3Count++;
        }
    }

    let candiArray = [candi1Count, candi2Count, candi3Count]
    let maxVal = Math.max(...candiArray)

    let answerArray = [];

    candiArray.forEach((value, index) => {
        if(value === maxVal) {
            answerArray.push(index+1)
        }
    })

    return answerArray.sort()
}

module.exports = solution;
