function solution(s) {
    var answer = '';

    var words = s.split(" ");  
    for(let i in words)
    {
        let first = words[i].substr(0, 1).toUpperCase();
        let remain = words[i].substr(1).toLowerCase();
        words[i] = first + remain;
    }
    answer = words.join(" ");
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12951