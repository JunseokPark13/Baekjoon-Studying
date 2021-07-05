function solution(numbers, target) {
    var answer = 0;
    
    if(numbers.reduce((acc,val)=>{
        return acc+val;
    })===target) return 1;
    
    const dfs = (a, sum)=>{
        if(a<numbers.length){
            dfs(a+1,sum+numbers[a]);
            dfs(a+1,sum-numbers[a]);
        }
        else{
            if(sum===target) answer++;
        }
    };
    
    dfs(0,0);
    

    return answer;
}

function solution(numbers, target) {
    let answer = 0
  
    const makeComb = (numbers, sum, index) => {
      if (index == numbers.length){
        if (sum == target) answer++
        return
      }
      makeComb(numbers, sum + numbers[index], index + 1)
      makeComb(numbers, sum - numbers[index], index + 1)
    }
  
    makeComb(numbers, 0, 0)
  
   return answer
  } // 2021-07-02
  
  // https://programmers.co.kr/learn/courses/30/lessons/43165
  
  
  console.log("after  : ", solution([1, 1, 1, 1, 1], 3));
  console.log("answer : ", 5);
  console.log("\n");