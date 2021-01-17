function solution(phone_number) {
    var answer = '';
    var ary = [];
    for(let i in phone_number){
        ary.push(phone_number[i]);
    }
    for(let i=0; i<ary.length-4; i++){
        ary[i]="*";
    }
    answer = ary.join('');
    return answer;
}

// answer = "*".repeat(s.length - 4) + s.slice(-4);

// https://programmers.co.kr/learn/courses/30/lessons/12948