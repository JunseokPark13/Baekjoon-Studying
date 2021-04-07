function solution(msg) {
    var answer = [];
    var dict = new Array(26);
  
    for(let i = 0; i < 26; i++)
      dict[i] = String.fromCharCode(i + 65);
  
    while(msg.length)
    {
      for(let j = dict.length - 1; j >= 0; j--)
      {
        if (msg.indexOf(dict[j]) == 0)
        {
          answer.push(j + 1);
          dict.push(msg.substr(0, dict[j].length + 1));
          if (dict[j].length == 1)
            msg = msg.substring(1);
          else
            msg = msg.substring(dict[j].length);
          break;
        }
      }
    }
    return answer;
  }

// https://programmers.co.kr/learn/courses/30/lessons/17684
  
solution("KAKAO")
console.log("answer : ", [11, 1, 27, 15])
console.log("\n");

solution("TOBEORNOTTOBEORTOBEORNOT")
console.log("answer : ", [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34])
console.log("\n");

solution("ABABABABABABABAB")
console.log("answer : ", [1, 2, 27, 29, 28, 31, 30])
console.log("\n");