function solution(record) {
    var answer = [];
    var list = [];
    var rec = [];
  
    for(let i = 0; i <record.length; i++)
        rec.push(record[i].split(" "));
  
    for(let i = 0; i < rec.length; i++)
    {
      if (rec[i][0] == "Leave")
        continue;
      let name = list[rec[i][1]];
      if (name == undefined)
        list[rec[i][1]] = rec[i][2];
      else if (rec[i][0] != "Leave" && name != rec[i][2]);
        list[rec[i][1]] = rec[i][2];
    }
  
    for(let i = 0; i < rec.length; i++)
    {
      if (rec[i][0] == "Change")
        continue;
      let name = list[rec[i][1]];
      if (rec[i][0] == "Enter")
        answer.push(name + "님이 들어왔습니다.");
      else if (rec[i][0] == "Leave")
        answer.push(name + "님이 나갔습니다.");
    }
    return answer;
  }

  // https://programmers.co.kr/learn/courses/30/lessons/42888
  