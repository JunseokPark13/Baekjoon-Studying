function solution(files) {
    var answer = [];
  
    const sort_file = (a, b) => {
      let a_head, b_head;
      let a_mid, b_mid;
      let a_num, b_num;
  
      a_mid = a.indexOf((a.match(/[0-9]/)));
      b_mid = b.indexOf((b.match(/[0-9]/)));
  
      a_head = a.substring(0, a_mid);
      b_head = b.substring(0, b_mid);
      a_num = parseInt(a.substring(a_mid));
      b_num = parseInt(b.substring(b_mid));
  
      if ((a_head.toUpperCase()).localeCompare(b_head.toUpperCase()) < 0)
        return -1;
      else if ((a_head.toUpperCase()).localeCompare(b_head.toUpperCase()) > 0)
        return 1;
      else
      {    
        if (a_num < b_num)
          return -1;
        else if (a_num > b_num)
          return 1;
        else
          return 0;
      }
    }
  
    answer = files.sort(sort_file);
    return answer;
}

  // https://programmers.co.kr/learn/courses/30/lessons/17686
  
//   solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
//   console.log("answer : ", ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"])
//   console.log("\n");
  
//   solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])
//   console.log("answer : ", ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"])
//   console.log("\n");
  
//   solution(["img000121.png", "img000101.png", "img000021.png", "img000011.png", "IMG000011.GIF", "img000021.JPG"])
//   console.log("answer : ", ["img000011.png", "IMG000011.GIF", "img000021.png", "img000021.JPG", "img000101.png", "img000121.png"])
//   console.log("\n");