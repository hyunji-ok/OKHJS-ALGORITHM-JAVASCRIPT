function solution(tickets) {
  let answer = [];
  let visited = [];
  let ticketsLength = tickets.length;

  tickets.sort();
  let dfs = (str, count) => {
    answer.push(str)

    if(ticketsLength === count) {
      return true;
    }

    for(let i=0; i<ticketsLength; i++){
      if(!visited[i] && tickets[i][0]===str) {
        visited[i] = true

        if(dfs(tickets[i][1], count+1)) return true;

        visited[i] = false
      }
    }

    answer.pop()

    return false;
  }

  dfs("ICN", 0)

  return answer;
}

module.exports = solution;