function solution(arr) {
    var answer = [];
    
    var min = 0;
    for(let i in arr){
        if(arr[i]<arr[min]) min = i; 
    }
    arr.splice(min,1);
    
    if(arr.length===0) arr.push(-1);
    
    return arr;
}

// https://programmers.co.kr/learn/courses/30/lessons/12935