function solution(n, lost, reserve) {
    var answer = n-lost.length;
    var check = [];
    
    for(var i =0; i<reserve.length; i++){
        check[reserve[i]]=true;
    }
    
    //console.log('answer start = ', answer);
    for(var i=0; i<lost.length; i++){
        for(var j=0; j<reserve.length; j++){
            if(lost[i] == reserve[j]){
                answer++;
                check[reserve[j]]=false;
                lost[i] = 0;
            }  
        }
    }
    
    //console.log('answer check = ', answer);
    
    for(var i = 0; i<lost.length; i++){
        for(var j=0; j<reserve.length; j++){
            if(lost[i]!=0){
                if((lost[i]-1 == reserve[j] 
                || lost[i]+1 == reserve[j]) && check[reserve[j]]){
                //console.log(lost[i], reserve[j]);
                answer++;
                check[reserve[j]]=false;
                lost[i]=0;
                }
            }
            
        }
    }
    return answer;
}