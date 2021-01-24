function solution(s) {
    var answer = [];
    var str = '';
    var ary = [];
    var nAry = {};
    
    for(let i in s){
        if(s[i]!=='{' && s[i]!=='}')
            str +=s[i];
    }
    
    ary = str.split(',');
    
    for(let i in ary){
        if(nAry[ary[i]]==null) {
            answer.push(parseInt(ary[i]));
            nAry[ary[i]]=0;
        }
        nAry[ary[i]]++;
    }
    
    answer.sort((a,b)=>{
       return nAry[b]-nAry[a]; 
    });
    
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/64065