function solution(progresses, speeds) {
    var answer = [];
    var left = [];
    
    for(let i=0; i<progresses.length; i++){
        left.push(Math.ceil((100-progresses[i])/speeds[i]))
    }

    while(left.length!==0){
        var count = 0;
        var check = true;
        for(let j=0; j<left.length; j++){
            if(left[0]>=left[j] && check) count++;
            else check=false;
        }
        left.splice(0,count);
        answer.push(count);
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42586