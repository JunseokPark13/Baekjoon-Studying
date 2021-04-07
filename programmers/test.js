function solution(m, musicinfos) {
  var answer = '';
  var max_t = -1;

  var dict = {"C#" : "1", "D#" : "2", "F#" : "3", "G#" : "4", "A#" : "5"};

  const convert_str = (str) =>{
    let conv = "";
    for(let i = 0; i < str.length; i++)
    {
     if (str[i + 1] == "#")
        conv += dict[str[i++] + "#"];
     else
        conv += str[i];
    }
    return conv;
  }

  const cal_time = (str) =>{
    let time = str.split(":");
    return parseInt(time[0]) * 60 + parseInt(time[1]); 
  }

  m = convert_str(m);

  for(let i in musicinfos)
  {
    let info = musicinfos[i].split(",");
    let sub_t = cal_time(info[1]) - cal_time(info[0]);

    info[3] = convert_str(info[3]);

    let melody = info[3];
    
    if (melody.length < sub_t)
      for(let i = 0; i < sub_t - info[3].length; i++)
        melody += info[3][i % info[3].length];
    else if (melody.length > sub_t)
      melody = melody.substr(0, sub_t)

    if (melody.indexOf(m) >= 0 && sub_t > max_t)
    {
        max_t = sub_t;
        answer = info[2];
    }
  }

  if (max_t == -1)
    answer = "(None)";

  return answer;
}

solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
console.log("answer : ", "HELLO")
console.log("\n");

solution("CC#BCC#BCC#BCC#B", 	["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"])
console.log("answer : ", "FOO")
console.log("\n");

solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
console.log("answer : ", "WORLD")
console.log("\n");

solution("ABC", ["00:00,00:05,HI,ABC#ABC"])
console.log("answer : ", "(None)")
console.log("\n");