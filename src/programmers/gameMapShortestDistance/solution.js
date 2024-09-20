function solution(maps) {
    const trow = maps.length;
    const tcol = maps[0].length;

    const visited = Array.from({ length: trow}, () => Array(tcol).fill(false));
    const distance = Array.from({ length: trow}, () => Array(tcol).fill(0));

    const drow = [-1, 1, 0, 0];
    const dcol = [0, 0, -1, 1];

    const queue = [];
    queue.push([0,0]);
    visited[0][0] = true;
    distance[0][0] = 1;

    while(queue.length > 0) {
      const [row, col] = queue.shift();

      for(let i = 0; i < 4; i++) {
        const nrow = row + drow[i];
        const ncol = col + dcol[i];

        if(nrow >= 0 && nrow < trow && ncol >= 0 && ncol < tcol && !visited[nrow][ncol] && maps[nrow][ncol] === 1) {
          visited[nrow][ncol] = true;
          distance[nrow][ncol] = distance[row][col] + 1;
          queue.push([nrow, ncol]);

          if(nrow === trow - 1 && ncol === tcol - 1) {
            return distance[nrow][ncol];
          }
        }
      }
    } 
    return -1;
}   

module.exports = solution;