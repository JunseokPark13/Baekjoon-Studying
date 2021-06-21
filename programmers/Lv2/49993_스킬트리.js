function solution(skill, skill_trees) {
  var answer = 0;

  for (let i in skill_trees) {
    let check = true;
    let index_learn = [];
    for (let j = 0; j < skill.length; j++) {
      let istree = skill_trees[i].indexOf(skill[j]);
      if (istree === -1) index_learn.push(27);
      else index_learn.push(istree);
    }
    for (let j = 1; j < index_learn.length; j++) {
      if (index_learn[j] < index_learn[j - 1]) {
        check = false;
      }
    }
    if (check) answer++;
  }
  return answer;
}

function solution(skill, skill_trees) {
  skill_trees = skill_trees.filter((order) => {
    let ary = order.split("");
    ary = ary.filter((val) => skill.includes(val));

    for (let i = 0; i < ary.length; i++) {
      if (ary[i] != skill[i]) return 0;
    }
    return 1;
  });
  return skill_trees.length;
} // 2021-06-21

// https://programmers.co.kr/learn/courses/30/lessons/49993

console.log("solution : ", solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log("answer   : ", 2);
console.log("\n");
