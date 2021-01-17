function solution(num) {
    var answer =0;
    var count=0;
    while(1){
        if(num===1){
            answer = count;
            break;
        }
        if(count>=500 && num!==1){
            answer=-1;
            break;
        }
        if(num%2===0) num/=2;
        else num = num*3+1;
        count++;
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12943