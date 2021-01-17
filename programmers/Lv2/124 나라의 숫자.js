function solution(n) {
    var answer = '';
    var ary = [4, 1, 2];
    var k = 0;
    
    while(n){
        answer = ary[n%3] + answer;
        n = (n%3===0) ? n/3-1 : Math.floor(n/3);
    }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12899