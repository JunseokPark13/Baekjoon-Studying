function solution(m, n, board) {
    var answer = 0;
    
    var gameboard = new Array(n);
    for(let i = 0; i < n; i++)
      gameboard[i] = new Array(m);
  
    for(let i = 0; i < n; i++)
      for(let j = m - 1; j >= 0; j--)
        gameboard[i][j] = board[j][n - i - 1];
  
  
    var checkboard = new Array(n);
    for(let i = 0; i < n; i++)
    {
      checkboard[i] = new Array(m);
      checkboard[i].fill("X");
    }
  
    const check_shape = (brd, i, j) => {
      if (brd[i][j] == "-")
        return false;
      if (brd[i][j] == brd[i][j + 1] &&
          brd[i][j] == brd[i + 1][j] &&
          brd[i][j] == brd[i + 1][j + 1])
        return true;
      else
        return false;
    }
  
    const check_square = (brd, i, j) => {
      brd[i][j] = "O";
      brd[i][j + 1] = "O";
      brd[i + 1][j] = "O";
      brd[i + 1][j + 1] = "O";
    }
  
    const remove_square = (brd1, brd2) => {
      for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++)
          if (brd1[i][j] == "O")
            brd2[i][j] = "-";
    }
  
    const gravity = (brd, sh1, sh2) => {
      for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++)
          if (brd[i][j] == sh1)
          {
            brd[i].splice(j, 1);
            brd[i].unshift(sh2);
          }
    }
  
    const progress = () => {
      flag = 0;
      for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++)
          if (i + 1 != n && j + 1 != m && check_shape(gameboard, i, j))
          {
            flag++;
            check_square(checkboard, i, j);
          }
    }
  
    var flag = 1;
    
    while(flag)
    {
      progress();
      remove_square(checkboard, gameboard);
      gravity(gameboard, "-", "-");
      gravity(checkboard, "O", "-");
    }
  
    for(let i = 0; i < n; i++)
      for(let j = 0; j < m; j++)
        if (gameboard[i][j] == "-")
          answer++;
  
    return answer;
  }
  
  function solution(m, n, board) {
    let answer = 0;
    let newbrd;
  
    const change_brd = (board) => {
      newbrd = new Array(board[0].length);
      for(let i = 0; i < newbrd.length; i++){
        newbrd[i] = new Array(board.length).fill(0);
      }
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
          newbrd[board[0].length - j - 1][i] = board[i][j];
        }
      }
    }
  
    const check_square = (brd, x, y, set) => {
      let ch = brd[x][y];
      if (ch == "@") return ;
      if (brd[x + 1][y] == ch && brd[x][y + 1] == ch && brd[x + 1][y + 1] == ch){
        set.push([x, y]);
        set.push([x + 1, y])
        set.push([x, y + 1])
        set.push([x + 1, y + 1])
      }
    }
  
    const destroy_block = (newbrd) => {
      let set = []
      for(let i = 0; i < newbrd.length - 1; i++){
        for(let j = 0; j < newbrd[0].length - 1; j++){
          check_square(newbrd, i, j, set);
        }
      }
      for(let i of set){
        if (newbrd[i[0]][i[1]] != "@") answer++;
        newbrd[i[0]][i[1]] = "@";
      }
      if (set.length == 0) {
        flag = 0
        return ;
      }
      for(let i = 0; i < newbrd.length; i++){
        let before = newbrd[i]
        let after = newbrd[i].filter((val) => val != "@")
        let sub = before.length - after.length;
        if (sub > 0){
          while (sub--) after.unshift("@");
        }
        newbrd[i] = after;
      }
    }
   
    change_brd(board);
  
   let flag = 1;
  
    while (flag)
      destroy_block(newbrd);
    
    return answer;
  } // 2021-06-23
  
  // https://programmers.co.kr/learn/courses/30/lessons/17679
  
  
  console.log("after  : ", solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
  console.log("answer : ", 14);
  console.log("\n");
  
  console.log("after  : ", solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
  console.log("answer : ", 15);
  console.log("\n");