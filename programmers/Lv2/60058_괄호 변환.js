function stringSplit(s){
    let flength = s.length;
    let str = [];
    let u = [];
    
    if(s.length>2){
        let left = 0, right = 0;
        for(let i = 0; i<s.length; i++){
            if(s[i]==='(') left++;
            else if(s[i]===')') right++;   
            if(left===right){
                u = s.splice(0,i+1);
                if(flength !== u.length) str = stringSplit(s);
                break;
            }
        }
    }
    else u = s;
       
    if(stringCheck(u)) return u.concat(str);
    else return fixString(u,str);  
}

function fixString(u, v){
    let stack = [];
    let newS = [];
    stack.push('(');
    stack = stack.concat(v);
    stack.push(')');
    
    u.pop(); u.shift();
    for(let i in u){
        if(u[i]==='(') newS.push(')');
        else if(u[i]===')') newS.push('(');
    }
    
    return stack.concat(newS);
}

function stringCheck(s){
    let left=0, right=0;
    for(let i in s){
        if(s[i]==='(') left++;
        else if(s[i]===')') right++;
        if(right>left) return false;
    }
    return true;
}

function solution(p) {
    var answer = '';
    var str = p.split('');

    var s = stringSplit(str);   
    answer = s.join('');

    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/60058