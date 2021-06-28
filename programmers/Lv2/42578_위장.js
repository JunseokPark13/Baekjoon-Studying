function solution(clothes) {
    var answer = 1;
       
    clothes.sort((a,b)=>{
        if(a[1]>b[1]) return 1;
        else if(a[1]<b[1]) return -1;
        else 0;
    });
    
    let kind = clothes[0][1];
    let count = 1;
    
    for(let i = 1; i<clothes.length; i++){
        if(kind===clothes[i][1]) count++;
        else{
            kind = clothes[i][1];
            answer*=count+1;
            count=1;
        }
    }
    answer = answer*(count+1)-1;
    return answer;
}


function solution(clothes) {
    var answer = 1;
    var obj = {};
       
    for(let i = 0; i<clothes.length; i++){
        if(obj[clothes[i][1]]==null) obj[clothes[i][1]]=0;
        obj[clothes[i][1]]++;
    }
   
    for(let i in obj){
        answer*=obj[i]+1
    }
    
    return answer-1;
}

function solution(clothes) {
    let answer = 1;
    let closet = {}
  
    for(let i of clothes){
      if (closet[i[1]] == undefined){
        closet[i[1]] = 1
      } else{
        closet[i[1]]++;
      }
    }
  
    for(let i in closet){
      answer *= (closet[i] + 1)
    }
  
    return (answer - 1);
  } // 2021-06-27
  
  // https://programmers.co.kr/learn/courses/30/lessons/42578
  
  console.log("after  : ", solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
  console.log("answer : ", 5);
  console.log("\n");
  
  console.log("after  : ", solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]));
  console.log("answer : ", 3);
  console.log("\n");