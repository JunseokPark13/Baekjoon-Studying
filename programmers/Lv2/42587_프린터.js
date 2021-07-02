function srt_prior(a,b){
    return a.pr - b.pr;
}

function getMax(ary){
    var k = ary.slice();
    return (k.sort(srt_prior))[k.length-1].pr;
}

function solution(priorities, location) {
    var answer = 0;
    var index = 1;
    
    var printstack = priorities.map((x,i)=>{
        return {file:i, pr:x};
    });
       
    var max = getMax(printstack);
  
    while(printstack.length!==0){
        if(printstack[0].pr<max){
            printstack.push(printstack.shift());
        }
        else{
            if(printstack[0].file==location){
                answer = index;
                break;
            }
            else{
                printstack.shift();
                max = getMax(printstack);
                index++;
            }   
        }
    }
    return answer;
}

function solution(priorities, location) {
    let prior = priorities.slice().sort((a, b) => b - a);
    let cnt = 0;
    
    while (prior.length){
      if (priorities[0] == prior[0]){
        cnt++;
        if (location == 0) return cnt
        else location--;
        priorities.shift();
        prior.shift();
      } else {
        priorities.push(priorities.shift())
        if (location == 0) location = priorities.length - 1
        else location--
      }
    }
    return cnt
  } // 2021-07-01
  
  // https://programmers.co.kr/learn/courses/30/lessons/42839
  
  
  console.log("after  : ", solution([2, 1, 3, 2], 2));
  console.log("answer : ", 1);
  console.log("\n");
  
  console.log("after  : ", solution([1, 1, 9, 1, 1, 1], 0));
  console.log("answer : ", 5);
  console.log("\n");