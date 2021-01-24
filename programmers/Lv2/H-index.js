function getH(ary){
    for(let i=ary[ary.length-1]; i>=0; i--){
        let count = 0;
        for(let j =0; j<ary.length; j++){
            if(ary[j]>=i) count++;
            if(count>=i) return i;
        }
    }    
}


function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b)=>{return a-b});
    
    answer = getH(citations);
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42747#