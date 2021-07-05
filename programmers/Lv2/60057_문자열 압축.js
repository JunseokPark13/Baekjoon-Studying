function solution(s) {
  var answer = 0;
  var length = s.length;
  var ary = [];
  console.log("start length : ", length);

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = s.substr(0, i);
    let cnt = 1;

    for (let j = i; j <= s.length - i; j = j + i) {
      if (s.substr(j - i, i) === s.substr(j, i)) {
        cnt++;
        if (s.length - j - i < i) {
          str += cnt;
        }
      } else {
        if (cnt !== 1) {
          str += cnt;
          str += s.substr(j, i);
        } else {
          str += s.substr(j, i);
        }
        cnt = 1;
      }
    }
    str += s.substr(s.length - 1 - (s.length % i), s.length % i);
    ary.push(str);
  }

  let min = 100000;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].length < min) {
      min = ary[i].length;
    }
  }
  if (s.length === 1) min = 1;

  return min;
}

function solution(s) {
  let res = "";
  let answer = s.length;

  const cutString = (str, cs) => {
    let cnt = 0;
    let set = str.substring(0, cs);
    let answer = "";
    let pos = 0;

    while (1) {
      while (str.indexOf(set) == 0) {
        str = str.substring(cs, str.length);
        cnt++;
      }
      if (cnt <= 1) answer += set;
      else answer += cnt + set;

      if (str.length == 0) return answer;
      set = str.substring(0, cs);
      pos = str.indexOf(set);
      cnt = 0;
    }
  };

  for (let i = Math.floor(s.length / 2); i >= 1; i--) {
    res = cutString(s, i);
    if (res.length < answer) answer = res.length;
  }

  return answer;
} // 2021-07-02
