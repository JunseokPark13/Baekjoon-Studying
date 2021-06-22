function solution(s) {
    var answer = [0, 0];
  
    let str = s;
  
    while (str != "1"){
      let len = str.match(/[1]/g).length;
      answer[0]++;
      answer[1] += str.length - len;
      str = len.toString(2);
    }
  
    return answer;
}

function solution(s) {
  let answer = [0, 0];

  while (s != '1'){
    let len = s.length;
    s = s.replace(/[0]/g, '');
    len -= s.length;
    s = s.length.toString(2);

    answer[1] += len;
    answer[0]++;
  }

  return answer;
} // 2021-06-22

// https://programmers.co.kr/learn/courses/30/lessons/70129

console.log("solution : ", solution("110010101001"));
console.log("answer   : ", [3,8]);
console.log("\n");

console.log("solution : ", solution("01110"));
console.log("answer   : ", [3,3]);
console.log("\n");

console.log("solution : ", solution("1111111"));
console.log("answer   : ", [4,1]);
console.log("\n");
  