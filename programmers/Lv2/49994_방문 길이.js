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

function solution(dirs) {
  var answer = 0;

  let pos = [0, 0];
  let road = [];

  const move = (dir, pos, road) => {
    let before = pos.join("");
    if (dir === "U" && pos[1] !== 5) {
      pos[1]++;
    } else if (dir === "D" && pos[1] !== -5) {
      pos[1]--;
    } else if (dir === "R" && pos[0] !== 5) {
      pos[0]++;
    } else if (dir === "L" && pos[0] !== -5) {
      pos[0]--;
    }
    let after = pos.join("");
    if (before == after) return "";
    if (
      road.includes(before + "." + after) ||
      road.includes(after + "." + bef + ore)
    )
      return "";
    return before + "." + after;
  };

  for (let dir of dirs) {
    let moves = move(dir, pos, road);
    if (moves !== "") road.push(moves);
  }

  return road.length;
} // 2021-06-21


console.log("solution : ", solution("ULURRDLLU"));
console.log("answer   : ", 7);
console.log("\n");

console.log("solution : ", solution("LULLLLLLU"));
console.log("answer   : ", 7);
console.log("\n");