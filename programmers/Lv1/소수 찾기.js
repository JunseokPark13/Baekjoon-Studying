function solution(n) {
    var answer = 0;
    var nums = [];
    
    for(var i = 0; i<=n; i++){
        nums[i]=0;
    }
    
    for(var i=2; i*i<=n; i++){
        for(var j= i*i; j<=n; j+=i){
            nums[j]=1;
        }
    }
    for(var i=0; i<=n;i++){
        if(i==1 || i==0) continue;
        if(nums[i]!=1) {
            answer++;
        }
            
    }
    
    console.log(answer);
    
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12921