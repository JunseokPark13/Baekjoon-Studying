function solution(nums) {
    var answer = 0;
    var len = nums.length;
    var isprime = new Array();
    
    const sum_numbers = (a, sum, count) =>{
        sum += nums[a];
        if(++count > 2)
        {
            if(sum % 2 != 0)
                isprime.push(sum);
        }
        else
            for(let i = a + 1; i < len; i++)
                sum_numbers(i, sum, count);
    }
    
    const find_prime = () => {
        isprime.forEach((val, key, ary)=>{
            let check = 0;
                for(let i = 3; i * i <= val; i+=2)
                    if (val % i == 0)
                    {
                        check = 1;
                        break;
                    }
                if (!check)
                    answer++;
        })
    }
    
    for(let i = 0; i < len - 2; i++)
        sum_numbers(i, 0, 0);
    find_prime();

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript