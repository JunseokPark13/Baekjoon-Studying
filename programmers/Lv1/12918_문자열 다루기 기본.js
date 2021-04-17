function solution(s) {
    var answer = false;
    
    if(s.length==4 || s.length==6){
        for(var i in s){
        if(parseInt(s[i])>=0 && parseInt(s[i])<=9) continue;
        else {
            return false;
        }
    }
    }
    else{
        return false;
    }

    
    return true;
}

// https://programmers.co.kr/learn/courses/30/lessons/12918