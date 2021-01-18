function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var trucks = truck_weights.map(x=>{
        return {w:x, left:bridge_length}
    })
    
    var count=0;
    while(trucks.length!==0){
        
        var cango = true;
        var cur_w = 0;
        
        for(let i =0; i<trucks.length;i++){
            if(trucks[0].left<=0) trucks.shift();
        }       
        for(let i=0; i<trucks.length; i++){
            if(cur_w+trucks[i].w<=weight && cango){
                if(trucks[i].left===bridge_length) cango=false;
                trucks[i].left-=1;
                cur_w+=trucks[i].w;
                
            }
            else{
                cango=false;
            } 
        }
        count++;
    }
    
    answer = count;
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42583