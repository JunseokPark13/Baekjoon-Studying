function solution(numbers, target) {
    var answer = 0;
    
    if(numbers.reduce((acc,val)=>{
        return acc+val;
    })===target) return 1;
    
    const dfs = (a, sum)=>{
        if(a<numbers.length){
            dfs(a+1,sum+numbers[a]);
            dfs(a+1,sum-numbers[a]);
        }
        else{
            if(sum===target) answer++;
        }
    };
    
    dfs(0,0);
    

    return answer;
}