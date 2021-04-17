function solution(absolutes, signs) {
    var answer = 0;
  
    signs.forEach((x, i) => {
      answer += x ? absolutes[i] : -absolutes[i];
    })
  
    return answer;
  }