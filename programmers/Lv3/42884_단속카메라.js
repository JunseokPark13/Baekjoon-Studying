function solution(routes) {
    let answer = 0;
  
    routes.sort((a, b) => {
      return a[1] - b[1]
    })
  
    let camera = -40000;
    
    for(let i = 0; i < routes.length; i++){
      if (camera < routes[i][0]){
        camera = routes[i][1]
        console.log("new camera : ", camera)
        answer++;
      }
    }
  
    return answer;
  } // 2021-07-15
  
  // https://programmers.co.kr/learn/courses/30/lessons/42884
  
  console.log("after  : ", solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]));
  console.log("answer : ", 2);
  console.log("\n");