function solution(board)
{
    var answer = 0;
    var y = board.length;
    var x = board[0].length;
    
    if(y<2 || x <2){
        for(let i =0; i<y; i++){
            for(let j=0; j<x; j++){
                if(board[i][j]===1) return 1;
            }
        }
    }
    else{
        for(let i =1; i<y; i++){
            for(let j=1; j<x; j++){
                if(board[i][j]===1)
                    board[i][j] = Math.min(board[i][j-1], board[i-1][j-1], board[i-1][j])+1;
                if(answer < board[i][j]) answer = board[i][j];
            }
        }
    }
    return answer * answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12905