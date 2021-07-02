function solution(str1, str2) {
    var answer = 0;
    var comb1 = [];
    var comb2 = [];
  
    var intersection = [];
  
    const makeComb = (str, comb) => {
      let reg = /[a-zA-Z]/;
      for(let i = 0; i < str.length - 1; i++)
        if(str[i].match(reg) && str[i + 1].match(reg))
          comb.push((str[i] + str[i + 1]).toUpperCase());
      comb.sort();
    }
  
    makeComb(str1, comb1);
    makeComb(str2, comb2);
  
    var min, max;
  
    if (comb1.length < comb2.length)
    {
      min = comb1;
      max = comb2;
    }
    else
    {
      min = comb2;
      max = comb1;
    }
  
    let union_len = comb1.length + comb2.length
  
    for(let i = 0; i < min.length; i++)
    {
      let tmp = max.indexOf(min[i]);
      if (tmp >= 0)
      {
        intersection.push(min[i]);
        max.splice(tmp, 1);
      }
    }
  
    union_len -= intersection.length;
  
    if (!intersection.length && !union_len)
      answer = 65536;
    else if (!intersection.length || !union_len)
      answer = 0;
    else 
      answer = Math.floor(intersection.length / union_len * 65536);
  
    return answer;
  }
  

  
  function solution(str1, str2) {
    let answer = 0
    let inter = []
    let union = []
  
    const makeSet = (str) => {
      let set = [];
      for(let i = 0; i < str.length - 1; i++){
        let ele = (str[i] + str[i + 1]).toUpperCase()
        if (!ele.match(/[^A-Z]/)) set.push(ele);
      }
      return set;
    }
  
    const getInterection = (set1, set2) => {
      let tmp = set2.slice()
      for(let i = 0; i < set1.length; i++){
        if (tmp.includes(set1[i])){
          let pos = tmp.indexOf(set1[i])
          inter.push(...tmp.splice(pos, 1));
        } else{
          union.push(set1[i])
        }
      }
    }
  
    const getUnion = (inter, set1, set2) => {
      union = [...set1, ...set2]
      for(let i = 0; i < inter.length; i++){
        let pos = union.indexOf(inter[i])
        union.splice(pos, 1);
      }
    }
  
    let s1_set = makeSet(str1)
    let s2_set = makeSet(str2)
  
    if (s1_set.length > s2_set.length) getInterection(s1_set, s2_set)
    else getInterection(s2_set, s1_set)
    getUnion(inter, s1_set, s2_set)
  
    if (!inter.length && !union.length) answer = 65536
    else answer = Math.floor(inter.length / union.length * 65536)
  
    return answer
  } // 2021-06-31
  
  // https://programmers.co.kr/learn/courses/30/lessons/17677
  
  
  
  console.log("after  : ", solution('FRANCE', 'french'));
  console.log("answer : ", 16384);
  console.log("\n");
  
  console.log("after  : ", solution('handshake', 'shake hands'));
  console.log("answer : ", 65536);
  console.log("\n");
  
  console.log("after  : ", solution('aa1+aa2', 'AAAA12'));
  console.log("answer : ", 43690);
  console.log("\n");
  
  console.log("after  : ", solution('E=M*C^2', 'e=m*c^2'));
  console.log("answer : ", 65536);
  console.log("\n");
  