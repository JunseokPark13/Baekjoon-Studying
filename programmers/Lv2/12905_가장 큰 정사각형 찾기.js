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

function solution(board) {
    let max = 0;
  
    const getMin = (a, b, c) => {
      let min = a < b ? a : b;
      min = min < c ? min : c;
      return min;
    };
  
    const check_board = (brd) => {
      for (let i = 1; i < brd.length; i++) {
        for (let j = 1; j < brd[0].length; j++) {
          if (max === 0 && brd[i][j] === 1) max = 1;
          if (
            brd[i][j] !== 0 &&
            brd[i - 1][j - 1] > 0 &&
            brd[i][j - 1] > 0 &&
            brd[i - 1][j] > 0
          ) {
            brd[i][j] =
              getMin(brd[i - 1][j - 1], brd[i][j - 1], brd[i - 1][j]) + 1;
            if (brd[i][j] > max) max = brd[i][j];
          }
        }
      }
    };
  
    if (board.length === 1) {
      max = board[0].includes(1) ? 1 : 0;
    } else if (board[0].length === 1) {
      for (let i of board) {
        if (i[0] === 1) {
          max = 1;
          break;
        }
      }
    } else {
      check_board(board);
    }
    return max * max;
  } // 2021-06-17

  console.log(
    "solution : ",
    solution([
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ])
  );
  console.log("answer   : ", 9);
  console.log("\n");
  
  console.log(
    "solution : ",
    solution([
      [0, 1, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
    ])
  );
  console.log("answer   : ", 1);
  console.log("\n");
  
  console.log(
    "solution : ",
    solution([
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ])
  );
  console.log("answer   : ", 4);
  console.log("\n");
  
  console.log(
    "solution : ",
    solution([
      [0, 0, 0, 1],
      [1, 1, 1, 1],
    ])
  );
  console.log("answer   : ", 1);
  console.log("\n");
  
  console.log("solution : ", solution([[0, 0, 0, 1]]));
  console.log("answer   : ", 1);
  console.log("\n");
  
  console.log("solution : ", solution([[0], [0], [0], [1], [0]]));
  console.log("answer   : ", 1);
  console.log("\n");