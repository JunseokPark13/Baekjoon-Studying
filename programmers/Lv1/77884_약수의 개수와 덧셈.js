function solution(left, right) {
    var answer = 0;
  
    const countNum = (n) => {
      let cnt = 0;
      for(let i = 1; i <= n; i++){
        if (n % i == 0)
          cnt++;
      }
      if (cnt % 2 == 0)
        answer += n;
      else
        answer -= n;
    }
  
    for(let i = left; i <= right; i++)
      countNum(i);
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/77884
  
  console.log("after  : ", solution(13, 17));
  console.log("answer : ", 43);
  console.log("\n");
  
  console.log("after  : ", solution(24, 27));
  console.log("answer : ", 52);
  console.log("\n");