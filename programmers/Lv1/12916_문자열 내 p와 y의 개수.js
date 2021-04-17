function solution(s){
    var answer = true;
    var pc = 0;
    var yc = 0;

     for(var i in s){
         if(s[i]==='P'||s[i]==='p') pc++;
         else if(s[i]==='Y'||s[i]==='y') yc++;
     }
           
    if(pc!==yc) answer=false;

    return answer;
}

// return s.match(/p/ig).length == s.match(/y/ig).length;

// https://programmers.co.kr/learn/courses/30/lessons/12916