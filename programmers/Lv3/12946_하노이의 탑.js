function solution(n) {
    var answer = [];
  
    const move = (plate, start, to) =>{
      answer.push([start, to]);
    }
  
    const hanoi = (plate, start, to, via) =>{
      if (plate == 1)
        move(plate, start, to);
      else{
        hanoi(plate - 1, start, via, to);
        move(plate, start, to);
        hanoi(plate - 1, via, to, start);
      }
    }
  
    hanoi(n, 1, 3, 2);
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/12946
  
  console.log("after  : ", solution(2));
  console.log("answer : ", [ [1,2], [1,3], [2,3] ]);
  console.log("\n");