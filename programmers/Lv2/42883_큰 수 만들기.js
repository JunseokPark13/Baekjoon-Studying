function solution(number, k) {
    var answer = '';
    var ary = number.split('');
    var stack = [];
   
    for(let i = 0; i<ary.length; i++){
        let a = ary[i];

        while(k>0 && stack[stack.length-1]<a){
            stack.pop();
            k--;
        }
        stack.push(a);  
    }
    
    stack.splice(stack.length-1,k);
    console.log(stack);
    
    answer = stack.join('');
    
    
    return answer;
}

function solution(number, k) {
    let stack = []
  
    for(let i = 0; i < number.length; i++){
      let n = number[i];
      while (k > 0 && stack[stack.length - 1] < n){
        k--;
        stack.pop()
      }
      stack.push(n);
    }
  
    stack.splice(stack.length - k, k);
  
    return stack.join("");
  } // 2021-06-28
  
  // https://programmers.co.kr/learn/courses/30/lessons/42883
  
  console.log("after  : ", solution("1924", 2));
  console.log("answer : ", "94");
  console.log("\n");
  
  console.log("after  : ", solution("1231234", 3));
  console.log("answer : ", "3234");
  console.log("\n");
  
  console.log("after  : ", solution("4177252841", 4));
  console.log("answer : ", "775841");
  console.log("\n");