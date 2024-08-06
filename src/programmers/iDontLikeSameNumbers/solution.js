function solution(arr) {
    let answer = [arr[0]];
    arr.forEach(element => {
        if(answer[answer.length-1] !== element){
            answer.push(element)
        }
    })
    return answer;
}

module.exports = solution;