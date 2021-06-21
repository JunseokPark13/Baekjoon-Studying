function solution(arr) {
  var answer = arr[0];
  if (arr.length == 1) return answer;

  const gcd = (a, b) => {
    while (b != 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };

  for (let j = 1; j < arr.length; j++)
    answer = (answer * arr[j]) / gcd(answer, arr[j]);

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {    //2021-06-16
  let num = arr[0];

  arr.sort((a, b) => {
    return a - b;
  });

  const gcd = (a, b) => {
    while (b != 0) {
      let k = a % b;
      a = b;
      b = k;
    }
    return a;
  };

  for (let i = 1; i < arr.length; i++) {
    num = (num / gcd(num, arr[i])) * arr[i];
  }

  return num;
}
