// function solution(people, limit) {
//     var answer = 0;
    
//     people.sort((a,b) =>{return b-a;});
    
//     while(people.length!==0){
//         let max = 0;
//         if(people[0]+40<=limit){
//             for(let j=0; j<people.length; j++){
//                 if(j===0) continue;
//                 if(people[0]+people[j]<=limit) {
//                     if(j>max) max = j;
//                 }
//             }
//             if(max!==0) people.splice(max,1);
//         }       
//         people.shift();
//         answer++;
//     }
    
//     return answer;
// }


function solution(people, limit) {
    var answer = 0;
    
    people.sort((a,b) =>{return b-a;});
    
    let a=0, b = people.length-1;
    
    while(a<=b){
        if(people[a]+people[b] <=limit){
            a++; b--;
        }
        else a++;
        answer++;
    }  
    return answer;
}

function solution(people, limit) {
    let answer = 0;
  
    people.sort((a, b) => b - a);
  
    let left = 0;
    let right = people.length - 1;
    while (left <= right){
      if (people[left++] + people[right] <= limit){
        right--;
      } 
      answer++;
    }
    
    return answer;
  } // 2021-06-22
  
  // https://programmers.co.kr/learn/courses/30/lessons/42885
  
  
  console.log("after  : ", solution([70, 50, 80, 50], 100));
  console.log("answer : ", 3);
  console.log("\n");
  
  console.log("after  : ", solution([70, 80, 50], 100));
  console.log("answer : ", 3);
  console.log("\n");