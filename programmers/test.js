function solution(sticker) {
  let answer = 0;
  const len = sticker.length + 2

  let ary = new Array(len).fill(0)
  let ary2 = new Array(len).fill(0)

  if (sticker.length === 1) return sticker[0]

  for(let i = 2; i < len - 1; i++){
    ary[i] = Math.max(ary[i - 1], ary[i - 2] + sticker[i - 2])
  }

  for(let i = 3; i < len; i++){
    ary2[i] = Math.max(ary2[i - 1], ary2[i - 2] + sticker[i - 2])
  }

  console.log(ary)
  console.log(ary2)

  answer = Math.max(ary[len - 2], ary2[len - 1])

  return answer;
} // 2021-07-14

// https://programmers.co.kr/learn/courses/30/lessons/12971

console.log("after  : ", solution([14, 6, 5, 11, 3, 9, 2, 10]	));
console.log("answer : ", 36);
console.log("\n");

console.log("after  : ", solution([1, 3, 2, 5, 4]));
console.log("answer : ", 8);
console.log("\n");






// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
