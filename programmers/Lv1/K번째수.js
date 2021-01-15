function check(a,b){
    return a-b;
}

function solution(array, commands) {
    var answer = [];
    for(var i = 0; i <commands.length; i++){
        var k = array.slice(commands[i][0]-1,commands[i][1]);
        k.sort(check);
        answer[i] = k[commands[i][2]-1];
    }
    
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/42748