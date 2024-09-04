function solution(name) {
    let answer = 0;
    
    const charToNum = (char) => {
        let num = char.charCodeAt()
        return Math.min(91-num, num-65);
    }

    let charArray = [...name].map(item => charToNum(item));

    let minMove = charArray.length - 1;

    charArray.forEach((item, index) => {
        answer += item

        let nextCursor = index + 1

        while(nextCursor < charArray.length && charArray[nextCursor] === 0) {
            nextCursor++
        }

        const toBack = charArray.length - nextCursor

        minMove = Math.min(minMove, (index*2) + toBack, index + (toBack*2) )
    })


    return answer + minMove;
}

module.exports = solution;