function solution(expression) {
  var answer = [];

  let op = new Set();
  expression.match(/[+\-*/]/g).forEach((x) => { op.add(x); });
  op = [...op];

  const getComb = (arr, len) =>{
    let res = [];
    if (len === 1) return arr.map((v) => [v]);

    arr.forEach((x, i, ary) => {
      let first = x;
      let rest = ary.filter((k, index) => index !== i);
      let combarr = getComb(rest, len - 1);
      let comb = combarr.map((x) => [first, ...x]);
      res.push(...comb);
    })
    return res;
  }

  const change_cal = (op, left, right) => {
    if (op == "+")
      return parseInt(left) + parseInt(right);
    else  if (op == "-")
      return parseInt(left) - parseInt(right);
    else  if (op == "*")
      return parseInt(left) * parseInt(right);
  }

  let comb = getComb(op, op.length);

  let numbers = expression.split(/[+*\-]/)
  let operators = expression.match(/[+*\-]/g);

  for(let i = 0; i < comb.length; i++){
    let cp_nums = numbers.slice();
    let cp_ops = operators.slice();
    for(let j = 0; j < comb[i].length; j++){
      for(let k = 0; k < cp_ops.length; k++){
        if (cp_ops[k] == comb[i][j]){
          cp_nums[k] = change_cal(cp_ops[k], cp_nums[k], cp_nums[k+1]);
          cp_nums.splice(k+1,1);
          cp_ops.splice(k,1);
          k--;
        }
      }
    }
   answer.push(Math.abs(cp_nums[0]));
  }

  answer = Math.max.apply(null, answer);
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/67257

console.log("after  : ", solution("100-200*300-500+20"));
console.log("answer : ", 60420);
console.log("\n");

console.log("after  : ", solution("50*6-3*2"));
console.log("answer : ", 300);
console.log("\n");



