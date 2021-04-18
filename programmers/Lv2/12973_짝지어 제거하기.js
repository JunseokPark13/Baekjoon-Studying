function solution(s){
    var answer = 0;
    let stack = [];
  
    stack.push(s[0]);
    for(let i = 1; i < s.length; i++)
    {
      stack.push(s[i]);
      if (stack[stack.length - 1] == stack[stack.length - 2]){
        stack.pop();
        stack.pop();
      }
    }
    if (stack.length == "") answer = 1;
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12973
  
  console.log("after  : ", solution("baabaa"));
  console.log("answer : ", 1);
  console.log("\n");
  
  console.log("after  : ", solution("cdcd"));
  console.log("answer : ", 0);
  console.log("\n");
  
  
  
  
  
  // function solution(s){
  //   var answer = 0;
  
  //   let ary = s.split("");
  
  //   for(let i = 0; i < ary.length - 1; i++){
  //     let n = 1;
  //     while (ary[i] != "-" && ary[i + n] == "-")
  //       n++;
  //     //console.log(ary, i, i+n,  ary[i], ary[i + n]);
  //     if (ary[i] != "-" && ary[i] == ary[i + n]){
  //       ary[i] = "-"
  //       ary[i + n] = "-"
  //       if (i - 2 < 0) i = -1;
  //       else i -= 2;
  //     }
  //   }
  
  //   for(let i = 0; i < ary.length; i++){
  //     if (ary[i] != "-")
  //       return 0;
  //   }
  //   return 1;
  // }