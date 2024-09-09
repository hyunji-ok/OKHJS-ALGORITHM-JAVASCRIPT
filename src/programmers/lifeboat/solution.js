function solution(people, limit) {
    let sortedPeople = people.sort((a,b) => a-b);
    let isOdd = true;
    let resolvedWeight = limit
    let answer = 0;

    while(sortedPeople.length > 0) {
        if(isOdd) {
            resolvedWeight = limit - sortedPeople.pop()
            isOdd = false
            if(sortedPeople.length === 0) {
                answer+=1
            }
        } else {
            if(resolvedWeight - sortedPeople[0] >= 0 ) {
                sortedPeople.shift()
            }
            answer += 1
            resolvedWeight = limit
            isOdd = true
        }
    }
    
    return answer;
}

module.exports = solution;