function solution(n) {
    var answer = 0;
    var sum = 0;
    
    for(let i = 1; i <= n; i++)
    {
        let j = i;
        sum = 0;
        while (sum <= n)
        {
            sum += j++;
            if (sum == n)
                answer++;
        }
    }
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12924