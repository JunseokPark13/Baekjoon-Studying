function solution(n, times) {
  var answer = 0;

  times = times.sort((a, b) => a - b);

  let max_t = times[times.length - 1] * n;
  let min_t = 0;
  let mid;
  let sum_work = 0;

  let cur_max = -1;

  while (min_t <= max_t) {
    mid = Math.floor((max_t + min_t) / 2);
    for (let i = 0; i < times.length; i++) {
      sum_work += Math.floor(mid / times[i]);
    }

    if (sum_work >= n) {
      if (cur_max == -1) {
        cur_max = sum_work;
        answer = mid;
      } else {
        answer = Math.min(answer, mid);
      }
      max_t = mid - 1;
    } else if (sum_work < n) {
      min_t = mid + 1;
    }
    sum_work = 0;
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/43238

console.log("after  : ", solution(6, [7, 10]));
console.log("answer : ", 28);
console.log("\n");
