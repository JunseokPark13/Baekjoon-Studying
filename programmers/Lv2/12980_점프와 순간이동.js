function solution(n){
    var ans = 0;
    if (n == 1)
      return 1;
  
    while (n != 0){
      if (n % 2 == 1){
        n--;
        ans++;
      } else{
        n /= 2;
      }
    }
    return ans;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12980
  
  console.log("after  : ", solution(5));
  console.log("answer : ", 2);
  console.log("\n"); 
  
  console.log("after  : ", solution(6));
  console.log("answer : ", 2);
  console.log("\n"); 
  
  console.log("after  : ", solution(5000));
  console.log("answer : ", 5);
  console.log("\n"); 