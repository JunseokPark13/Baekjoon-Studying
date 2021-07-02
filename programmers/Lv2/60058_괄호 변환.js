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



function solution(p) {
    let answer = [];
  
    const splitBracket = (str) => {
      let left = 0
      for(let i = 0; i < str.length; i++){
        if (str[i] == '(') left++;
        else left--
        if (i != 0 && left == 0) {
          return [str.substring(0, i + 1), str.substring(i + 1, str.length)]
        }
      }
      return [str, '']
    }
  
    const checkCorrect = (str) => {
      let stack = [str[0]];
      if (str[0] == ')') return false
      for(let i = 1; i < str.length; i++){
        if (str[i] == '(') stack.push(str[i])
        else stack.pop()
      }
      if (stack.length == 0) return true
      else return false
    }
  
    const reverseBracket = (str) => {
      let res = ''
      for(let i = 0; i < str.length; i++){
        if (str[i] == '(') res += ')'
        else res += '('
      }
      return res
    }
  
    if (checkCorrect(p)) return p
  
    const getV = (str) => {
      if (str.length == 0) return ''
      let splited = splitBracket(str);
      let u = splited[0]
      let v = splited[1]
      if (checkCorrect(u)){
        return u + getV(v);
      } else {
        let res = '(' + getV(v) +')' + reverseBracket(u.substring(1, u.length - 1))
        return res
      }
    }
  
    answer = getV(p)
  
    return answer
  } // 2021-07-01
  
  // https://programmers.co.kr/learn/courses/30/lessons/60058
  
  
  console.log("after  : ", solution("(()())()"));
  console.log("answer : ", "(()())()");
  console.log("\n");
  
  console.log("after  : ", solution(")("));
  console.log("answer : ", "()");
  console.log("\n");
  
  
  console.log("after  : ", solution("()))((()"));
  console.log("answer : ", "()(())()");
  console.log("\n");