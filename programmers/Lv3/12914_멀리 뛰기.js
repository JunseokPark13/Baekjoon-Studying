function solution(n) {
    let left = 1
    let right = 2
    let sum
  
    if (n === 1) return 1
    else if (n === 2) return 2
  
    for(let i = 3; i <= n; i++){
      sum = (left % 1234567) + (right % 1234567)
      left = right
      right = sum 
    }
  
    return sum % 1234567;
  } // 2021-07-12
  
  // https://programmers.co.kr/learn/courses/30/lessons/12914
  
  console.log("after  : ", solution(1));
  console.log("answer : ", 1);
  console.log("\n");
  
  console.log("after  : ", solution(2));
  console.log("answer : ", 2);
  console.log("\n");
  
  console.log("after  : ", solution(3));
  console.log("answer : ", 3);
  console.log("\n");
  
  console.log("after  : ", solution(4));
  console.log("answer : ", 5);
  console.log("\n");
  
  console.log("after  : ", solution(5));
  console.log("answer : ", 8);
  console.log("\n");
  
  console.log("after  : ", solution(6));
  console.log("answer : ", 13);
  console.log("\n");
  
  console.log("after  : ", solution(7));
  console.log("answer : ", 21);
  console.log("\n");
  
  console.log("after  : ", solution(20));
  console.log("answer : ", 10946);
  console.log("\n");
  
  console.log("after  : ", solution(49));
  console.log("answer : ", 1093027);
  console.log("\n");
  
  console.log("after  : ", solution(99));
  console.log("answer : ", 963606);
  console.log("\n");