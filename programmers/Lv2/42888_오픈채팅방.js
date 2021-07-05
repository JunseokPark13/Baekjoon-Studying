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

  function solution(s) {
    let answer = []
    let log = []
    const Enter = (name) => answer.push(`${name}님이 들어왔습니다.`)
    const Leave = (name) => answer.push(`${name}님이 나갔습니다.`)
  
    let users = {}
  
    for(let i = 0; i < s.length; i++){
      let data = s[i].split(' ')
      log.push(data)
      if (data[0] != 'Leave') users[data[1]] = data[2]
    }
  
    for(let i = 0; i < log.length; i++){
      if (log[i][0] == 'Enter') Enter(users[log[i][1]])
      else if (log[i][0] == 'Leave') Leave(users[log[i][1]])
    }
   return answer
  } // 2021-07-02
  
  // https://programmers.co.kr/learn/courses/30/lessons/42888
  
  
  console.log("after  : ", solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
  console.log("answer : ", ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
  console.log("\n");
  