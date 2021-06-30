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


  

  function solution(expression) {
    let answer = 0;
    
    let order = []
    let op_set = new Set();
    let op = []
    let nums = expression.split(/[\+\-\*]/);
  
    const parseExpression = (expression) => {
      for(let i of expression){
        if (i == '-' || i == '+' || i == '*') {
          op.push(i);
          op_set.add(i);
        }
      }
      op_set = [...op_set]
    }
  
    const makeOpComb = (op, comb, n) => {
      if (n == op_set.length){
        order.push(comb);
        return ;
      }
      for(let i = 0; i < op.length; i++){
        let op_tmp = op.slice();
        let comb_tmp = comb.slice();
        comb_tmp.push(op[i]);
        op_tmp.splice(i, 1);
        makeOpComb(op_tmp, comb_tmp, n + 1)
      }
    }
  
    const calculateAllCase = (order, nums, op) => {
      for(let i = 0 ; i < order.length; i++){
        let check = 0;
        let cal = 0;
        let nums_tmp = nums.slice();
        let op_tmp = op.slice();
        while (check < 3){
          for(let j = 0; j < op_tmp.length; j++){
            if (op_tmp[j] == order[i][check]){
              cal = eval(nums_tmp[j] + op_tmp[j] + nums_tmp[j + 1])
              nums_tmp[j] = cal;
              nums_tmp.splice(j + 1, 1);
              op_tmp.splice(j, 1);
              j--;
            }
          }
          check++;
        }
        cal = cal > 0 ? cal : cal * (-1)
        if (cal > answer) answer = cal;
      }
    }
  
    parseExpression(expression);
    makeOpComb(op_set, [], 0)
    calculateAllCase(order, nums, op)
  
    return answer;
  } // 2021-06-30
  
  // https://programmers.co.kr/learn/courses/30/lessons/67257
  
  
  
  console.log("after  : ", solution("100-200*300-500+20"));
  console.log("answer : ", 60420);
  console.log("\n");
  
  console.log("after  : ", solution("50*6-3*2"));
  console.log("answer : ", 300);
  console.log("\n");