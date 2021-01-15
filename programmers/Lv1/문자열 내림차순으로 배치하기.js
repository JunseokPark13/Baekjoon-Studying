function solution(s) {
    var answer = '';
    var ary = [];
    for(var i in s){
        ary.push(s[i]);
    }
    ary.sort(function(a,b){
        if(a>b) return -1;
        if(a<b) return 1;
        if(a===b) return 0;
    });

    
    answer = ary.toString().split(',').join('');
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12917