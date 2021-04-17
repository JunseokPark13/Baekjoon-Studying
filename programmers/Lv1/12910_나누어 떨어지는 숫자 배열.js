function num(a,b){
    return a - b;
}

function solution(arr, divisor) {
    var answer = [];
    
    for(var i in arr){
        if(arr[i]%divisor === 0) answer.push(arr[i]); 
    }
    
    answer.sort(num);
    if(answer.length===0) answer.push(-1);
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12910