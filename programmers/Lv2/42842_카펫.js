function solution(brown, yellow) {
    var answer = [];
    var all = brown+yellow;
    
    let x = 3, y = 3;
    
    while(x*y<=all && x>=y){
        while(x*y<=all && x>=y){
            let brownNum = 2*x + 2*(y-2);
            if(brownNum===brown) {
                answer.push(x); answer.push(y);
                return answer;
            }
            else y++;
        }
        x++;  y=3;
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42842