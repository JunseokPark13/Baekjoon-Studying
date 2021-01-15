function solution(n) {
    var answer = [];
    
    n = n.toString();
    
    for(var i in n){
        answer.unshift(parseInt(n[i]));
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12932