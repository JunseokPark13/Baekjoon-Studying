function solution(n, m) {
    var answer = [];
    
    if(n>m) [n,m] = [m,n];
    
    for(let i =1; i<=n; i++){
        if(n%i==0 && m%i==0) answer[0]=i;
    }
    for(let i =n; i>=1; i--){
        if((i*m)%n==0) answer[1]=i*m;
    }
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/12940