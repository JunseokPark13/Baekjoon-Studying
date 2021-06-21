// function solution(s){

//     var left = 0, right =0;
//     if(s[0]===')' || s[s.length-1]==='(') return false;
//     else if(s.length%2===1) return false;
//     else {
//         for(let i=0; i<s.length;i++){
//             if(s[i]==='(') left++;
//             else right ++;
//             if(right>left) return false;
//         }
//         if(right===left) return true;
//         else return false;
//     }
// }



function solution(s){
    var left = 0, right =0;
    for(let i=0; i<s.length;i++){
        if(s[i]==='(') left++;
        else right ++;
        if(right>left) return false;
    }
    if(right===left) return true;
    else return false;
}

// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
    var answer = true;
  
    let left = 0;
    
  
    if (s[0] == ')' || s[s.length - 1] == '(') return false;
  
    for(let i = 0; i < s.length; i++){
      if (s[i] == '(') left++;
      else left--;
      if (left < 0) return false;
    }
    if (left != 0) return false;
    else return true;
  } // 2021-06-17
  
  
  console.log("solution : ", solution("()()"));
  console.log("answer   : ", true);
  console.log("\n");
  
  console.log("solution : ", solution("(())()"));
  console.log("answer   : ", true);
  console.log("\n");
  
  console.log("solution : ", solution(")()("));
  console.log("answer   : ", false);
  console.log("\n");
  
  console.log("solution : ", solution("(()("));
  console.log("answer   : ", false);
  console.log("\n");
  