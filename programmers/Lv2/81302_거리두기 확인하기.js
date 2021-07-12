function solution(places) {
  let answer = [];

  const getManhattan = (pos1, pos2) => {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  };

  const checkRule = (ary, pos1, pos2) => {
    if (pos1[0] === pos2[0]) {
      for (let i = pos1[1] + 1; i < pos2[1]; i++) {
        if (ary[pos1[0]][i] === "X") return true;
      }
    } else if (pos1[1] === pos2[1]) {
      for (let i = pos1[0] + 1; i < pos2[0]; i++) {
        if (ary[i][pos1[1]] === "X") return true;
      }
    } else if (ary[pos1[0]][pos2[1]] === "X" && ary[pos2[0]][pos1[1]] === "X") {
      return true;
    }
    return false;
  };

  const checkP = (ary) => {
    let person = [];
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (ary[y][x] === "P") {
          person.push([y, x]);
        }
      }
    }
    for (let i = 0; i < person.length; i++) {
      for (let j = i + 1; j < person.length; j++) {
        if (getManhattan(person[i], person[j]) <= 2) {
          if (!checkRule(ary, person[i], person[j])) return false;
        }
      }
    }
    return true;
  };

  for (let i of places) {
    if (checkP(i)) answer.push(1);
    else answer.push(0);
  }

  return answer;
} // 2021-07-12

// https://programmers.co.kr/learn/courses/30/lessons/81302

let places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log("after  : ", solution(places));
console.log("answer : ", [1, 0, 1, 1, 1]);
console.log("\n");
