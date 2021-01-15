function solution(a, b) {
    var answer = 0;
    
    if(a>b) [a,b] = [b,a];
    
    for(var i = a; i<=b; i++){
        answer+=i;
    }
    
    return answer;
}

// return (a+b)*(Math.abs(b-a)+1)/2;


// https://programmers.co.kr/learn/courses/30/lessons/12912