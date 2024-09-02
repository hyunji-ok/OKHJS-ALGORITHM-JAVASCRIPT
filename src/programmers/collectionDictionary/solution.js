function solution(word) {
    let count = 0;
    let flag = false;
    let vowel = ["A", "E", "I", "O", "U"]

    function dfs(candiWord) {
        if(candiWord.length>5 || flag) {
            return;
        }

        if(word === candiWord) {
            flag = true;
            return;
        }

        count++

        vowel.forEach(item => {
            dfs(candiWord + item)
        })
    }

    dfs("")

    return count;
}

module.exports = solution;