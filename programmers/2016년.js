function solution(a, b) {
    var answer = '';
    
    var sum=b;
    for (var i=1; i<a; i++){
        if(i == 4 || i == 6 || i == 9 || i == 11) sum+=30;
        else if (i == 2) sum+=29;
        else sum+=31;
    }
    
    switch(sum%7){
        case 0 :
            answer='THU';
            break;
        case 1 : 
            answer='FRI';
            break;
        case 2 :
            answer='SAT';
            break;
        case 3 : 
            answer='SUN';
            break;
        case 4 :
            answer='MON';
            break;
        case 5 :
            answer='TUE';
            break;
        case 6 :
            answer='WED';
            break;
    }
    
    return answer;
}


// function solution(a, b) {
//     const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
//     const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

//     let days = b
//     for(let i=0 ; i<a-1 ; i++)
//         days += monthDay[i];

//     return weekDay[days%7];
// }