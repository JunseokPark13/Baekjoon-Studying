function solution(progresses, speeds) {
    var answer = [];
    var left = [];
    
    for(let i=0; i<progresses.length; i++){
        left.push(Math.ceil((100-progresses[i])/speeds[i]))
    }

    while(left.length!==0){
        var count = 0;
        var check = true;
        for(let j=0; j<left.length; j++){
            if(left[0]>=left[j] && check) count++;
            else check=false;
        }
        left.splice(0,count);
        answer.push(count);
    }
    
    return answer;
}

function solution(progresses, speeds) {
    let answer = [];
  
    let i = 0;
    let lastest = 0
    let sum = 0;
  
    while (sum < progresses.length){
      let cnt = 0;
      for(let i = 0; i < progresses.length; i++){
        if (progresses[i] > 0) progresses[i] += speeds[i]
      }
      for(let i = lastest; i < progresses.length; i++){
        if (!cnt && progresses[lastest] >= 100){
          progresses[i] = 0;
          lastest++
          cnt++;
        } else if (cnt != 0){
          if (progresses[i] >= 100){
            progresses[i] = 0;
            lastest++
            cnt++;
          } else break
        }
      }
      if (cnt){
        answer.push(cnt)
        sum += cnt
      }
    }
  
    return answer
  } // 2021-07-01
  
  // https://programmers.co.kr/learn/courses/30/lessons/42586
  
  
  console.log("after  : ", solution([93, 30, 55], [1, 30, 5]));
  console.log("answer : ", [2, 1]);
  console.log("\n");
  
  console.log("after  : ", solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
  console.log("answer : ", [1, 3, 2]);
  console.log("\n");