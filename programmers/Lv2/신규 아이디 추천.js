function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase()
            .replace(/[^a-z0-9_.-]/g, '')
            .replace(/\.+/g, '.')
            .replace(/^\./, '')
            .replace(/\.$/, '');
    if (!new_id.length)
        new_id = "a";
    else if (new_id.length >= 16)
    {
        new_id = new_id.substr(0, 15);
        new_id = new_id.replace(/\.$/, '');
    }
    while (new_id.length <= 2)
        new_id = new_id.concat(new_id[new_id.length - 1]);
    return new_id;
}

// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript