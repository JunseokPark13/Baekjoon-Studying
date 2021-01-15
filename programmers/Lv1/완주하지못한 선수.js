function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    console.log(participant);
    console.log(completion);
       
    for(var i = 0; i<participant.length; i++){
        if(participant[i]!=completion[i]){
            answer = participant[i];
            break;
        }
    }
    
    
    
    return answer;
}


// function solution(participant, completion) {
//     var answer = '';
    
//     for(var i=0; i<completion.length; i++){
//         participant.splice(participant.indexOf(completion[i]),1);
//         }
//     answer = participant[0];
    
    
//     return answer;
// }

//https://programmers.co.kr/learn/courses/30/lessons/42576