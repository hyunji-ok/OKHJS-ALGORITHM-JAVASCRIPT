function solution(numbers) {
    let answer = '';
    let stringArray = numbers.map((item)=>{
        return item + ""
    }).sort((a,b) => (
        b.repeat(4).slice(0,4) - a.repeat(4).slice(0,4)
    ))

    stringArray.forEach((item) => {
        answer += item
    })
    
    return answer[0] === "0" ? "0" : answer;
}

module.exports = solution;
