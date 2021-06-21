function solution(skill, skill_trees) {
  skill_trees = skill_trees.filter((order) => {
    let ary = order.split("");
    ary = ary.filter((val) => skill.includes(val));

    for(let i = 0; i < ary.length; i++){
      if (ary[i] != skill[i]) return 0;
    }
    return 1;
  })
  return skill_trees.length;
} // 2021-06-21

// https://programmers.co.kr/learn/courses/30/lessons/68936

console.log("solution : ", solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log("answer   : ", 2);
console.log("\n");


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
