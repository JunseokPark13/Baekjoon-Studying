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

function solution(str) {    // 2021-06-17
    var answer = '';
    
    let ary = str.split(" ");
    ary = ary.map((val) => {
        let first = val.substr(0, 1);
        let left = val.substr(1);
        return (first.toUpperCase() + left.toLowerCase());
    })
    answer = ary.join(" ");
    return answer;
}