function solution(priorities, location) {
    let answer = 0; // 뽑아낸 순서
    let prioritiesQueue = [...priorities];
    let prioritiesQueueValue = 0;
    let prioritiesQueueMaxValue = 0;
    let nowLocation = 0; // 현재 위치
    let wantLocation = Number(location); // 원하는 값의 위치

    while(prioritiesQueue.length !== 0) {
        prioritiesQueueValue = prioritiesQueue.shift();
        prioritiesQueueMaxValue = Math.max.apply(null, prioritiesQueue);
        
        if(prioritiesQueueValue >= prioritiesQueueMaxValue) { // 뽑는다.
            // 완전히 큐에서 뽑아낼 떄 answer(뽑아낸 순서)의 값을 올려준다.
            answer++;
            // 뽑아낸 것이 찾은 값이므로 break
            if(nowLocation === wantLocation) {
                break;
            }
        } else { // 뒤로 보낸다.
            // 원복
            prioritiesQueue.push(prioritiesQueueValue);
            // 원하던 값(locValue)의 위치가 뒤로 갔으므로 값을 바꿔준다.
            if(nowLocation === wantLocation) {
                wantLocation += prioritiesQueue.length
            }
        }
        // 행위(뽑은다음에 아예 빼든지, 뒤로 다시 넣든지)에 따라 값을 올려준다.
        nowLocation++;
    }

    return answer;
}

module.exports = solution;