function solution(s, n) {
    var answer = '';
    var num = 0;
    
    for(var i = 0; i<s.length; i++){
        if(s[i] === ' ') {
            answer+= ' ';
            continue;
        };
        var k = s[i].charCodeAt(0);
        if(k>64 && k<91){
            if(k+n>90) num = k + n -26;
            else num = k + n;
        }
        else{
            if(k+n>122) num = k + n -26;
            else num = k + n;
        }
        answer+= String.fromCharCode(num);
    }
    
    
    return answer;
}

// A = 65  Z = 90
// a = 97  z = 122


// https://programmers.co.kr/learn/courses/30/lessons/12926