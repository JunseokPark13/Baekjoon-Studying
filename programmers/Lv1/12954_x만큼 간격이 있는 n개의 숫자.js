function solution(x, n) {
    var answer = new Array(n);
    for(let i =0; i<n; i++){
        answer[i]=0;
    }
    answer = answer.map((k,i)=>{
        return (i+1)*x;
        
    })
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12954