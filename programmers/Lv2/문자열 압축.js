function solution(s) {
    var answer = 0;
    var length = s.length;
    var ary = [];
    console.log("start length : ", length);
    
    for(let i=1; i<= parseInt(s.length/2); i++){

        let str = s.substr(0,i);
        let cnt = 1;

        for (let j=i; j<= s.length-i; j=j+i){
            if (s.substr(j-i,i) === s.substr(j,i)){
                cnt++;
                if(s.length-j-i<i){
                    str+= cnt;
                }
            }else{
                if (cnt !== 1){
                    str+= cnt;
                    str+=s.substr(j,i);
                }else{
                    str+=s.substr(j,i);
                }
                cnt = 1;
            }
        }
        str+=s.substr(s.length-1-(s.length % i), (s.length % i));
        ary.push(str);
    }
    
    let min = 100000;
    for (let i=0; i< ary.length; i++){
        if (ary[i].length < min){
            min = ary[i].length;
        }
    }
    if (s.length === 1)
        min = 1;
    
    
    return min;
}

// https://programmers.co.kr/learn/courses/30/lessons/60057#