function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;

    let tree = Array.from(Array(n+1), () => [])
    wires.forEach((element) => {
        let [a, b] = element;

        tree[a].push(b);
        tree[b].push(a);
    })

    function searchTree (root, exceptionNum) {
        let count = 0;
        let visited = [];
        let queue = [root];
        visited[root] = true;

        while(queue.length) {
            let quePop = queue.pop();
            tree[quePop].forEach((element) => {
                if(element !== exceptionNum && visited[element] !== true) {
                    visited[element] = true;
                    queue.push(element);
                }
            })
            count++;
        }
        
        return count;
    }

    wires.forEach((element) => {
        let [a,b] = element
        answer = Math.min(answer, Math.abs(searchTree(a,b) - searchTree(b,a)))
    })

    return answer;
}

module.exports = solution;