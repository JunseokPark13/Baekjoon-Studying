function solution(w, h) {
    var answer = 1;
    var gcd = 0;
    
    if(w<h) [w,h] = [h,w];
    for(let i = 1; i<=h; i++){
        if(w%i===0 && h%i===0) gcd = i;
    }
    console.log(gcd);
    
    answer = w*h - (w + h - gcd);
    
    if(w===1 || h ===1) answer = 0;

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/62048#