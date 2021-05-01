// function solution(maps) {
//   let allRoutes = [];
//   let goal = [maps.length - 1, maps[0].length - 1];
//   let current = [0, 0];

//   const findRoute = (pos, cur_map) => {
//     let x = pos[0];
//     let y = pos[1];
//     let route = [];

//     if (x != 0 && cur_map[x - 1][y]) {
//       route.push([x - 1, y]);
//     }
//     if (x != cur_map.length - 1 && cur_map[x + 1][y]) {
//       route.push([x + 1, y]);
//     }
//     if (y != 0 && cur_map[x][y - 1]) {
//       route.push([x, y - 1]);
//     }
//     if (y != cur_map[0].length - 1 && cur_map[x][y + 1]) {
//       route.push([x, y + 1]);
//     }
//     return route;
//   };

//   const moveProcess = (current, cur_map, cnt) => {
//     if (current[0] == goal[0] && current[1] == goal[1]) {
//       allRoutes.push(cnt);
//     } else {
//       let route = findRoute(current, cur_map);
//       cur_map[current[0]][current[1]] = 0;
//       if (route.length == 0) {
//         allRoutes.push(-1);
//       } else {
//         for (let i = 0; i < route.length; i++) {
//           let tmp = cur_map.map(v => v.slice());
//           moveProcess(route[i], tmp, cnt + 1);
//         }
//       }
//     }
//   };


//   moveProcess(current, maps.map(v => v.slice()), 1);

//   if (Math.max(...allRoutes) == -1) {
//     return -1;
//   }

//   let min = Infinity;
//   for (let i = 0; i < allRoutes.length; i++) {
//     if (allRoutes[i] != -1 && min > allRoutes[i]) {
//       min = allRoutes[i];
//     }
//   }

//   return min;
// }

function solution(maps) {
  let min = 1;
  let goal = [maps.length - 1, maps[0].length - 1];

  const findRoute = (pos, route) => {
    let x = pos[1];
    let y = pos[0];

    if (x != 0 && maps[y][x - 1]) {
      route.push([y, x - 1]);
      maps[y][x - 1] = 0;
    }
    if (x != maps[0].length - 1 && maps[y][x + 1]) {
      route.push([y, x + 1]);
      maps[y][x + 1] = 0;
    }
    if (y != 0 && maps[y - 1][x]) {
      route.push([y - 1, x]);
      maps[y - 1][x] = 0;
    }
    if (y != maps.length - 1 && maps[y + 1][x]) {
      route.push([y + 1, x]);
      maps[y + 1][x] = 0;
    }
  };

  let road = [[0,0]];

  while (1){
    let new_route = [];
    while (road.length) {
      let next = road.shift();
      if (next[0] == goal[0] && next[1] == goal[1]){
        return (min);
      }
      findRoute(next, new_route);
    }
    min++;
    if (new_route.length == 0){
      return (-1);
    }
    road = new_route;
  }
}

// https://programmers.co.kr/learn/courses/30/lessons/1844

console.log(
  "after  : ",
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log("answer : ", 11);
console.log("\n");

console.log(
  "after  : ",
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
console.log("answer : ", -1);
console.log("\n");

// console.log("after  : ", solution([[1, 1, 1, 1, 1]]));
// console.log("answer : ", 5);
// console.log("\n");

// console.log("after  : ", solution([[1], [1], [1], [1], [1]]));
// console.log("answer : ", 5);
// console.log("\n");
