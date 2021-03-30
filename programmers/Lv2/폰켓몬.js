function solution(nums) {
    var answer = 0;
    const canGet = nums.length/2;
    
    let k = new Set(nums);
    
    if(k.size>canGet) answer = canGet;
    else answer = k.size
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/1845