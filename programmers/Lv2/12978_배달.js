function solution(N, road, K) {
    var answer = 0;
    let map;
  
    const sortByDistance = (a, b) => {
      return b[1] - a[1];
    };
  
    const compareAndChange = (pos, i, distance, stack, map) => {
      if (map[pos] > map[i] + distance) {
        map[pos] = map[i] + distance;
        stack.push([pos, map[i] + distance]);
      }
    }
  
    const getAnswer = (map) => {
      map.forEach((x) => {
        if (x <= K) {
          answer++;
        }
      });
    }
  
    const getFirstMap = (map, stack) => {
      for (let i = 0; i < road.length; i++) {
        if (road[i][0] == 1) {
          map[road[i][1] - 1] = road[i][2];
          stack.push([road[i][1] - 1, road[i][2]]);
        } else if (road[i][1] == 1) {
          map[road[i][0] - 1] = road[i][2];
          stack.push([road[i][0] - 1, road[i][2]]);
        }
      }
      stack.push([0, 0]);
    }
  
    const readRoad = (N, road) => {
      let stack = [];
  
      map = new Array(N);
      map.fill(Infinity);
      map[0] = 0;
  
      getFirstMap(map, stack);
  
      stack.sort(sortByDistance);
  
      while (stack.length != 0) {
        let i = stack.pop()[0];
        for(let j = 0; j < road.length; j++){
          let start = road[j][0] - 1
          let end = road[j][1] - 1;
          let distance = road[j][2];
  
          if (start == i) {
            compareAndChange(end, i, distance, stack, map)
          } else if (end == i) {
            compareAndChange(start, i, distance, stack, map)
          }
        }
        stack.sort(sortByDistance);
      }
    };
  
    readRoad(N, road);
    getAnswer(map);
    
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12978
  
  console.log(
    "after  : ",
    solution(
      5,
      [
        [1, 2, 1],
        [2, 3, 3],
        [5, 2, 2],
        [1, 4, 2],
        [5, 3, 1],
        [5, 4, 2],
      ],
      3
    )
  );
  console.log("answer : ", 4);
  console.log("\n");
  
  console.log(
    "after  : ",
    solution(
      6,
      [
        [1, 2, 1],
        [1, 3, 2],
        [2, 3, 2],
        [3, 4, 3],
        [3, 5, 2],
        [3, 5, 3],
        [5, 6, 1],
      ],
      4
    )
  );
  console.log("answer : ", 4);
  console.log("\n");
  