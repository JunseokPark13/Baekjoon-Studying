function solution(relation) {
    var answer = 0;
    var tuple_len = relation.length;
    var attr_len = relation[0].length;
    var ary = [];
  
    var k = new Array();
    for(let i = 0; i < attr_len; i++)
      k.push(i.toString());
  
    const match_attr = (arr, str) =>{
      str += arr[0];
      ary.push(str);
      if (arr.length == 1)
        return ;
      for(let i = 1; i < arr.length; i++)
        match_attr(arr.slice(i), str);
    }
  
    for(let i = 0; i < k.length; i++)
      match_attr(k.slice(i), "");
  
    ary.sort((a,b)=>{
      if (a.length < b.length)
        return -1;
      else if (a.length > b.length)
        return 1;
      else
        return 0;
    })
    
    for(let t= 0; t < ary.length; t++)
    {
      var infos = new Set();
      let comb = ary[t];
      for(let i = 0; i < tuple_len; i++)
      {
        let str = "";
        relation[i].forEach((x, j) => {
          if (comb.indexOf(j.toString()) >= 0)
            str += x + "."
        })
        infos.add(str);
      }
      if (infos.size == tuple_len)
      {
        answer++;
        ary = ary.filter((x) => {
          let cnt = 0;
          for(let n = 0; n < comb.length; n++)
            if(x.indexOf(comb[n]) >= 0)
              cnt++;
          if (cnt == comb.length)
            return false;
          else
            return true;
        })
        t = -1;
      }
    }
    return answer;
  }
  
  function solution(relation) {
    let answer = 0;
  
    let col = relation[0].length;
    let row = relation.length;
  
    const makeNewRel = () => {
      let newrel = new Array(col);
      for (let i = 0; i < col; i++) {
        newrel[i] = [];
        for (let j = 0; j < row; j++) {
          newrel[i].push(relation[j][i]);
        }
      }
      return (newrel);
    }
  
    const makeComb = (rel, ary) => {
      if (ary.length != 0) comb.push(ary);
      if (rel.length === 0) return;
      for (let i = 0; i < rel.length; i++) {
        let tmp = ary.slice();
        let tmp2 = rel.slice();
        tmp.push(tmp2[i]);
        tmp2.splice(0, i + 1);
        makeComb(tmp2, tmp);
      }
    };
  
    const checkComb = (candidate, comb) => {
      for (let i = 0; i < candidate.length; i++) {
        let cnt = 0;
        for (let j = 0; j < comb.length; j++) {
          if (candidate[i].includes(comb[j])) cnt++;
        }
        if (candidate[i].length == cnt) return false;
      }
      return true;
    };
  
    let newrel = makeNewRel()
    let comb = []
    let candidate = []
  
    let forcheck = Array.from({length : newrel.length}, (v, i) => i);
    makeComb(forcheck, []);
    
    comb.sort((a, b) => a.length - b.length)
  
    for (let i = 0; i < comb.length; i++) {
      if (!checkComb(candidate, comb[i])) continue;
      let set = new Set();
      for (let k = 0; k < newrel[0].length; k++) {
        let str = "";
        for (let j = 0; j < comb[i].length; j++) {
          str += newrel[comb[i][j]][k] + ".";
        }
        set.add(str);
      }
      if (set.size === row) {
        answer++;
        candidate.push(comb[i]);
      }
    }
  
    return answer;
  } // 2021-06-25
  
  // https://programmers.co.kr/learn/courses/30/lessons/42890
  
  let relation = [
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ];
  console.log("after  : ", solution(relation));
  console.log("answer : ", 2);
  console.log("\n");
  
  relation = [
    ["a", "1", "4"],
    ["2", "1", "5"],
    ["a", "2", "4"],
  ];
  console.log("after  : ", solution(relation));
  console.log("answer : ", 2);
  console.log("\n");
  
  relation = [
    ["a", "aa"],
    ["aa", "a"],
    ["a", "a"],
  ];
  console.log("after  : ", solution(relation));
  console.log("answer : ", 1);
  console.log("\n");
  
  relation = [['a',1,'aaa','c','ng'],['b',1,'bbb','c','g'],['c',1,'aaa','d','ng'],['d',2,'bbb','d','ng']]
  console.log("after  : ", solution(relation));
  console.log("answer : ", 3);
  console.log("\n");