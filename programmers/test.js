function solution(s) {
  var answer = 0;

  if (s.length == 1) {
    return 1;
  }
  if (s.length == 2 && s[0] == s[1]) {
    return 2;
  } else if (s.length == 2 && s[0] != s[1]) {
    return 1;
  }

  const checkside = (cs, i) => {
    let k = i;
    let flag = 1;
    let start = i - 1;

    let left = s.substring()
    
    if (flag) {
      if (cs) {
        answer = i * 2 - 1;
      } else {
        answer = i * 2;
      }
    }
  };

  for (let i = 2; i < s.length; i++) {
    if (s[i] == s[i - 2]) {
      checkside(1, i);
    }
    if (s[i] == s[i - 1]) {
      checkside(0, i);
    }
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/43238

// console.log("after  : ", solution("abcdcba"));
// console.log("answer : ", 7);
// console.log("\n");

// console.log("after  : ", solution("abacde"));
// console.log("answer : ", 3);
// console.log("\n");

console.log("after  : ", solution("cdeaba"));
console.log("answer : ", 6);
console.log("\n");

// let k = i;
//       let flag = 1;
//       for (let j = i - 1; j >= 0; j--) {
//         if (s[k++] != s[j]) {
//           answer = answer > k - j - 2 ? answer : k - j - 2;
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) {
//         answer = i * 2;
//       }
