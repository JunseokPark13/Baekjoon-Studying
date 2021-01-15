function solution(n)
{
    var answer = 0;
    var k = n.toString();

    for(var i =0; i<k.length; i++){
        answer += parseInt(k[i]);
    }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12931