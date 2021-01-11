function solution(answers) {
    var answer = [];
    var h1 = [1,2,3,4,5];
    var h2 = [2,1,2,3,2,4,2,5];
    var h3 = [3,3,1,1,2,2,4,4,5,5];
    
    var n1=0, n2=0, n3=0;
    var c1=0, c2=0, c3=0;
    
    for(var i = 0; i<answers.length; i++){
        if(answers[i] == h1[n1]) {
            console.log(answers[i], h1[n1]);
            c1++;
        }
        if(answers[i] == h2[n2]) {
            console.log(answers[i], h2[n2]);
            c2++;
        }
        if(answers[i] == h3[n3]) {
            console.log(answers[i], h3[n3]);
            c3++;
        }
        n1++; n2++; n3++;
        if(n1==5) n1=0;
        if(n2==8) n2=0;
        if(n3==10) n3=0;
    }
    
    var max = c1 > c2 ? (c1 > c3 ? c1 : c3) : (c2 > c3 ? c2 : c3);
   
    if(max == c1) answer.push(1);
    if(max == c2) answer.push(2);
    if(max == c3) answer.push(3);

    console.log(c1, c2, c3);

    return answer;
}


//var t1 = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];