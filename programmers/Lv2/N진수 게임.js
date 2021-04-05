function solution(n, t, m, p) {
    var answer = '';
    var str = '';
    var cnt = 0;
  
    for(let i = 0; i <= t * m; i++)
      str += i.toString(n);
  
    for(let i = 0; i < str.length; i++)
      if(i % m == p - 1 && cnt != t)
      {
        answer += str[i];
        cnt++;
      }
    answer = answer.toUpperCase();
  
    return answer;
  }
  
  
//   solution(2, 4, 2, 1);
//   console.log("\n");
  
//   solution(16, 16, 2, 1);
//   console.log("\n");
  
//   solution(16, 16, 2, 2);
//   console.log("\n");

  // https://programmers.co.kr/learn/courses/30/lessons/17687