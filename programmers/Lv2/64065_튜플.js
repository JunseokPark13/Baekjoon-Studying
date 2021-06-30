function solution(s) {
    var answer = [];
    var str = '';
    var ary = [];
    var nAry = {};
    
    for(let i in s){
        if(s[i]!=='{' && s[i]!=='}')
            str +=s[i];
    }
    
    ary = str.split(',');
    
    for(let i in ary){
        if(nAry[ary[i]]==null) {
            answer.push(parseInt(ary[i]));
            nAry[ary[i]]=0;
        }
        nAry[ary[i]]++;
    }
    
    answer.sort((a,b)=>{
       return nAry[b]-nAry[a]; 
    });
    
    
    return answer;
}

function solution(s) {
    let answer = [];
  
    let tuples = [];
    const parseTuple = (s) => {
      let start = 1;
      for(let i = 1 ; i < s.length - 1; i++){
        if (s[i] == '}'){
          let str = s.substring(start + 1, i)
          start = i + 2
          tuples.push(str.split(','))
        }
      }
    }
    parseTuple(s);
    tuples.sort((a, b) => a.length - b.length)
  
    for(let i = 0; i < tuples.length; i++){
      for(let j = 0; j < tuples[i].length; j++){
        if (!answer.includes(tuples[i][j])) {
          answer.push(tuples[i][j])
          break;
        }
      }
    }
  
    answer = answer.map((val) => parseInt(val));
  
    return answer;
  } // 2021-06-30
  
  // https://programmers.co.kr/learn/courses/30/lessons/67257
  
  
  
  console.log("after  : ", solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
  console.log("answer : ", [2, 1, 3, 4]);
  console.log("\n");
  
  console.log("after  : ", solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
  console.log("answer : ", [2, 1, 3, 4]);
  console.log("\n");
  
  console.log("after  : ", solution("{{20,111},{111}}"));
  console.log("answer : ", [111, 20]);
  console.log("\n");
  
  console.log("after  : ", solution("{{123}}"));
  console.log("answer : ", [123]);
  console.log("\n");
  
  console.log("after  : ", solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
  console.log("answer : ", [3, 2, 4, 1]);
  console.log("\n");
  