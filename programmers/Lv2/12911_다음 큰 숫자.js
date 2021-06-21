function solution(n) {
    var answer = 0;
    
    var nstr = n.toString(2);
    var oneCount = 0;
    for(let i = 0; i<nstr.length; i++){
        if(nstr[i]==='1') oneCount++;
    }
       
    var str = '';
    while(1){
        n++;
        str = n.toString(2);
        let count = 0;
        for(let i = 0; i<str.length; i++){
            if(str[i]==='1') count++;
        }
        if(oneCount===count) break;
    }
    
    answer = parseInt(str,2);
         
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
    const getCountofOne = (str) => {
        return str.toString(2).length - (str.toString(2)).replace(/1/g, "").length
    }

    let countofOne = getCountofOne(n);

    while (1){
        if(countofOne == getCountofOne(++n))
            break;
    }

    return n;
}   // 2021-06-17


console.log("solution : ", solution(78));
console.log("answer  : ", 83)
console.log("\n");

console.log("solution : ", solution(15));
console.log("answer  : ", 23)
console.log("\n");