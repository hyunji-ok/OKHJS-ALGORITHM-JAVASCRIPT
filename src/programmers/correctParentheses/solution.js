function solution(s){
    let stringArray = s.split("");
    let stack = [];
    let answer = false;

    for(let item of stringArray) {
        if(item === "(") {
            stack.push(item)
        }
        if(item === ")") {
            if(stack.length === 0) {
                return false
            }
            stack.pop()
        }
    }

    if(stack.length === 0) {
        answer = true
    }

    return answer;
}

module.exports = solution;