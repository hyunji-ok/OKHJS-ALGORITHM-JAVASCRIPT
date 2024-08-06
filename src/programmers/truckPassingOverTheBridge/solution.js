function solution(bridge_length, weight, truck_weights) {
    let nowTime = 0;
    let waitQueue = [...truck_weights]; // type: 숫자 array
    let waitQueueValue = 0;
    let waitQueueLenght = waitQueue.length
    let accrossQueue = []; // type: map array
    let accrossQueueMap = new Map();
    let accrossQueueValueSum = 0;
    let completeQueue = []; // type: 숫자 array

    while(true) {
        // 시간 증가
        nowTime++;

        for(let item of accrossQueue) {
            if(item.has("time")) {
                item.set("time", item.get("time") + 1)
            }
        }

        // 다리를 빠져나온 거 체크
        accrossQueueMap = accrossQueue?.shift();
        if(accrossQueueMap) { 
            if(accrossQueueMap.get("time")-1 === bridge_length) { // 값을 꺼낸 뒤에 길이랑 비교해서 값이 같으면 완료 스택에 넣고
                completeQueue.push(accrossQueueMap.get("value"))
            } else { // 아니면 다시 넣는다.
                accrossQueue.unshift(accrossQueueMap)
            }
        }

        // 대기 스택에서 꺼낸다.
        waitQueueValue = waitQueue.shift()
        if(waitQueueValue) {
            accrossQueueValueSum = 0;
            accrossQueue.forEach(item => {
                accrossQueueValueSum += item.get("value")
            })
            // 현재 하중을 버틸 수 있는지 아닌지 체크
            // 버틸 수 있는경우
            if(weight>= waitQueueValue + accrossQueueValueSum) {
                // 중간 스택에 넣는다.
                accrossQueueMap = new Map()
                accrossQueueMap.set("value", waitQueueValue)
                accrossQueueMap.set("time", 1)
                accrossQueue.push(accrossQueueMap)
            } else { 
                // 꺼낸거 다시 원복
                waitQueue.unshift(waitQueueValue)
            }
        }
            
        // 최초 대기 스택 길이 === 최후 완료 스택 길이이면 break
        if(waitQueueLenght=== completeQueue.length) {
            break;
        }

        
    }

    return nowTime;
}

module.exports = solution;