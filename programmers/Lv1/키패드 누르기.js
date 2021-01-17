function dis(a, b){
    return Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);
}

function solution(numbers, hand) {
    var answer = '';
    var numpad={
        1:[1,1], 2:[1,2], 3:[1,3],
        4:[2,1], 5:[2,2], 6:[2,3],
        7:[3,1], 8:[3,2], 9:[3,3],
        "*":[4,1], 0:[4,2], "#":[4,3]
    }
    var current_L = [4,1];
    var current_R = [4,3];
    
    numbers.forEach(i =>{
        let num = numpad[i];
        if(num[1] === 1){
            answer+="L";
            current_L = num;
        }
        else if(num[1] === 3){
            answer+="R";
            current_R = num;
        }
        else{
            let distance_L = dis(num, current_L);
            let distance_R = dis(num, current_R);
            if(distance_L<distance_R){
                answer+="L";
                current_L = num;
            }else if(distance_L>distance_R){
                answer+="R";
                current_R = num;
            }else{
                if(hand==="left"){
                    answer+="L";
                    current_L = num;
                }
                else{
                    answer+="R";
                    current_R = num;
                }
            }
        }
    })
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/67256