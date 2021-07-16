function solution(a) {
    let max = 0;
  
    if (a.length <= 1) return 0
  
    let numCheck = {}
    let sortCheck = []
  
    for(let i of a){
      if (numCheck[i] === undefined) numCheck[i] = 1;
      else numCheck[i]++
    }
  
    for(let i in numCheck) sortCheck.push([parseInt(i), numCheck[i]])
    
    sortCheck.sort((a, b) => b[1] - a[1])
    
  
    for(let k = 0; k < sortCheck.length; k++){
      if (max > sortCheck[k][1] * 2) continue
      let cnt = 0;
      let dup = -1
      for(let i = 0; i < a.length; i++){
        if (a[i] === sortCheck[k][0]){
          if (i !== 0 && a[i] !== a[i - 1] && i - 1 !== dup) {
            cnt += 2
          } else if (i + 1 !== a.length && a[i] !== a[i + 1]){
            dup = i + 1;
            i++;
            cnt += 2
          } 
        }
      }
      if (max < cnt) max = cnt
    }
  
    return max;
  } // 2021-07-16
  
  // https://programmers.co.kr/learn/courses/30/lessons/70130
  
  console.log("after  : ", solution([0]));
  console.log("answer : ", 0);
  console.log("\n");
  
  console.log("after  : ", solution([1, 1]));
  console.log("answer : ", 0);
  console.log("\n");
  
  console.log("after  : ", solution([1, 2]));
  console.log("answer : ", 2);
  console.log("\n");
  
  console.log("after  : ", solution([5,2,3,3,5,3]));
  console.log("answer : ", 4);
  console.log("\n");
  
  console.log("after  : ", solution([0,3,3,0,7,2,0,2,2,0]));
  console.log("answer : ", 8);
  console.log("\n");
  
  console.log("after  : ", solution([0, 0, 3, 1, 2, 1, 3, 4, 0, 1, 4]));
  console.log("answer : ", 6);
  console.log("\n");
  
  console.log("after  : ", solution([0, 3, 1, 6, 0, 2, 0, 7, 1, 3, 4, 0, 5, 1, 1]));
  console.log("answer : ", 8);
  console.log("\n");
  
  console.log("after  : ", solution([0, 0, 0, 2, 3, 4, 3, 5, 3, 1]));
  console.log("answer : ", 6);
  console.log("\n");
  
  console.log("after  : ", solution([4, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3]));
  console.log("answer : ", 6);
  console.log("\n");