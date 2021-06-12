function solution(numbers) {
    var answer = [];
  
    for(let i of numbers){
      let nstr = [...i.toString(2)];
      let pos = nstr.lastIndexOf('0');
      if (pos >= 0){
        nstr[pos] = '1';
        if (pos + 1 != nstr.length)
          nstr[pos + 1] = '0';
      } else{
        nstr.unshift('1');
        nstr[1] = '0';
      }
      answer.push(parseInt(nstr.join(""), 2))
    }
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/77885
  
  console.log("after  : ", solution([2, 7, 12]));
  console.log("answer : ", [3,11]);
  console.log("\n");
  
  