function solution(sizes) {
    let w = 0;
    let h = 0;
    
    for(let size of sizes) {
        size = size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]
        if (w < size[0]) w = size[0]
        if (h < size[1]) h = size[1]
    }
    return w * h;
}