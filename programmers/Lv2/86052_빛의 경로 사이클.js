const SRoute = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const LRoute = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const RRoute = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  const NodeDir = {
    S: SRoute,
    L: LRoute,
    R: RRoute,
  };

function solution(grid) {
  let answer = [];
  let width = grid[0].length;
  let height = grid.length;
  let gridAry = new Array(height).fill(0);
  gridAry = gridAry.map((val) => new Array(width).fill(0));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      gridAry[i][j] = [0, 0, 0, 0];
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let d = 0; d < 4; d++) {
        if (gridAry[y][x][d]) continue;
        let cnt = checkRoute(x, y, d);
        if (cnt) answer.push(cnt);
      }
    }
  }

  function checkRoute(x, y, curDir) {
    let cnt = 0;
    while (true) {
      if (gridAry[y][x][curDir]) break;
      let currentNode = grid[y][x];
      let currentNodeDir = NodeDir[currentNode][curDir];
      gridAry[y][x][curDir] = 1;
      cnt++;
      y += currentNodeDir[0];
      x += currentNodeDir[1];
      if (x < 0) x = width - 1;
      else if (x >= width) x = 0;
      if (y < 0) y = height - 1;
      else if (y >= height) y = 0;

      curDir = getNextDir(currentNode, curDir);
    }
    return cnt;
  }

  function getNextDir(node, dir) {
    if (node === "S") return dir;
    if (node === "L") return [3, 2, 0, 1][dir];
    if (node === "R") return [2, 3, 1, 0][dir];
  }
  return answer.sort((a, b) => a - b);
}




const inputOutput = [
    {
      input: [["SL", "LR"]],
      output: [16],
    },
    {
      input: [["S"]],
      output: [[1, 1, 1, 1]],
    },
    {
      input: [["R", "R"]],
      output: [[4, 4]],
    },
  ];
  
  document.querySelector("#console").innerHTML = inputOutput
    .map((val, idx) => {
      const str = `===== case ${idx} ===== 
  result : ${solution(...val.input)}
  answer : ${val.output}
  ==================
  `;
      console.log(str);
      return str;
    })
    .join("\n");