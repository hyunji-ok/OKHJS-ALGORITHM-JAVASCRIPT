function solution(money) {
  let answer = Array.from({length:2}).map(_ => new Array(money.length).fill(0));
  answer[0][0] = answer[0][1] = money[0]
  answer[1][1] = money[1]

  for(i=2; i<money.length; i++) {
    if(i === money.length-1) {
      answer[0][i] = answer[0][i-1];
      answer[1][i] = Math.max(answer[1][i-1], answer[1][i-2] + money[i]);
    } else {
      answer[0][i] = Math.max(answer[0][i-1], answer[0][i-2] + money[i]);
      answer[1][i] = Math.max(answer[1][i-1], answer[1][i-2] + money[i]);
    }
  }

  return Math.max(answer[0][money.length-1], answer[1][money.length-1]);
}

module.exports = solution;