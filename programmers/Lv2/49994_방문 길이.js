function solution(dirs) {
  var answer = 0;
  let position = [0, 0];
  let road = new Set();

  const move = (e, pos) => {
    if (e == "U" && pos[0] != 5) {
      pos[0]++;
    } else if (e == "D" && pos[0] != -5) {
      pos[0]--;
    } else if (e == "R" && pos[1] != 5) {
      pos[1]++;
    } else if (e == "L" && pos[1] != -5) {
      pos[1]--;
    }
  };

  for (const e of dirs) {
    let start = [...position];
    let end;
    move(e, position);
    end = [...position];

    let str = start + " to " + end;
    let str2 = end + " to " + start;
    if (!road.has(str) && !road.has(str2)) {
      if (str != str2) {
        road.add(str);
        road.add(str2);
      }
    }
  }

  answer = road.size / 2;
  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/49994

console.log("after  : ", solution("ULURRDLLU"));
console.log("answer : ", 7);
console.log("\n");

console.log("after  : ", solution("LULLLLLLU"));
console.log("answer : ", 7);
console.log("\n");
