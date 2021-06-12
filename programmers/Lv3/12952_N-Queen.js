function solution(n) {
    var answer = 0;
    let board = new Array(n).fill(-1);
    const len = n;
  
    const checkPos = (n, board) => {
      for(let i = 0; i < n; i++){
        if (board[i] == board[n] || 
          (Math.abs(board[n] - board[i]) == Math.abs(n - i)))
          return (false);
      }
      return (true);
    }
  
    const setQueen = (n, brd) => {
      if (checkPos(n, brd)){
        if (n == len - 1){
          answer++;
          return ;
        }
        else{
          for(let i = 0; i < len; i++){
            brd[n + 1] = i;
            setQueen(n + 1, brd);
          }
        }
      }
    }
  
    for(let i = 0; i < len; i++){
      board[0] = i;
      setQueen(0, board);
    }
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12952
  
  console.log("after  : ", solution(8));
  console.log("answer : ", 2);
  console.log("\n");