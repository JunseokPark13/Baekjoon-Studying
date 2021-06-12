function solution(n, s) {
  var answer = [];

  let base = Math.floor(s / n);
  let remian = s % n;

  if (base == 0) return [-1];

  for (let i = 0; i < n - remian; i++) answer.push(base);
  for (let i = 0; i < remian; i++) answer.push(base + 1);

  return answer;
}

// function solution(n, s) {
//   var answer = [];
//   let ary = [];
//   let curMax = -1;

//   const getSum = (ary) => {
//     return ary.reduce((sum, el) => {
//       return sum + el;
//     }, 0);
//   };

//   const getMult = (ary) => {
//     return ary.reduce((sum, el) => {
//       return sum * el;
//     }, 1);
//   };

//   const getComb = (cnt, sum, min, ary) => {
//     if (cnt == 1) {
//       ary.push(s - sum);
//       if (curMax < getMult(ary)) {
//         curMax = getMult(ary);
//         answer = ary.slice();
//       }
//       return;
//     }
//     for (let i = min; i < s; i++) {
//       let tmp = ary.slice();
//       tmp.push(i);
//       let newSum = getSum(tmp);
//       let newMin = Math.max.apply(null, tmp);
//       if (s - newSum <= 0 || newMin > s - newSum) return;
//       getComb(cnt - 1, newSum, newMin, tmp);
//     }
//   };

//   getComb(n, 0, 1, ary);

//   if (curMax == -1) answer = [-1];

//   return answer;
// }

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
