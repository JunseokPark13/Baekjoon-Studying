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

// https://programmers.co.kr/learn/courses/30/lessons/42883