function solution(numbers) {
    var answer = [];
  
    for(let i of numbers){
      let nstr = [...i.toString(2)];
      let pos = nstr.lastIndexOf('0');
      if (pos >= 0){
        nstr[pos] = '1';
        if (pos + 1 != nstr.length)
          nstr[pos + 1] = '0';
      } else{
        nstr.unshift('1');
        nstr[1] = '0';
      }
      answer.push(parseInt(nstr.join(""), 2))
    }
    return answer;
  }
  
  function solution(n) {
    let answer = [];
   
    for(let i = 0; i < n.length; i++){
      let bits = n[i].toString(2);
      let ans = '';
      if (!bits.includes('0')){
        ans = '10' + bits.substr(0, bits.length - 1);
        ans = parseInt(ans, 2);
      } else if (bits[bits.length - 1] == '0'){
        ans = n[i] + 1
      } else{
        bits = bits.split('');
        let pos = bits.lastIndexOf('0');
        bits[pos] = '1';
        bits[pos + 1] = '0';
        ans = bits.join('');
        ans = parseInt(ans, 2);
       }
      answer.push(ans);
    }
   
     return answer;
   } // 2021-06-24
   
   // https://programmers.co.kr/learn/courses/30/lessons/77885
   
   
   console.log("after  : ", solution([2, 7, 47, 43, 147]));
   console.log("answer : ", [3, 11, 55, 45, 149]);
   console.log("\n");
  
  