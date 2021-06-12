function solution(lottos, win_nums) {
  var answer = [];
  let prize = [6, 6, 5, 4, 3, 2, 1];
  let m_cnt = 0;
  let z_cnt = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) m_cnt++;
    if (!lottos[i]) z_cnt++;
  }

  answer[1] = prize[m_cnt];
  answer[0] = prize[m_cnt + z_cnt];

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/77484

console.log(
  "after  : ",
  solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
);
console.log("answer : ", [3, 5]);
console.log("\n");

console.log(
  "after  : ",
  solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
);
console.log("answer : ", [1, 6]);
console.log("\n");

console.log(
  "after  : ",
  solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
);
console.log("answer : ", [1, 1]);
console.log("\n");
