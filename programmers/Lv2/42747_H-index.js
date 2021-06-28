function getH(ary){
    for(let i=ary[ary.length-1]; i>=0; i--){
        let count = 0;
        for(let j =0; j<ary.length; j++){
            if(ary[j]>=i) count++;
            if(count>=i) return i;
        }
    }    
}
function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b)=>{return a-b});
    
    answer = getH(citations);
    
    return answer;
}




function solution(citations) {

    citations.sort((a, b) => a - b);
    let cnt = 0;
    for(let i = citations[citations.length - 1]; i >= 0; i--){
      cnt = 0;
      for(let j = citations.length; j >= 0; j--){
        if (citations[j] >= i) cnt++;
        if (cnt >= i) {
          console.log(cnt);
          return i;
        }
      }
    }
   
     return 0;
   } // 2021-06-24
   
   
   // https://programmers.co.kr/learn/courses/30/lessons/42747
   
   
   console.log("after  : ", solution([3, 0, 6, 1, 5]));
   console.log("answer : ", 3);
   console.log("\n");
   
   console.log("after  : ", solution([1, 2, 3, 4, 5, 6, 7]));
   console.log("answer : ", 4);
   console.log("\n");
   
   console.log("after  : ", solution([7,6,5,4,3,2,1]));
   console.log("answer : ", 4);
   console.log("\n");
   
   console.log("after  : ", solution([100 ,3 , 100, 3, 100, 3]));
   console.log("answer : ", 3);
   console.log("\n");
   
   console.log("after  : ", solution([5, 4, 4]));
   console.log("answer : ", 3);
   console.log("\n");
   
   console.log("after  : ", solution([350, 452, 877]));
   console.log("answer : ", 3);
   console.log("\n");
   
   console.log("after  : ", solution([8, 7, 7, 6, 5, 5, 3, 0, 0, 0]));
   console.log("answer : ", 5);
   console.log("\n");
   
   console.log("after  : ", solution([1, 1, 0, 0, 0]));
   console.log("answer : ", 1);
   console.log("\n")
   
   console.log("after  : ", solution([0, 0, 0, 0, 0]));
   console.log("answer : ", 0);
   console.log("\n")