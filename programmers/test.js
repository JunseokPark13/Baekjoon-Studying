function solution(N, road, K) {
  let map = new Array(N);

  for(let i = 0; i < N; i++){
    map[i] = new Array(N).fill(Infinity)
  }

  const parseMap = (road, map) => {
    for(let i = 0; i < road.length; i++){
      let k = road[i];
      if (map[k[0] - 1][k[1] - 1] == 0 || map[k[0] - 1][k[1] - 1] > k[2]){
        map[k[0] - 1][k[1] - 1] = k[2]
        map[k[1] - 1][k[0] - 1] = k[2]
      } 
    }
  }
  parseMap(road, map)

  let distance = map[0].slice();
  let went = [0];
  distance[0] = 0;

  let z = 0;
  while (z++ < N - 1){
    let min = Infinity;
    let pos = 0;
    for(let i = 0; i < distance.length; i++){
      if (distance[i] != 0 && distance[i] < min && !went.includes(i)){
        min = distance[i];
        pos = i;
      }
    }
    if (pos === 0) break;
    went.push(pos);
    for(let i = 0; i < distance.length; i++){
      if (distance[i] == Infinity || distance[i] > map[pos][i] + min){
        distance[i] = map[pos][i] + min;
      }
    }
  }
  return distance.filter(val => val <= K).length;
} // 2021-06-28

// https://programmers.co.kr/learn/courses/30/lessons/12978

console.log("after  : ", solution(5, 	[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));
console.log("answer : ", 4);
console.log("\n");

console.log("after  : ", solution(6, 	[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));
console.log("answer : ", 4);
console.log("\n");


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
