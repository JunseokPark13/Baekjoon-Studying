function solution(info, query) {
    var answer = [];
  
    let infos = {};
  
    const getComb = (ary , score, s) => {
      const key = ary.join("");
      const value = infos[key]
      
      if (value){
        infos[key].push(score);
      } else{
        infos[key] = [score];
      }
  
      for (let i = s; i < ary.length; i++) {
        const temp = ary.slice();
        temp[i] = "-";
        getComb(temp, score, i + 1);
      }
    }
    
    for(let i = 0; i < info.length; i++){
      let ary = info[i].split(" ");
      let score = parseInt(ary.pop());
      getComb(ary, score, 0)
    }
  
    for(let i in infos){
      infos[i] = infos[i].sort((a, b) => a - b);
    }

    for(let i = 0; i < query.length; i++){
      let cnd = query[i].replace(/ and /g, " ").split(" ");
      let score = parseInt(cnd.pop());
      cnd = cnd.join("");
      let nums = infos[cnd];
      if (nums){
        let s = 0;
        let e = nums.length;
        while (s < e){
          let mid = Math.floor((s + e) / 2);
  
          if (nums[mid] >= score){
            e = mid;
          } else if (nums[mid] < score){
            s = mid + 1;
          }
        }
        answer.push(nums.length - s);
      } else{
        answer.push(0);
      }
    }
  
    return answer;
  }



// function solution(info, query) {
//     var answer = [];
  
//     let infos = [];
//     let queries = [];
  
//     info.forEach((data) => {
//       let ary = data.split(" ");
//       ary[4] = parseInt(ary[4]);
//       infos.push(ary);
//     })
  
//     query.forEach((data) => {
//       let pos = data.match(/[1-9]*[0-9]/).index;
//       let rest;
//       let score;
//       score = parseInt(data.substring(pos));
//       rest = data.substring(0, pos).trim().split(" and ");
//       rest.push(score);
//       queries.push(rest);
//     })
  
//     queries.forEach((cnd) => {
//       let want = infos.slice();
//       cnd.forEach((val, i) => {
//         if (val != "-"){
//           for(let j = 0; j < want.length; j++){
//             if (i == 4 && want[j][i] < val){
//               want.splice(j, 1);
//               j--;
//             } else if (!Number.isInteger(want[j][i]) && want[j][i] != val){
//               want.splice(j, 1);
//               j--;
//             }
//           }
         
//         }
//       })
//       answer.push(want.length);
//     })
  
  
    
//     return answer;
//   }

// function solution(info, query) {
//     var answer = [];
  
//     let infos = [];
//     let queries = [];
  
//     const makeAry = (n) => {
//       let ary = []
//       for(let i = 0; i < n; i++){
//         ary.push(i)
//       }
//       return ary;
//     }
  
//     for(let i = 0; i < info.length; i++){
//       let ary = info[i].split(" ");
//       ary[4] = parseInt(ary[4]);
//       infos.push(ary);
//     }
  
//     for(let i = 0; i < query.length; i++){
//       let rest = query[i].replace(/ and /g, " ").split(" ")
//       queries.push(rest);
//     }
  
//     let ary = makeAry(infos.length);
  
//     for(let k = 0; k < queries.length; k++){
//       let cnd = queries[k];
//       let want = ary;
//       for(let i = cnd.length - 1 ; i >= 0; i--){
//         let tmp = [];
//         let val = cnd[i];
//         if (val != "-"){
//           for(let j = 0; j < want.length; j++){
//               if (i == 4 && infos[want[j]][i] >= val){
//                 tmp.push(want[j]);
//               } else if (!Number.isInteger(infos[want[j]][i]) && infos[want[j]][i] == val){
//                 tmp.push(want[j]);
//               }
//           }
//           want = tmp.slice();
//           if (tmp.length == 0){
//             break;
//           } 
//         }
//       }
  
//       answer.push(want.length);
//     }
  
//     return answer;
//   }

// function solution(info, query) {
//   let answer = [];

//   let allComb = {}

//   const getComb = (comb, n) => {
//     if (n == 4){
//       let score = comb.pop();
//       let prop = comb.join('.')
//       if (allComb[prop] == undefined) allComb[prop] = [score];
//       else allComb[prop].push(score);
//       return ;
//     } else{
//     let tmp = comb.slice();
//     let tmp2 = comb.slice();
//     tmp[n] = '-' 
//     getComb(tmp, n + 1);
//     getComb(tmp2, n + 1);
//     }
//   }

//   for(let i of info){
//     let data = i.split(' ');
//     let score = parseInt(data.pop());
//     data.push(score);
//     getComb(data, 0);
//   }

//   //console.log(allComb);

//   for(let i of query){
//     let pos = i.match(/[0-9]/).index;
//     let score = parseInt(i.substring(pos));
//     let data = i.substring(0, pos - 1).replace(/ and /g, '.');
//     //console.log(data, score, allComb[data]);
//     let cnt = 0;
//     for(let j of allComb[data]){
//       if (j >= score) cnt++;
//     }
//     answer.push(cnt);
//   }

//   return answer;
// } // 2021-06-30

// // https://programmers.co.kr/learn/courses/30/lessons/72412

// const info = [
//   "java backend junior pizza 150",
//   "python frontend senior chicken 210",
//   "python frontend senior chicken 150",
//   "cpp backend senior pizza 260",
//   "java backend junior chicken 80",
//   "python backend senior chicken 50",
// ];
// const query = [
//   "java and backend and junior and pizza 100",
//   "python and frontend and senior and chicken 200",
//   "cpp and - and senior and pizza 250",
//   "- and backend and senior and - 150",
//   "- and - and - and chicken 100",
//   "- and - and - and - 150",
// ];

// console.log("after  : ", solution(info, query));
// console.log("answer : ", [1, 1, 1, 1, 2, 4]);
// console.log("\n");