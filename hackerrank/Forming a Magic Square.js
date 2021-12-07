function formingMagicSquare(s) {
    const allCase = [
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
    ]
    let min = Infinity
    for(let c of allCase) {
        let diff = 0
        for(let i in s) {
            diff += s[i].reduce((acc, val, idx) => {
                acc += Math.abs(val - c[i][idx])
                return acc
            }, 0)
        }
        if (diff < min) min = diff 
    }
    return min
}