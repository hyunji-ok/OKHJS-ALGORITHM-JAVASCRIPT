function solution(triangle) {
    for (let i = 1; i < triangle.length; i++) {
      for (let j = 0; j < triangle[i].length; j++) {
        const firstCase = triangle[i - 1][j - 1] ?? 0;
        const secondCase = triangle[i - 1][j] ?? 0;
   
        triangle[i][j] += Math.max(firstCase, secondCase);
      }
    }
    return Math.max(...triangle.at(-1));
}

module.exports = solution;