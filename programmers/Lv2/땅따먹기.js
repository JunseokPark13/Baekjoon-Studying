function solution(land) {
    var answer = 0;
    
    let max, mPos, s_max, s_mPos;
    
    for(let i = 0; i<land.length; i++){
        let ary = new Array(land[i][0], land[i][1],land[i][2],land[i][3])
        
        max = Math.max.apply(null, ary);
        
        mPos = ary.indexOf(max);
        ary.splice(mPos,1);
        
        s_max = Math.max.apply(null, ary);
        s_mPos =  ary.indexOf(s_max);
        
        if(i<land.length-1){
            for(let j = 0; j<4; j++){
                if(j===mPos) continue;
                land[i+1][j]+=max;
            }
            land[i+1][mPos]+=s_max;
        }
    }
    
    answer = Math.max.apply(null, land[land.length-1]);
    

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12913