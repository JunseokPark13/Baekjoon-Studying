function solution(arr) {
    var answer = (arr.reduce((acc, val)=>{
        return acc+val;
    }))/arr.length;
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12944