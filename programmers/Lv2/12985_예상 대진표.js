function solution(n,a,b){
    var answer = 1;
    let left, right;
  
    [left, right] = a < b ? [a, b] : [b, a];
  
    while (!(left % 2 == 1 && left + 1 == right))
    {
      answer++;
      left = Math.ceil(left / 2);
      right = Math.ceil(right / 2);
    }
    return answer;
  }
  // https://programmers.co.kr/learn/courses/30/lessons/12985
  
  console.log("after  : ", solution(8, 4, 7));
  console.log("answer : ", 3);
  console.log("\n");
