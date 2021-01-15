function solution(numbers) {
    var answer = [];
    
    for(var i =0; i<numbers.length; i++){
        for(var j=i+1; j<numbers.length; j++){
            if(!answer.includes(numbers[i]+numbers[j])){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    console.log(answer);
    
    answer.sort(function(a,b){
        return a-b;
    })
    
    
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/68644