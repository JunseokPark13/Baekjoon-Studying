function solution(n) {
    var answer = 0;
    
    var nstr = n.toString(2);
    var oneCount = 0;
    for(let i = 0; i<nstr.length; i++){
        if(nstr[i]==='1') oneCount++;
    }
       
    var str = '';
    while(1){
        n++;
        str = n.toString(2);
        let count = 0;
        for(let i = 0; i<str.length; i++){
            if(str[i]==='1') count++;
        }
        if(oneCount===count) break;
    }
    
    answer = parseInt(str,2);
         
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12911