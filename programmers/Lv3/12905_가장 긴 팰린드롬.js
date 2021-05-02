function solution(s) {
  var answer = 0;

  if (s.length == 1) {
    return 1;
  }
  if (s.length == 2) {
    if (s[0] == s[1]) {
      return 2;
    } else {
      return 1;
    }
  }

  const checkside = (start, i) => {
    let k = i;
    let flag = 1;

    for (let j = start; j >= 0; j--) {
      if (s[k++] != s[j]) {
        answer = answer > k - j - 2 ? answer : k - j - 2;
        flag = 0;
        break;
      }
    }
    if (flag) {
      answer = i * 2;
      if (start == i - 2) {
        answer = i * 2 - 1;
      }
    }
  };

  for (let i = 2; i < s.length; i++) {
    if (s[i] == s[i - 2]) {
      checkside(i - 2, i);
    }
    if (s[i] == s[i - 1]) {
      checkside(i - 1, i);
    }
  }

  return answer;
}
