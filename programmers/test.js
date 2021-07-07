function solution(n, works) {
  var answer = 0;

  let worksSum = works.reduce((acc, val) => acc + val, 0)
  works.sort((a, b) => b - a)

  if (worksSum <= n) return 0

  let pos = 0
  while (n){
    if (works[pos] < works[pos + 1]){
      pos++
    } else if (pos && works[pos - 1] === works[pos]){
      pos = 0
    } else{
      works[pos]--
      n--
    }
  }

  answer = works.reduce((acc, val) => acc + (val * val), 0)
  
  return answer;
} // 2021-07-07

// https://programmers.co.kr/learn/courses/30/lessons/12927

console.log("after  : ", solution(4, [4, 3, 3]));
console.log("answer : ", 12);
console.log("\n");

console.log("after  : ", solution(1, [2, 1, 2]));
console.log("answer : ", 6);
console.log("\n");

console.log("after  : ", solution(3, [1, 1]));
console.log("answer : ", 0);
console.log("\n");

console.log("after  : ", solution(5, [5, 3, 3, 2, 1]))
console.log("answer : ", 17)
console.log("\n");

console.log("after  : ", solution(99, [2, 15, 22, 55, 55]))
console.log("answer : ", 580)
console.log("\n");




// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
