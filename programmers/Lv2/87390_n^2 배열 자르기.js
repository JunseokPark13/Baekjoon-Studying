function solution(n, left, right) {
    let l_pos = [Math.floor(left / n), left % n]
    let r_pos = [Math.floor(right / n), right % n]
    
    let ary = []
    let pos = l_pos[0] === r_pos[0] ? right - left + l_pos[1] + 1 : n;

    for(let j = l_pos[1]; j < pos; j++) {
        ary.push(Math.max(l_pos[0], j) + 1)
    }
    if (l_pos[0] === r_pos[0]) return ary

    for(let i = l_pos[0] + 1; i < r_pos[0]; i++) {
        for(let j = 0; j < n; j++) {
            ary.push(Math.max(i, j) + 1)
        }
    }

    for(let j = 0; j < r_pos[1] + 1; j++) {
        ary.push(Math.max(r_pos[0], j) + 1)
    }

    return ary
}