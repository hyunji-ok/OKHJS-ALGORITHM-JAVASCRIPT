function solution(begin, target, words) {
  if(!words.includes(target)) {
    return 0;
  }

  let queue = [];
  let visited = new Set();
  queue.push([begin, 0]);
  visited.add(begin);

  while(queue.length > 0) {
    let [value, count] = queue.shift();
    if(value === target) {
      return count;
    }

    for(let word of words) {
      if(isConvertible(value, word) && !visited.has(word)) {
        queue.push([word, count+1])
        visited.add(word)
      }
    }
  }

  return 0;
}

function isConvertible(val, tar) {
  let diff = 0
  for(let i=0; i<val.length; i++){
    if(val[i] !== tar[i]){
      diff++
    }
  }
  return diff === 1;
}

module.exports = solution;