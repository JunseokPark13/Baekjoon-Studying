function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    var count=0;
    d.sort((a,b)=>{
           return a-b;
           });
    
    console.log(d);
    
    if(d.reduce((acc,val)=>{
        return acc + val;
    })===budget) answer = d.length;
    else{
        for(let i = 0; i<d.length;i++){
            if(sum+d[i]<=budget){
                sum+=d[i];
                count++;
            }
            
        }
        console.log(sum, count);
        answer = count;
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12982