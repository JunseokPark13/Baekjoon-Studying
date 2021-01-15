function solution(s) {
    var answer = '';
    var ary = s.split(' ');
    
    for(var i=0; i<ary.length; i++){
        for(var j=0; j<ary[i].length; j++){
            if(j%2!=0) answer+=ary[i][j].toLowerCase();
            else {
                answer+=ary[i][j].toUpperCase();
            }
        }
        if(i<ary.length-1) answer+=" ";
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12930