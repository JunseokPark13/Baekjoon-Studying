function solution(n, wires) {
  let min = 100;

  wires.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < wires.length; i++) {
    let visited = []
    const left = new Set([wires[i][0]]);
    const right = new Set([wires[i][1]]);
    let j = 0;
    while (left.size + right.size !== n) {
      if (j !== i) {
        if (j === n - 1) j = 0;
        if (left.has(wires[j][0]) || left.has(wires[j][1])) {
          left.add(wires[j][1]);
          left.add(wires[j][0]);
        } else if (right.has(wires[j][0]) || right.has(wires[j][1])) {
          right.add(wires[j][1]);
          right.add(wires[j][0]);
        }
      }
      j++;
    }
    let currentDiff = Math.abs(left.size - right.size)
    min = currentDiff < min ? currentDiff : min;
  }
  return min;
}

// https://programmers.co.kr/learn/courses/30/lessons/86971

console.log("=============================");
let ary = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
];

console.log(`result : ${solution(9, ary)}`);
console.log(`answer : ${3}`);
console.log("=============================");

ary = [
  [1, 2],
  [2, 3],
  [3, 4],
];

console.log(`result : ${solution(4, ary)}`);
console.log(`answer : ${0}`);
console.log("=============================");

ary = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];

console.log(`result : ${solution(7, ary)}`);
console.log(`answer : ${1}`);
console.log("=============================");

ary = [
  [1, 4],
  [6, 3],
  [2, 5],
  [5, 1],
  [5, 3],
];

console.log(`result : ${solution(6, ary)}`);
console.log(`answer : ${2}`);
console.log("=============================");


