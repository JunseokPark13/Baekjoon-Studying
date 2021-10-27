function solution(price, money, count) {
    let res = price * (count * (count + 1)) / 2 - money
    return res < 0 ? 0 : res
}

// https://programmers.co.kr/learn/courses/30/lessons/82612