function solution(m, musicinfos) {
    var answer = "";
    let musiclen = 0;
  
    const checkTime = (time1, time2) => {
      let t1 = time1.split(":");
      let t2 = time2.split(":");
      return (
        parseInt(t2[0]) * 60 +
        parseInt(t2[1]) -
        (parseInt(t1[0]) * 60 + parseInt(t1[1]))
      );
    };
  
    const changeMelody = (mel) => {
      let newmel = "";
      let dict = { C: "0", D: "1", F: "2", G: "3", A: "4" };
      for (let i = 0; i < mel.length; i++) {
        if (dict.hasOwnProperty(mel[i]) && mel[i + 1] == "#") {
          newmel += dict[mel[i]];
        } else if (mel[i] != "#") {
          newmel += mel[i];
        }
      }
      return newmel;
    };
  
    const makeMusic = (infos) => {
      let infoary = infos.split(",");
      infoary[3] = changeMelody(infoary[3]);
      let samplelen = infoary[3].length;
      let time = checkTime(infoary[0], infoary[1]);
      if (time > samplelen) {
        let k = 0;
        for (let i = 0; i < time - samplelen; i++) {
          infoary[3] += infoary[3][k++];
          if (k == samplelen) k = 0;
        }
      } else if (time < samplelen) {
        infoary[3] = infoary[3].substring(0, time);
      }
      let parsedInfo = {
        time: time,
        fullmusic: infoary[3],
        name: infoary[2],
      };
      return parsedInfo;
    };
  
    let parsedInfos = musicinfos.map((info) => makeMusic(info));
    m = changeMelody(m);
    for (let info of parsedInfos) {
      if (info.fullmusic.includes(m) && info.time > musiclen) {
        answer = info.name;
        musiclen = info.time;
      }
    }
  
    if (answer.length === 0) return "(None)";
    else return answer;
  } // 2021-06-17
  
  // https://programmers.co.kr/learn/courses/30/lessons/17683
  
  console.log(
    "solution : ",
    solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
  );
  console.log("answer   : ", "HELLO");
  console.log("\n");
  
  console.log(
    "solution : ",
    solution("CC#BCC#BCC#BCC#B", [
      "03:00,03:30,FOO,CC#B",
      "04:00,04:08,BAR,CC#BCC#BCC#B",
    ])
  );
  console.log("answer   : ", "FOO");
  console.log("\n");
  
  console.log(
    "solution : ",
    solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
  );
  console.log("answer   : ", "WORLD");
  console.log("\n");
