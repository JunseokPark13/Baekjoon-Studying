function solution(orders, course) {
    var answer = [];
    var list = new Object();
     
    for(let i in orders)
        orders[i] = orders[i].split('').sort().join('');
  
    const get_comb = (res, str, num, max) =>{
    if (num == max)
        {
            if (list.hasOwnProperty(res))
                list[res]++;
            else
                list[res] = 1;
            return ;
        }
      for(let i = 0; i < str.length; i++)
          get_comb(res + str[i], str.substr(i + 1), num + 1, max);
    }
  
    for(let k = 0; k < course.length; k++)
      for(let i = 0; i < orders.length; i++)
        for(let j = 0; j < orders[i].length - course[k] + 1; j++)
            get_comb(orders[i][j], orders[i].substr(j + 1), 1, course[k]);
  
    
  
    for(let k in course)
    {
      let curmax = 2;
      for(let i in list)
        if (i.length == course[k] &&list[i] >= curmax)
          curmax = list[i];
      for(let i in list)
        if (i.length == course[k] && list[i] == curmax)
          answer.push(i);
    }
  
    answer.sort();
  
    return answer;
  }
  
  // https://programmers.co.kr/learn/courses/30/lessons/72411
  
  // var t1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
  // var c1 = [2,3,4];
  
  // var t2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
  // var c2 = [2,3,5];
  
  // var t3 = ["XYZ", "XWY", "WXA"];
  // var c3 = [2,3,4];
  
  // solution(t1, c1);
  // console.log("\n");
  // solution(t2, c2);
  // console.log("\n");
  // solution(t3, c3);