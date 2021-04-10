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

// https://programmers.co.kr/learn/courses/30/lessons/42890#

var ary = [["100","ryan","music","2"],
["200","apeach","math","2"],
["300","tube","computer","3"],
["400","con","computer","4"],
["500","muzi","music","3"],
["600","apeach","music","2"]];

solution(ary)
console.log("answer : ", 2)
console.log("\n");

solution([["a", "aa"], ["aa", "a"], ["a", "a"]])
console.log("answer : ", 1)
console.log("\n");

solution([["a", "b", "c"], ["1", "b", "c"], ["a", "b", "4"], ["a", "5", "c"]])
console.log("answer : ", 1)
console.log("\n");

solution([["a", "4", "1"], ["2", "5", "1"], ["a", "4", "2"]])
console.log("answer : ", 2)
console.log("\n");

