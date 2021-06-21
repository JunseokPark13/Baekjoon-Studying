function solution(arr) {
    var answer = [0, 0];
    let len = arr.length;
  
    const check_numbers = (ary, row, col, size) => {
      let num = ary[col][row];
      for(let i = col; i < col + size; i++){
        for(let j = row; j < row + size; j++){
          if (num != ary[i][j]){
            return false;
          }
        }
      }
      if (!num){
        answer[0]++;
      } else{
        answer[1]++;
      }
      change_sign(ary, row, col, size);
      return true;
    }
  
    const change_sign = (ary, row, col, size) => {
      for(let i = col; i < col + size; i++){
        for(let j = row; j < row + size; j++){
          ary[i][j] = "-";
        }
      }
    }
  
    const check_array = (ary, row, col, size) => {
      if (size != 2){
        if(!check_numbers(ary, row, col, size / 2)){
          check_array(ary, row, col, size / 2);
        } 
        if(!check_numbers(ary, row, col + size /2, size / 2)){
          check_array(ary, row, col + size /2, size / 2);
        } 
        if(!check_numbers(ary, row + size / 2, col, size / 2)){
          check_array(ary, row + size / 2, col, size / 2);
        } 
        if(!check_numbers(ary, row + size / 2, col + size / 2, size / 2)){
          check_array(ary, row + size / 2, col + size / 2, size / 2);
        } 
      }
    }
  
    const count_numbers = (ary) => {
      for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
          if (ary[i][j] == 0){
            answer[0]++;
          } else if (ary[i][j] == 1){
            answer[1]++;
          }
        }
      }
    }
  
    if (!check_numbers(arr, 0, 0, len)){
      check_array(arr, 0, 0, len);
      count_numbers(arr);
    }
  
    return answer;
  }
  
  function solution(arr) {
    var answer = [0, 0];
  
    const check_area = (arr, x, y, len) => {
      if (len < 1){
        return ;
      }
      let num = arr[x][y];
      for(let i = x; i < x + len; i++){
        for(let j = y; j < y + len; j++){
          if (!(i == x && j == y) && arr[i][j] !== num){
            len /= 2
            check_area(arr, x, y, len);
            check_area(arr, x + len, y, len);
            check_area(arr, x, y + len, len);
            check_area(arr, x + len, y + len, len);
            return ;
          }
        }
      }
      answer[num]++;
    }
  
    check_area(arr, 0, 0, arr.length);
    return answer;
  } // 2021-06-21
  
  // https://programmers.co.kr/learn/courses/30/lessons/68936
  
  console.log("solution : ", solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]]));
  console.log("answer   : ", [4,9]);
  console.log("\n");
  
  console.log("solution : ", solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]]));
  console.log("answer   : ", [10,15]);
  console.log("\n");
  
  
  
  
  