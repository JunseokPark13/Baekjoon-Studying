function solution(orders, course) {
  let answer = []

  course.sort((a, b) => a - b);
  let max = course[course.length - 1];
  let allCourse = {}
  let maxCourse = {}

  for(let i of course) maxCourse[i] = 0;
  
  const makeComb = (set, order, comb, n) => {
    if (course.includes(comb.length)){
      set.add(comb);
    }
    if (n == order.length || comb.length == max) return
    
    let comb_t = comb + order[n]
    makeComb(set, order, comb, n + 1)
    makeComb(set, order, comb_t, n + 1)
  }

  for(let order of orders){
    let set = new Set();
    let arr = order.split('').sort()
    makeComb(set, arr, '', 0);
    for(let i of set){
      if (allCourse[i] == undefined) allCourse[i] = 1;
      else allCourse[i]++;
    }
  }

  for(let i in allCourse){
    if (maxCourse[i.length] < allCourse[i] && allCourse[i] > 1) maxCourse[i.length] = allCourse[i]
  }
  for(let i in allCourse){
    if (allCourse[i] == maxCourse[i.length]) answer.push(i);
  }

  return answer.sort();
} // 2021-06-30

// https://programmers.co.kr/learn/courses/30/lessons/72411



console.log("after  : ", solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
console.log("answer : ", ["AC", "ACDE", "BCFG", "CDE"]);
console.log("\n");

console.log("after  : ", solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
console.log("answer : ", ["ACD", "AD", "ADE", "CD", "XYZ"]);
console.log("\n");

console.log("after  : ", solution(["XYZ", "XWY", "WXA"], [2,3,4]));
console.log("answer : ", ["WX", "XY"]);
console.log("\n");






// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');


