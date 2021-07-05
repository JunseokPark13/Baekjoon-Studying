function solution(block, board) {
    let candidate = [];
    let max = 0;
  
    const showBrd = (brd) => {
      for (let i of brd) console.log(i);
      console.log("");
    };
   console.log("block : ", block)
  
    const checkBlockSpace = (brd, block, x, y) => {
      if (block == 0) {
        if (y + 2 >= brd.length) return false;
        if (brd[y][x] == 0 && brd[y + 1][x] == 0 && brd[y + 2][x] == 0)
          return true;
        else return false;
      } else if (block == 1) {
        if (x + 2 >= brd.length) return false;
        if (brd[y][x] == 0 && brd[y][x + 1] == 0 && brd[y][x + 2] == 0)
          return true;
        else return false;
      } else if (block == 2) {
        if (y - 1 < 0 || x + 1 >= brd.length) return false;
        if (brd[y][x] == 0 && brd[y - 1][x] == 0 && brd[y][x + 1] == 0)
          return true;
        else return false;
      } else if (block == 3) {
        if (y - 1 < 0 || x - 1 < 0) return false;
        if (brd[y][x] == 0 && brd[y - 1][x] == 0 && brd[y][x - 1] == 0)
          return true;
        else return false;
      } else if (block == 4) {
        if (y + 1 >= brd.length || x - 1 < 0) return false;
        if (brd[y][x] == 0 && brd[y + 1][x] == 0 && brd[y][x - 1] == 0)
          return true;
        else return false;
      } else if (block == 5) {
        if (y + 1 >= brd.length || x + 1 >= brd.length) return false;
        if (brd[y][x] == 0 && brd[y + 1][x] == 0 && brd[y][x + 1] == 0)
          return true;
        else return false;
      }
    };
  
    const controlBoard = (brd, block, x, y, cs) => {
      if (block == 0) {
        brd[y][x] = cs;
        brd[y + 1][x] = cs;
        brd[y + 2][x] = cs;
      } else if (block == 1) {
        brd[y][x] = cs;
        brd[y][x + 1] = cs;
        brd[y][x + 2] = cs;
      } else if (block == 2) {
        brd[y][x] = cs;
        brd[y - 1][x] = cs;
        brd[y][x + 1] = cs;
      } else if (block == 3) {
        brd[y][x] = cs;
        brd[y - 1][x] = cs;
        brd[y][x - 1] = cs;
      } else if (block == 4) {
        brd[y][x] = cs;
        brd[y + 1][x] = cs;
        brd[y][x - 1] = cs;
      } else if (block == 5) {
        brd[y][x] = cs;
        brd[y + 1][x] = cs;
        brd[y][x + 1] = cs;
      }
    };
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] == 0) {
          if (checkBlockSpace(board, block, j, i)) candidate.push([j, i]);
        }
      }
    }
  
    console.log(candidate);
  
    for (let i = 0; i < candidate.length; i++) {
      let x = candidate[i][0];
      let y = candidate[i][1];
      let cnt = 0;
      controlBoard(board, block, x, y, 1);
      showBrd(board)
      for (let i = y; i < y + 3; i++) {
        let check = 1;
        for (let j = 0; j < board.length; j++) {
          if (check && board[i][j] != 1) {
            check = 0;
          }
        }
        if (check) cnt++;
      }
      controlBoard(board, block, x, y, 0);
      if (cnt > max) max = cnt;
    }
  
    return max;
  } // 2021-07-04
  
  let brd = [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ];
  
  console.log("after  : ", solution(0, brd));
  console.log("answer : ", 2);
  console.log("\n");
  
  console.log("after  : ", solution(1, brd));
  console.log("answer : ", 1);
  console.log("\n");
  
  
  console.log("after  : ", solution(2, brd));
  console.log("answer : ", 1);
  console.log("\n");
  
  
  console.log("after  : ", solution(3, brd));
  console.log("answer : ", 1);
  console.log("\n");
  
  
  console.log("after  : ", solution(4, brd));
  console.log("answer : ", 2);
  console.log("\n");
  
  console.log("after  : ", solution(5, brd));
  console.log("answer : ", 0);
  console.log("\n");
  