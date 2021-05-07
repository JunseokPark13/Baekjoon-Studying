function solution(A, B) {
    var answer = 0;
    const people = A.length;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
  
    let i = 0;
    let j = 0;
  
    while (i < people && j != people){
      if (A[i] < B[j++]){
        answer++;
        i++;
      }
    }
  
    return answer;
  }
  
  // 1 3 5 7
  // 2 2 6 8
  
  // https://programmers.co.kr/learn/courses/30/lessons/12987
  
  console.log("after  : ", solution([5, 1, 3, 7], [2, 2, 6, 8]));
  console.log("answer : ", 3);
  console.log("\n");
  
  console.log("after  : ", solution([2, 2, 2, 2], [1, 1, 1, 1]));
  console.log("answer : ", 0);
  console.log("\n");
  
  