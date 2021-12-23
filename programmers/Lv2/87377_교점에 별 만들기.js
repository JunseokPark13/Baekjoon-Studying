const getX = (a, b, div) => (a[1] * b[2] - a[2] * b[1]) / div
const getY = (a, b, div) => (a[2] * b[0] - a[0] * b[2]) / div
const getMin = (x, y, minMax) => {
    const { xMin, xMax, yMin, yMax } = minMax
    return {
        xMin : Math.min(xMin, x),
        xMax : Math.max(xMax, x),
        yMin : Math.min(yMin, y),
        yMax : Math.max(yMax, y),
    }
}

const getPoints = (line) => {
    let minMax = {xMin: Infinity, xMax: -Infinity, yMin: Infinity, yMax: -Infinity}
    let points = []
    for(let i = 0; i < line.length; i++) {
        for(let j = i + 1; j < line.length; j++) {
            const a = line[i]
            const b = line[j]
            const div = a[0] * b[1] - a[1] * b[0]
            if (div === 0) continue
            let x = getX(a, b, div)
            let y = getY(a, b, div)
            if (x !== Math.floor(x) || y !== Math.floor(y)) continue
            minMax = getMin(x, y, minMax)
            points.push([y, x])
        }
    }
    
    return { points, minMax }
}


function solution(line) {
    const { points, minMax } = getPoints(line)
    const {xMin, xMax, yMin, yMax} = minMax
    const xLen = xMax - xMin + 1
    const yLen = yMax - yMin + 1

    let board = new Array(yLen).fill(0)
    board = board.map(val => new Array(xLen).fill('.'))

    for(let point of points) {
        board[yMax - point[0]][point[1] - xMin] = '*'
    }
    return board.map(val => val.join(''));
}

const inputOutput = [
    {
        input: [[[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]],
        output: ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"]
    }, 
    {
        input: [[[0, 1, -1], [1, 0, -1], [1, 0, 1]]],
        output: ["*.*"]
    }, 
    {
        input: [[[1, -1, 0], [2, -1, 0]]],
        output: ["*"]
    }, 
    {
        input: [[[1, -1, 0], [2, -1, 0], [4, -1, 0]]],
        output: ["*"]
    }
]

document.querySelector('#console').innerHTML = inputOutput.map((val, idx) => {
    const str = `===== case ${idx} ===== 
result : ${solution(...val.input)}
answer : ${val.output}
==================
`
    console.log(str)
    return str
}).join('\n')