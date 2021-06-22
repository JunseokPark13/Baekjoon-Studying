function solution(n, words) {
  let cycle = 1;
  let p = 1;

  let done = [];
  let ch = words[0][0];

  for(let i = 0; i < words.length; i++){
    if (!done.includes(words[i]) && ch == words[i][0]){
      ch = words[i][words[i].length - 1];
      done.push(words[i]);
      p++;
    } else return [p, cycle];
    if (p > n) {
      p = 1;
      cycle++;
    }
  }
  return [0, 0]
} // 2021-06-22

// https://programmers.co.kr/learn/courses/30/lessons/12981


console.log("after  : ", solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));
console.log("answer : ", [3, 3]);
console.log("\n");

console.log("after  : ", solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));
console.log("answer : ", [0, 0]);
console.log("\n");

console.log("after  : ", solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));
console.log("answer : ", [1, 3]);
console.log("\n");




// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');


