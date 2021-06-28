function solution(n) {
  var res = [];
  var answer = [];

  for (var i = 1; i <= n; i++) {
    res.push(Array.from({ length: i }, () => 0));
  }

  let count = 0,
    startR = 0,
    startC = 0,
    endR = n - 1,
    endC = n - 1,
    counter = 1;

  while (startR <= endR && startC <= endC) {
    for (let i = startR; i <= endR; i++) {
      res[i][startC] = counter;
      counter++;
    }
    startR++;
    startC++;

    for (let i = startC; i <= endC; i++) {
      res[endR][i] = counter;
      counter++;
    }
    endR--;
    endC--;
    for (let i = endR; i >= startR; i--) {
      res[i][res[i].length - 1 - count] = counter;
      counter++;
    }
    endC--;
    startR++;
    count++;
  }

  for (let i in res) {
    for (let j in res[i]) {
      answer.push(res[i][j]);
    }
  }

  return answer;
}

function solution(n) {
  let arys = new Array(n);
  for (let i = 1; i <= n; i++) {
    arys[i - 1] = new Array(i).fill(0);
  }

  let num = 1;
  const cycle = (arr, a, b, c) => {
    for (let i = a; i < n - c; i++) {
      arr[i][c] = num++;
      if (i == n - b) {
        for (let j = b; j < arr[i].length - b; j++) {
          arr[i][j] = num++;
        }
      }
    }
    for (let i = n - b; i > a; i--) {
      arr[i][arr[i].length - b] = num++;
    }
  };

  let cnt = 0;
  let a = 0,
    b = 1,
    c = 0;
  while (cnt < Math.floor(n / 3) + 1) {
    cycle(arys, a, b, c);
    a += 2;
    b++;
    c++;
    cnt++;
  }

  let answer = [];
  for (let i of arys) {
    for (let j of i) {
      answer.push(j);
    }
  }

  return answer;
} // 2021-06-23

// https://programmers.co.kr/learn/courses/30/lessons/68645

console.log("after  : ", solution(4));
console.log("answer : ", [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
console.log("\n");

console.log("after  : ", solution(5));
console.log("answer : ", [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
console.log("\n");

console.log("after  : ", solution(6));
console.log(
  "answer : ",
  [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]
);
console.log("\n");
