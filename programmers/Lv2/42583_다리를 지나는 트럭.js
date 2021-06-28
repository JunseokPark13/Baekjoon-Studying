function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var trucks = truck_weights.map(x=>{
        return {w:x, left:bridge_length}
    })
    
    var count=0;
    while(trucks.length!==0){
        
        var cango = true;
        var cur_w = 0;
        
        for(let i =0; i<trucks.length;i++){
            if(trucks[0].left<=0) trucks.shift();
        }       
        for(let i=0; i<trucks.length; i++){
            if(cur_w+trucks[i].w<=weight && cango){
                if(trucks[i].left===bridge_length) cango=false;
                trucks[i].left-=1;
                cur_w+=trucks[i].w;
                
            }
            else{
                cango=false;
            } 
        }
        count++;
    }
    
    answer = count;
    
    return answer;
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
  
    let cross = {};
    let cur_weight = 0;
    let cur_car = 0;
    let left = 0;
  
    while (left < truck_weights.length) {
      for (let i in cross) {
        cross[i]--;
        if (cross[i] == 0) {
          cur_weight -= truck_weights[i];
          cur_car--;
          delete cross[i];
        }
      }
      if (
        cur_weight + truck_weights[left] <= weight &&
        cur_car + 1 <= bridge_length
      ) {
        cross[left] = bridge_length;
        cur_weight += truck_weights[left++];
        cur_car++;
      }
      answer++;
    }
  
    let max = 0;
    for (let i in cross) {
      if (cross[i] > max) max = cross[i]
    }
  
    answer += max;
  
    return answer;
  } // 2021-06-25
  
  // https://programmers.co.kr/learn/courses/30/lessons/42583
  
  console.log("after  : ", solution(2, 10, [7, 4, 5, 6]));
  console.log("answer : ", 8);
  console.log("\n");
  
  console.log("after  : ", solution(100, 100, [10]));
  console.log("answer : ", 101);
  console.log("\n");
  
  console.log(
    "after  : ",
    solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
  );
  console.log("answer : ", 110);
  console.log("\n");