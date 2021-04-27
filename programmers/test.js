function solution(rows, columns, queries) {
  var answer = [];
  let tb = new Array(rows);
  for(let i = 0; i < rows; i++){
    tb[i] = new Array(columns);
  }
  console.log(tb);

  let n = 1;
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      tb[i][j] = n++;
    }
  }

  const print_ary = () => {
    for(let i = 0; i < rows; i++){
      console.log(tb[i]);
    }
  }


  print_ary();

  for(let i = 0; i <3; i++){
    let s_x = --queries[i][0];
    let s_y = --queries[i][1];
    let e_x = --queries[i][2];
    let e_y = --queries[i][3];

    let tmp;
    let tmp2;

    tmp = tb[s_x][e_y];
    
    for(let i = e_y; i > s_y; i--){
      tb[s_x][i] = tb[s_x][i - 1];
    }
    tb[s_x][s_y] = tb[s_x + 1][s_y];
    tmp2 = tb[e_x][e_y];
    
    for(let i = e_x; i > s_x; i--){
      tb[i][e_y] = tb[i - 1][e_y];
    }
    tb[s_x + 1][e_y] = tmp;

    tmp = tb[e_x][s_y];
    console.log(tmp);
    for(let i = s_y; i < e_y; i++){
      tb[e_x][i] = tb[e_x][i + 1];
    }
    tb[e_x][e_y - 1] = tmp2;

    for(let i = s_x + 1; i < e_x; i++){
      tb[i][s_y] = tb[i + 1][s_y];
    }
    tb[e_x - 1][s_y] = tmp;
  }

  console.log("\n");

  print_ary();


  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/77485

console.log("after  : ", solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
console.log("answer : ", [8, 10, 25]);
console.log("\n"); 

// console.log("after  : ", solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));
// console.log("answer : ", [1, 1, 5, 3]);
// console.log("\n"); 

// console.log("after  : ", solution(100, 97, [[1,1,100,97]]));
// console.log("answer : ", [1]);
// console.log("\n"); 




