function solution(n) {
    var answer = 0;
    var ary = [];
    
    n = n.toString();
    for(var i in n){
        ary.unshift(n[i]);
    }
    ary.sort(function(a,b){
        return b-a;
    })
    
    for(var i in ary){
        answer+=ary[i];
    }

    return parseInt(answer);
}

// function solution(n) {
//   const newN = n + "";
//   const newArr = newN.split("").sort().reverse().join("");
//   return +newArr;
// }

// https://programmers.co.kr/learn/courses/30/lessons/12933