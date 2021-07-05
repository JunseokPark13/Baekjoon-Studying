function solution(n, k) {
  var answer = [];
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let fac = arr.reduce((acc, val) => acc * val, 1);
  k--;
  while (answer.length !== n) {
    let pos
    fac = fac / arr.length;
    pos = Math.floor(k / fac)
    let temp = arr[pos];
    answer.push(temp);
    k = k % fac;
    arr.splice(pos, 1)
  }
  return answer;
} // 2021-07-05
// https://juyoungpark718.github.io/posts/54

console.log("after  : ", solution(3, 5));
console.log("answer : ", [3,1,2]);
console.log("\n");

console.log("after  : ", solution(5, 15));
console.log("answer : ", );
console.log("\n");






// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
