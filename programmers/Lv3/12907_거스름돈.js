// function solution(n, money) {
//   var answer = 0;

//   const checkMoney = (n, start) => {
//     if (n == 0) {
//       answer++;
//     } else if (n < 0) {
//       return;
//     } else {
//       for (let i = start; i < money.length; i++) {
//         checkMoney(n - money[i], i);
//       }
//     }
//   };

//   checkMoney(n, 0);
//   return answer;
// }

function solution(n, money) {
  var answer = 0;
  let cases = new Array(n + 1).fill(0);
  cases[0] = 1;

  for (let i = 0; i < money.length; i++) {
    cases[money[i]]++;
    for (let j = money[i] + 1; j <= n; j++) {
      cases[j] += cases[j - money[i]];
    }
  }

  answer = cases[n] % 1000000007;

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12907

console.log("after  : ", solution(5, [1,2,5]));
console.log("answer : ", 4);
console.log("\n");