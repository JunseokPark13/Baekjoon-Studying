function solution(n, s) {
  var answer = [];

  let base = Math.floor(s / n);
  let remian = s % n;

  if (base == 0)
    return [-1];

  for(let i = 0; i < n - remian; i++)
    answer.push(base);
  for(let i = 0; i < remian; i++)
    answer.push(base + 1);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12938

console.log("after  : ", solution(2, 9));
console.log("answer : ", [4, 5]);
console.log("\n");

console.log("after  : ", solution(2, 1));
console.log("answer : ", [-1]);
console.log("\n");

console.log("after  : ", solution(2, 8));
console.log("answer : ", [4, 4]);
console.log("\n");


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');


// 1 1 1 6  6
// 1 1 2 5  10
// 1 1 3 4  12

// 1 2 2 4  20
// 1 2 3 3  24

// 2 2 2 3  24
