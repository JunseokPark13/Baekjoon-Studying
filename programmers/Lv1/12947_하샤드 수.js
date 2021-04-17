function solution(x) {
    var answer = false;
    var num = x.toString();
    var sum = 0;
    for(var i=0; i<num.length; i++){
        sum+=parseInt(num[i]);
    }
    if(x%sum==0) answer=true;
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12947