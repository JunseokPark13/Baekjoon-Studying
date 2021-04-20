function solution(s) {
    var answer = [0, 0];
  
    let str = s;
  
    while (str != "1"){
      let len = str.match(/[1]/g).length;
      answer[0]++;
      answer[1] += str.length - len;
      str = len.toString(2);
    }
  
    return answer;
}

// function solution(s) {
  
//     let str = s;
//     let cnt = 0;
//     let zerocnt = 0;
//     while (str != "1")
//     {
//       let nums = "";
//       let len = 0;
//       for(let i = 0; i <str.length; i++){
//         if (str[i] == "1"){
//           nums += "1";
//         } else{
//           zerocnt++;
//         }
//       }
//       len = nums.length;
//       str = len.toString(2);
//       cnt++;
//     }
  
//     return [cnt, zerocnt];
//   }

// https://programmers.co.kr/learn/courses/30/lessons/70129
  
  console.log("after  : ", solution("110010101001"));
  console.log("answer : ", [3,8]);
  console.log("\n"); 
  
  console.log("after  : ", solution("01110"));
  console.log("answer : ", [3,3]);
  console.log("\n"); 
  
  console.log("after  : ", solution("1111111"));
  console.log("answer : ", [4,1]);
  console.log("\n"); 
  