function solution(s) {
    const numberSet = {
      'zero' : '0',
      'one' : '1',
      'two' : '2',
      'three' : '3',
      'four' : '4',
      'five' : '5',
      'six' : '6',
      'seven' : '7',
      'eight' : '8',
      'nine' : '9'
    }
  
    for(let i in numberSet){
      const reg = new RegExp(i, "g")
      s = s.replace(reg, numberSet[i])
    }
  
    return parseInt(s);
  } // 2021-07-12
  
  // https://programmers.co.kr/learn/courses/30/lessons/81301
  
  console.log("after  : ", solution("one4seveneight"));
  console.log("answer : ", 1478);
  console.log("\n");
  
  console.log("after  : ", solution("23four5six7"));
  console.log("answer : ", 234567);
  console.log("\n");
  
  console.log("after  : ", solution("2three45sixseven"));
  console.log("answer : ", 234567);
  console.log("\n");
  
  console.log("after  : ", solution("123"));
  console.log("answer : ", 123);
  console.log("\n");