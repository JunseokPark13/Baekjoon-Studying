function solution(str1, str2) {
  var answer = 0;
  var comb1 = [];
  var comb2 = [];

  var intersection = [];

  const makeComb = (str, comb) => {
    let reg = /[a-zA-Z]/;
    for(let i = 0; i < str.length - 1; i++)
      if(str[i].match(reg) && str[i + 1].match(reg))
        comb.push((str[i] + str[i + 1]).toUpperCase());
    comb.sort();
  }

  makeComb(str1, comb1);
  makeComb(str2, comb2);

  var min, max;

  if (comb1.length < comb2.length)
  {
    min = comb1;
    max = comb2;
  }
  else
  {
    min = comb2;
    max = comb1;
  }

  for(let i = 0; i < min.length; i++)
  {
    if (max.indexOf(min[i]) >= 0)
      intersection.push(min[i]);
  }

 // console.log(intersection);

  let union_len = comb1.length + comb2.length - intersection.length;

  if (!intersection.length && !union_len)
    answer = 65536;
  else if (!intersection.length || !union_len)
    answer = 0;
  else 
    answer = Math.floor(intersection.length / union_len * 65536);

  return answer;
}



console.log("after  : ", solution("FRANCE", "french"));
console.log("answer : ", 16384);
console.log("\n");

console.log("after  : ", solution("handshake", "shake hands"));
console.log("answer : ", 65536);
console.log("\n");

console.log("after  : ", solution("aa1+aa2", "AAAA12"));
console.log("answer : ", 43690);
console.log("\n");

console.log("after  : ", solution("E=M*C^2", "e=m*c^2"));
console.log("answer : ", 65536);
console.log("\n");

