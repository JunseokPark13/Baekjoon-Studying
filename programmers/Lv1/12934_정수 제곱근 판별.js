function solution(n) {
    var answer = 0;
    if(Math.sqrt(n)%2 == 0 || Math.sqrt(n)%2 == 1){
       answer = Math.pow((Math.sqrt(n)+1),2);
    }
    else{
       answer = -1; 
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12934