function fill(width, s){
    return s.length >= width ? s:new Array(width-s.length+1).join('0')+s;
}

function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<arr1.length; i++){
        arr1[i] = arr1[i].toString(2);
        arr1[i] = fill(arr1.length, arr1[i]);
        arr2[i] = arr2[i].toString(2);
        arr2[i] = fill(arr1.length, arr2[i]);
    }
    
    for(let i=0; i<arr1.length; i++){
        answer[i]='';
        for(let j=0; j<arr1[i].length; j++){
            if(arr1[i][j]==='1' || arr2[i][j]==='1'){
                answer[i]+='#';
            }
            else{
                answer[i]+=' ';
            }
        }
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/17681