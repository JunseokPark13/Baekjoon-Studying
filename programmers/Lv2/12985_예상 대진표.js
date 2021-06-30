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

  
  function solution(N, A, B) {
    let answer = 0;
  
    while (1){
      A = A % 2 == 1 ? Math.floor(A / 2) + 1 : A / 2
      B = B % 2 == 1 ? Math.floor(B / 2) + 1 : B / 2
      answer++
      if (A == B) break;
    }
  // 
    return answer;
  } // 2021-06-30
  
  // https://programmers.co.kr/learn/courses/30/lessons/12985
