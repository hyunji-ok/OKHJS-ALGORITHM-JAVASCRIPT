function solution(genres, plays) {
    // 1. 초기화
    let answerMap = new Map();  // key: 장르, value: 장르별 음악 시간 array
    let totalMap = new Map();   // key: 장르, value: 장르별 음악 시간 합산
    let sortedTotalMap = new Map(); // 위 map을 value가 높은 순으로 정렬한 map
    let answer = [];

    // 2. answerMap 값 세팅
    for(let i=0; i<genres.length; i++) {
        if(answerMap.has(genres[i])) {
            answerMap.get(genres[i]).push([i, plays[i]])
        } else {
            answerMap.set(genres[i], [[i, plays[i]]])
        }
    }

    for(let entry of answerMap.entries()) {
        // 3. 장르별로 총 재생된 시간 기록 (totalMap)
        totalMap.set(entry[0], entry[1].reduce((a,b) => a + b[1], 0))

        // 4. 장르 내에서 많이 재생된 음원별로 정렬 (answerMap 정렬)
        entry[1].sort((a, b) => b[1] - a[1]);
    }

    // 5. 장르별로 많이 재생된것 정렬 (totalMap을 정렬하여 sortedTotalMap 값 세팅)
    // 5-1. Map 객체를 배열로 변환
    let mapArray = Array.from(totalMap);
    // 5-2. 배열을 값 기준으로 정렬
    mapArray.sort((a, b) => b[1] - a[1]);
    // 5-3. 정렬된 배열을 다시 Map 객체로 변환
    sortedTotalMap = new Map(mapArray);


    // 6. 1) 많이 재생된 장르 중에서, 2) 장르별로 많이 재생된 음악, 3) 최대 2개씩 뽑아내기  
    for(let key of sortedTotalMap.keys()){ // 많이 재생된 장르 중에서
        for(let i=0; i<2; i++) { // 최대 2개씩 뽑아내기 
            let tmp = answerMap.get(key).shift() // 장르별로 많이 재생된 음악
            if(tmp) {
                answer.push(tmp[0])
            }
        }
    }
    
    return answer
}

module.exports = solution;