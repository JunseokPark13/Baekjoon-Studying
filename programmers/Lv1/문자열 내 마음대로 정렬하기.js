function solution(strings, n) {
    var answer = [];
    
    strings.sort(function(a,b){
        if(a[n] > b[n]) {
            return 1;
        }
        else if(a[n] < b[n]) {
            return -1;
        }
        else {
            if(a>b) return 1;
            if(a<b) return -1;
            if(a==b) return 0;
        }
    });    
    return strings;
}

//return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));

// https://programmers.co.kr/learn/courses/30/lessons/12915#