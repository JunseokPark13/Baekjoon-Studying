// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const problemInput = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`

var addTwoNumbers = function(l1, l2) {
  function getNumber(list, num, unit) {
      num += list.val * unit
      if (!list.next) {
          console.log(`escape! ${num}`)
          return num
      } else {
          getNumber(list.next, num, unit * 10)
      }
      
  }

  const l1Num = getNumber(l1, 0, 1)
  console.log(l1Num)
};

addTwoNumbers()

// https://programmers.co.kr/learn/courses/30/lessons/86971

// console.log("=============================");

// console.log(`result : ${solution(6, ary)}`);
// console.log(`answer : ${2}`);
// console.log("=============================");


