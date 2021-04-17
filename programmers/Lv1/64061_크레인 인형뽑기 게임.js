function printlog(ary, leng){
    console.log('start');
    for(var i = 0; i<leng; i++){
        
        console.log(i,"=",ary[i]);
    }
    console.log('end');
}


function solution(board, moves) {
    var answer = 0;
    var bucket = [];
    var stack =0;
       
    for(var i = 0; i<moves.length; i++){
        var k = moves[i]-1;
        var pick = false;
        for(var j=0; j<board[k].length; j++){
            if(board[j][k]!=0 && !pick){
                bucket[stack++] = board[j][k];
                board[j][k]=0;
                pick=true;
            }
        }
    }
    
    var length = bucket.length
    //printlog(bucket, length);
    for(var i = 1; i<=length; i++){
        if(length==2) console.log(i, bucket[i-1],bucket[i])
           if(bucket[i-1]==bucket[i]){
               
               //console.log(i, 'check');
               answer+=2;
               for(var j = i+1; j<length; j++){
                   bucket[j-2] = bucket[j];
               }               
               i=0;
               length-=2;
               //printlog(bucket, length);
               //console.log("length = ", length);
           }
    }
    
    return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/64061