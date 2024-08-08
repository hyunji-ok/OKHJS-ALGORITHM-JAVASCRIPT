function solution(operations) {
    let doublePriorityQueue = [];
    for(let item of operations){
        const [oper, val] = item.split(" ")
        const valNum = parseInt(val)
        if(oper === "I") {
            doublePriorityQueue.push(valNum);
            doublePriorityQueue.sort((a,b) => a-b);
        }
        if(oper === "D" && valNum === -1 && doublePriorityQueue.length) {
            doublePriorityQueue.shift();
        }
        if(oper === "D" && valNum === 1 && doublePriorityQueue.length) {
            doublePriorityQueue.pop();
        }
    }

    let answer = [0,0];
    if(doublePriorityQueue.length === 1) {
        answer = [doublePriorityQueue[0], doublePriorityQueue[0]]
    }
    if(doublePriorityQueue.length > 1) {
        answer = [doublePriorityQueue[doublePriorityQueue.length-1], doublePriorityQueue[0]]
    }

    return answer;
}

module.exports = solution