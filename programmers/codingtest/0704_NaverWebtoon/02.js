function solution(money, cost) {
    let candidate = {};
  
    let acc = 0;
    let start = -1;
  
    for (let i = 0; i < cost.length; i++) {
      if (start < 0 && cost[i] < money) {
        start = i;
        acc = cost[i];
      } else if (acc + cost[i] > money) {
        if (candidate[acc] == undefined){
          candidate[acc] = [start, i - 1];
          start = -1;
        }
        else {
          if (candidate[acc][1] - candidate[acc][0] < i - 1 - start){
            candidate[acc] = [start, i - 1];
            start = -1;
          }
        }
      } else {
        acc += cost[i];
      }
    }
  
    if (acc <= money && start >= 0) {
      if (candidate[acc] == undefined){
        candidate[acc] = [start, cost.length - 1];
      } else{
        if (candidate[acc][1] - candidate[acc][0] < i - 1 - start){
          candidate[acc] = [start, cost.length - 1];
        }
      }
      
    }
  
    let max = 0;
  
    for (let i in candidate) {
      if (i != 0) {
        if (candidate[i][1] - candidate[i][0] + 1 > max)
          max = candidate[i][1] - candidate[i][0] + 1;
      }
    }
  
    return max;
  } // 2021-07-04
  
  console.log("after  : ", solution(420, [0, 900, 0, 200, 150, 0, 30, 50]));
  console.log("answer : ", 5);
  console.log("\n");
  
  console.log(
    "after  : ",
    solution(420, [0, 900, 0, 200, 150, 0, 30, 10, 20, 30, 10])
  );
  console.log("answer : ", 7);
  console.log("\n");
  
  console.log(
    "after  : ",
    solution(
      420,
      [
        0, 900, 0, 200, 150, 0, 30, 10, 20, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        30, 60,
      ]
    )
  );
  console.log("answer : ", 13);
  console.log("\n");
  
  console.log("after  : ", solution(100, [245, 317, 151, 192]));
  console.log("answer : ", 0);
  console.log("\n");
  
  console.log("after  : ", solution(30, [500, 10, 10, 10, 500, 10, 0, 0, 0, 10, 10, 500]));
  console.log("answer : ", 6);
  console.log("\n");
  