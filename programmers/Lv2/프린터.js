function srt_prior(a,b){
    return a.pr - b.pr;
}

function getMax(ary){
    var k = ary.slice();
    return (k.sort(srt_prior))[k.length-1].pr;
}

function solution(priorities, location) {
    var answer = 0;
    var index = 1;
    
    var printstack = priorities.map((x,i)=>{
        return {file:i, pr:x};
    });
       
    var max = getMax(printstack);
  
    while(printstack.length!==0){
        if(printstack[0].pr<max){
            printstack.push(printstack.shift());
        }
        else{
            if(printstack[0].file==location){
                answer = index;
                break;
            }
            else{
                printstack.shift();
                max = getMax(printstack);
                index++;
            }   
        }
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42587