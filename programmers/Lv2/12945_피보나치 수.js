// function solution(n) {
//     var answer = 0;
//     var mem = new Array(1234567);
    
//     for(let i  = 0; i < 1234567; i++)
//         mem[i] = -1;
    
//     const fibo = (n) =>{
//         if (n == 0)
//             return (0);
//         if (n == 1)
//             return (1);
//         if (mem[n] == -1)
//             mem[n] = (fibo(n - 1) % 1234567) + (fibo(n - 2) % 1234567);
//         return mem[n] % 1234567;
//     }
//     answer = fibo(n);
//     return answer;
// }

function solution(n) {
    var answer = 0;
    var a, b, c;
    
    a = 0;
    b = 1;
    const fibo = (n) =>{
        for(let i = 1; i < n; i++)
        {
            c = (a+b) % 1234567;
            a = b % 1234567 ;
            b = c % 1234567 ;
        }
        return c;
    }
    answer = fibo(n);
    return answer;gggg
}

// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
    var answer = 0;
    let mod = 1234567;
    if (n == 1 || n == 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    let sum = 0;

    for (let i = 2; i < n; i++) {
        sum = ((a % mod) + (b % mod)) % mod;
        a = b % mod;
        b = sum % mod;
    }

    answer = sum;
    return answer;
}   // 2021-06-17

console.log("solution : ", solution(3));
console.log("anaswer  : ", 2)
console.log("\n");

console.log("solution : ", solution(5));
console.log("anaswer  : ", 5)
console.log("\n");

console.log("solution : ", solution(10));
console.log("anaswer  : ", 55)
console.log("\n");