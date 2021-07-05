function solution(n) {
    var answer = '';
    var ary = [4, 1, 2];
    var k = 0;
    
    while(n){
        answer = ary[n%3] + answer;
        n = (n%3===0) ? n/3-1 : Math.floor(n/3);
    }

    return answer;
}

function solution(n) {
    let answer = ''
  
    let set = [4, 1, 2]
  
    //console.log(set[0], set[1], set[2])
  
    while (n){
      answer = set[n % 3] + answer
      n = (n % 3 === 0) ? n / 3 - 1 : Math.floor(n / 3)
    }
  
   return answer
  } // 2021-07-02
  
  // https://programmers.co.kr/learn/courses/30/lessons/12899
  
  
  console.log("after  : ", solution(1));
  console.log("answer : ", 1);
  console.log("\n");
  
  console.log("after  : ", solution(2));
  console.log("answer : ", 2);
  console.log("\n");
  
  console.log("after  : ", solution(3));
  console.log("answer : ", 4);
  console.log("\n");
  
  
  console.log("after  : ", solution(4));
  console.log("answer : ", 11);
  console.log("\n");
  
  console.log("after  : ", solution(5));
  console.log("answer : ", 12);
  console.log("\n");
  
  console.log("after  : ", solution(6));
  console.log("answer : ", 14);
  console.log("\n");
  
  console.log("after  : ", solution(7));
  console.log("answer : ", 21);
  console.log("\n");
  
  console.log("after  : ", solution(8));
  console.log("answer : ", 22);
  console.log("\n");
  
  console.log("after  : ", solution(9));
  console.log("answer : ", 24);
  console.log("\n");
  
  console.log("after  : ", solution(10));
  console.log("answer : ", 41);
  console.log("\n");