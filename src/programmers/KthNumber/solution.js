function solution(array, commands) {
    let subArray = []
    let answer = [];
    for(let item of commands) {
        subArray = array.slice(item[0]-1, item[1]).sort((a,b)=> a-b)
        answer.push(subArray[item[2]-1])
    }
    return answer;
}

module.exports = solution;
