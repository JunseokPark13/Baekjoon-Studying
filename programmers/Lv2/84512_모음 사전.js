function solution(word) {
    const dictionary = {
        'A' : 0,
        'E' : 1,
        'I' : 2,
        'O' : 3,
        'U' : 4
    }
    const len = [781, 156, 31, 6, 1]
    return word.split('').reduce((acc, val, idx) => acc + dictionary[val] * len[idx] + 1, 0)
}

// https://programmers.co.kr/learn/courses/30/lessons/84512