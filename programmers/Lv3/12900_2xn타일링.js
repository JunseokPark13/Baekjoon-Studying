function solution(n) {
    var answer = 0;
  
    if (n == 0) {
      return (0);
    } else if (n == 1){
      return (1);
    } else if (n == 2){
      return (2);
    }
  
    let left = 1;
    let right = 2;
    for(let i = 3; i <= n; i++){
      answer = (left + right) % 1000000007;
      left = right % 1000000007;
      right = answer;
    }
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12900
  
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
  
  console.log("after  : ", solution(11));
  console.log("answer : ", 144);
  console.log("\n");
  
  console.log("after  : ", solution(52));
  console.log("answer : ", 316290802);
  console.log("\n");


function solution(n) {
  var answer = 0;
  let diction = [];

  const factorial = (n, k = 0) => {
    let sum = 1;
    if (n == 0 || n == 1) {
      return 1;
    }
    if (k == 0 && diction[n] != undefined) {
      return diction[n];
    } else if (k != 0 && diction[n] != undefined && diction[k] != undefined) {
      return diction[n] / diction[k];
    }
    for (let i = k + 1; i <= n; i++) {
      sum *= i;
    }
    if (k == 0) {
      diction[n] = sum;
    }
    return sum;
  };

  let rowblock = n / 2;

  for (let i = 0; i <= rowblock; i++) {
    let a = n - 2 * i;
    let b = i;
    answer += factorial(a + b, a) / factorial(b);
  }

  return (answer %= 1000000007);
}
