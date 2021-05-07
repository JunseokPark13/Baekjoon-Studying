function solution(n, stations, w) {
  var answer = 0;

  let current_start = 0;
  let current_end = 0;
  let next_start = 0;

  for (let i = 0; i < stations.length; i++) {
    let sub;
    current_start = next_start;
    current_end = stations[i] - w >= 1 ? stations[i] - w : 1;
    next_start = stations[i] + w <= n ? stations[i] + w : n;
    sub = current_end - current_start - 1;
    answer += Math.ceil(sub / (2 * w + 1));
  }

  if (next_start != n) answer += Math.ceil((n - next_start) / (2 * w + 1));

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12979

console.log("after  : ", solution(11, [4, 11], 1));
console.log("answer : ", 3);
console.log("\n");

console.log("after  : ", solution(16, [9], 2));
console.log("answer : ", 3);
console.log("\n");

// function solution(n, stations, w) {
//     var answer = 0;
//     const ary = new Array(n + 1).fill(0);
//     ary[0] = -1;
//     const first_len = stations.length;

//     stations.forEach((val) =>{
//       let min = val - w >= 1 ? val - w : 1;
//       let max = val + w <= n ? val + w : n;
//       for(let i = min; i <= max; i++)
//         ary[i]++;
//     })

//     const checkRange = (pos) =>{
//       let min = pos - w >= 1 ? pos - w : 1;
//       if (ary[min] || ary[pos])
//         return (0);
//       else
//         return (1);
//     }

//     const setStation = (pos) =>{
//       stations.push(pos);
//       let min = pos - w >= 1 ? pos - w : 1;
//       let max = pos + w <= n ? pos + w : n;
//       for(let i = min; i <= max; i++)
//         ary[i]++;
//     }

//     for(let i = w + 1; i <= n; i++)
//       if (checkRange(i))
//         setStation(i);

//     for(let i = 1; i <= n; i++)
//       if (!ary[i])
//         setStation(i);


//     answer = stations.length - first_len;

//     return answer;
//   }
