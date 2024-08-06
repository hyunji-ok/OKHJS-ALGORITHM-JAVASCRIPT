function solution(progresses, speeds) {
    let dateCount = 1;      // 날짜 계산
    let answerCandi = 1;    // 정답 후보
    let answer = [];        // 정답
    let progressShift = 0;  // 배열의 첫번째 값
    let speedShift = 0;     // 배열의 첫번째 값    

    while(progresses.length !== 0) {
        progressShift = progresses.shift()
        speedShift = speeds.shift()

        // 현재 shift(배열의 첫번째 값) 값이 100이 넘을 수 있는 날짜 계산
        while(dateCount*speedShift + progressShift < 100) {
            dateCount++;
        }
        
        // 현재 dateCount에서 담을 수 있는 만큼 담아서 push한다.
        while(progresses.length !== 0) {
            progressShift = progresses.shift()
            speedShift = speeds.shift()
            if(dateCount*speedShift + progressShift < 100) {
                answer.push(answerCandi) // 정답에 넣고
                progresses.unshift(progressShift) // 복원
                speeds.unshift(speedShift) // 복원
                answerCandi = 1 // 복원
                break;
            } else {
                answerCandi++
            }
        }

        // 마지막 값은 push -> 위에 while에 담지 못한 값 담기
        if(progresses.length == 0) {
            answer.push(answerCandi);
            break;
        }
    }

    return answer;
}

module.exports = solution;