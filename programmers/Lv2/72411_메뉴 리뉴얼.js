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
  


  function solution(orders, course) {
    let answer = []
  
    course.sort((a, b) => a - b);
    let max = course[course.length - 1];
    let allCourse = {}
    let maxCourse = {}
  
    for(let i of course) maxCourse[i] = 0;
    
    const makeComb = (set, order, comb, n) => {
      if (course.includes(comb.length)) set.add(comb);
      if (n == order.length || comb.length == max) return
      let comb_t = comb + order[n]
      makeComb(set, order, comb, n + 1)
      makeComb(set, order, comb_t, n + 1)
    }
  
    for(let order of orders){
      let set = new Set();
      let arr = order.split('').sort()
      makeComb(set, arr, '', 0);
      for(let i of set){
        if (allCourse[i] == undefined) allCourse[i] = 1;
        else allCourse[i]++;
      }
    }
  
    for(let i in allCourse){
      if (maxCourse[i.length] < allCourse[i] && allCourse[i] > 1) maxCourse[i.length] = allCourse[i]
    }
    for(let i in allCourse){
      if (allCourse[i] == maxCourse[i.length]) answer.push(i);
    }
  
    return answer.sort();
  } // 2021-06-30
  
  // https://programmers.co.kr/learn/courses/30/lessons/72411