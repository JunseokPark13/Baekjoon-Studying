function solution(sticker) {
  let len = sticker.length;

  if (len <= 3){
    return Math.max(...sticker);
  }

  let get_f = [];
  let get_s = [];

  get_f[0] = get_f[1] = sticker[0];
  get_s[0] = 0;
  get_s[1] = sticker[1];

  for(let i = 2; i < len - 1; i++){
    get_f[i] = Math.max(get_f[i - 2] + sticker[i], get_f[i - 1]);
    get_s[i] = Math.max(get_s[i - 2] + sticker[i], get_s[i - 1]);
  }

  let i = len - 1;
  get_f[i] = Math.max(get_f[i - 1], get_f[i - 2]);
  get_s[i] = Math.max(get_s[i - 2] + sticker[i], get_s[i - 1]);

  return (Math.max(get_f[i], get_s[i]));
}
// 1 3 5 7
// 2 2 6 8

// https://programmers.co.kr/learn/courses/30/lessons/12987

console.log("after  : ", solution([14, 6, 5, 11, 3, 9, 2, 10]	));
console.log("answer : ", 36);
console.log("\n");

console.log("after  : ", solution([1, 3, 2, 5, 4]));
console.log("answer : ", 8);
console.log("\n");


