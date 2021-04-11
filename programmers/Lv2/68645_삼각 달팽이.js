function solution(n) {
    var res = [];
    var answer =[];
    
    for(var i = 1; i<=n; i++){
        res.push(Array.from({length:i}, ()=>0));
    }
    
    let count = 0, startR = 0, startC = 0, endR = n-1, endC = n-1, counter = 1;
    
    while(startR<=endR && startC <= endC){
        for(let i = startR; i<=endR; i++){
            res[i][startC] = counter;
            counter++;
        }
        startR++;
        startC++;
        
        for(let i = startC; i<=endC; i++){
            res[endR][i] = counter;
            counter++;
        }
        endR--;
        endC--;
        for(let i = endR; i>=startR; i--){
            res[i][res[i].length-1-count] = counter;
            counter++;
        }
        endC--;
        startR++;
        count++;
    }
    
    
    for(let i in res){
        for(let j in res[i]){
            answer.push(res[i][j]);
        }
    }

    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/68645