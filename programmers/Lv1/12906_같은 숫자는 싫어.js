function solution(arr)
{
    var answer = [];
    answer.push(arr[0]);
        
    for (var i=1; i<arr.length; i++){
        if(arr[i] == arr[i-1]) continue;
        else answer.push(arr[i]);
    }     
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12906