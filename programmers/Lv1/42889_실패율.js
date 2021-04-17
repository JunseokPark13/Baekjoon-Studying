function srt(a,b){
    if(a[1]===b[1]) return a[0]-b[0];
    return b[1]-a[1];
}

function solution(N, stages) {
    var answer = [];
    var users = stages.length;
    var clear = new Array(N+1);
    clear.fill(0);
    for(let i in clear){
        clear[i] = new Array(2);
        clear[i][0] = parseInt(i)+1;
        clear[i][1] = 0;
    }
    
    for(let i = 0; i<stages.length; i++){
        clear[stages[i]-1][1]++;
    }
    clear.pop();
    
    for(let i=0; i<clear.length; i++){
        var temp = clear[i][1];
        clear[i][1] = clear[i][1]/users;
        users-=temp;
    }
    
    clear.sort(srt);
    
    for(var i=0; i<clear.length;i++){
        answer.push(clear[i][0]);
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42889