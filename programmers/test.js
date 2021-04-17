function solution(absolutes, signs) {
  var answer = 0;

  signs.forEach((x, i) => {
    answer += x ? absolutes[i] : -absolutes[i];
  })

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/76501

console.log("after  : ", solution([4,7,12], [true,false,true]));
console.log("answer : ", 9);
console.log("\n");

console.log("after  : ", solution([1,2,3], [false,false,true]	));
console.log("answer : ", 0);
console.log("\n");

