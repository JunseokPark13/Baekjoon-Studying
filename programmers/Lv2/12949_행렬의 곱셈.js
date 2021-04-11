function solution(arr1, arr2) {
    var arr1_w = arr1[0].length;
    var arr1_h = arr1.length;
    var arr2_w = arr2[0].length;
    
    var answer = new Array(arr1_h);
    for(let i = 0; i < arr1_h; i++)
        answer[i] = new Array(arr2_w);

    for(let i = 0; i < arr1_h; i++)
        for(let j = 0; j < arr2_w; j++)
        {
            let sum = 0;
            for(let k = 0; k < arr1_w; k++)
                sum += arr1[i][k] * arr2[k][j];
            answer[i][j] = sum;
        }

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12949