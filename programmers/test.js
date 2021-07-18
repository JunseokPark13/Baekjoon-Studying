function solution(board) {
  let end = [board.length, board.length].join("");

  const visit = new Set(["1112"]);

  let route = [[[1, 1], [1, 2], 0]];

  const N = board.length;
  const new_board = new Array(N + 2)
    .fill()
    .map((_) => new Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  const findRoute = (left, right, new_route, board) => {
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let dir of dirs) {
      let next_left = [left[0] + dir[0], left[1] + dir[1]];
      let next_right = [right[0] + dir[0], right[1] + dir[1]];
      if (
        board[next_left[0]][next_left[1]] === 0 &&
        board[next_right[0]][next_right[1]] === 0
      )
        new_route.push([next_left, next_right]);
    }

    const dirs2 = [-1, 1];

    if (left[0] === right[0]) {
      for (let y of dirs2) {
        if (
          board[left[0] + y][left[1]] === 0 &&
          board[right[0] + y][right[1]] === 0
        ) {
          new_route.push([left, [left[0] + y, left[1]]]);
          new_route.push([[right[0] + y, right[1]], right]);
        }
      }
    } else {
      for (let x of dirs2) {
        if (
          board[left[0]][left[1] + x] === 0 &&
          board[right[0]][right[1] + x] === 0
        ) {
          new_route.push([[left[0], left[1] + x], left]);
          new_route.push([right, [right[0], right[1] + x]]);
        }
      }
    }
  };

  while (route.length) {
    const next = route.shift()
    if (next[0].join("") === end || next[1].join("") === end) return next[2];
    let new_route = [];
    findRoute(next[0], next[1], new_route, new_board);
    for (let pos of new_route) {
      const position = pos[0].join("") + pos[1].join("");
      if (!visit.has(position)) {
        route.push([pos[0], pos[1], next[2] + 1]);
        visit.add(position);
      }
    }
  }
} //2021-07-16

// https://programmers.co.kr/learn/courses/30/lessons/60063

let board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

console.log("after  : ", solution(board));
console.log("answer : ", 7);
console.log("\n");

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
