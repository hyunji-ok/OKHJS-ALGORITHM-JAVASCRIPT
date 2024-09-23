function solution(begin, target, words) {
  if(!words.includes(target)) return 0;

  const visited = new Set();
  const queue = [];
  queue.push([begin, 0]);
  visited.add(begin);

  while(queue.length > 0) {
    const [word, count] = queue.shift();
    if(word === target) {
      return count;
    }

    for(const nextWord of words) {
      if(isConvertible(word, nextWord) && !visited.has(nextWord)) {
        visited.add(nextWord);
        queue.push([nextWord, count + 1]);  
      }
    }
  } 
  return 0;
}

function isConvertible(word1, word2) {
  let diffCount = 0;
  for(let i = 0; i < word1.length; i++) {
    if(word1[i] !== word2[i]) {
      diffCount++;
    }
  }
  return diffCount === 1; 
} 

module.exports = solution;