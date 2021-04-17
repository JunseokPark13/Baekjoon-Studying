function solution(n) {
    var answer = 0;
    var tscale = [];
    var num = 1;
    
    while(n>2){
        tscale.unshift(n%3);
        n= parseInt(n/3);
    }
    tscale.unshift(n);
    
    for(var i in tscale){
        answer += tscale[i]*num;
        num*=3;
    }
    
    
    return answer;
}

// function solution(n) {
//     n = n.toString(3).split('').reverse().join('')
//     return parseInt(n, 3)
// }

//https://programmers.co.kr/learn/courses/30/lessons/68935