function solution(m, n, puddles) {
  let movePossible = Array.from({ length: n }, () => Array(m).fill(true))
  let dp = Array.from({ length: n }, () => Array(m).fill(0))
  dp[0][0] = 1
  puddles.forEach((item) => {
    let row = item[1]-1
    let col = item[0]-1
    movePossible[row][col] = false
  })

  for(let row=0; row<dp.length; row++) {
    for(let col=0; col<dp[0].length; col++) {
      if(row===0 && col===0) {
        continue;
      }
      if(movePossible[row][col]) {
        if(row === 0) {
          dp[row][col] = (dp[row][col-1])%(1000000007)
        } else if(col === 0) {
          dp[row][col] = (dp[row-1][col])%(1000000007)
        } else {
          dp[row][col] = (dp[row-1][col] + dp[row][col-1])%(1000000007)
        }
      }
    }
  }

  return dp[n-1][m-1];
}

module.exports = solution;