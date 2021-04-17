function solution(dartResult) {
    var answer = 0;
    var sum = 0;
    var units = [];
    var res = [];
    var opt = [];
    
    var unit = /\d?\d[SDT][\*\#]?/g
    var k;
    
    while((k = unit.exec(dartResult)) !== null){
        units.push(k[0]);
    }
    
    
    for(let i in units){
        let num = parseInt(((/\d?\d/).exec(units[i]))[0]);
        let val = 1;
        let bonus = ((/[SDT]/).exec(units[i]))[0];
        let optcheck = (/[\*\#]/).exec(units[i]); 
        opt.push(optcheck ? (optcheck=='*' ? 2 : -1): 1);
        if(bonus==='D') val = 2;
        else if(bonus==='T') val =3;
        res[i] = Math.pow(num,val);
    }
     
    for(let i = 2; i>=0; i--){
        if(opt[i]===2){
            for(let j = i; j>=i-1; j--)
                res[j]*=2;
        } 
        else if(opt[i]===-1){
            res[i]*=-1;
        }
    }
    
    answer = res.reduce((acc, val)=>{
        return acc+val;
    })
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/17682