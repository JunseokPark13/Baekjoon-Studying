function solution(files) {
  var answer = [];

  const sort_file = (a, b) => {
    let len = a.length > b.length ? a.length : b.length;
    let check = 0;
    for(let i = 0; i < len; i++)
    {
      if (("0" <= a[i] && a[i] <= "9") &&
           ("0" <= b[i] && b[i] <= "9"))
      {
        check = i;
        break;
      }
      if (a[i].toUpperCase() < b[i].toUpperCase())
        return -1;
      else if (a[i].toUpperCase() > b[i].toUpperCase())
        return 1;
    }
    let ai = check;
    let bi = check;

    let anum;
    let bnum;

    for(let i = check; i < len; i++)
    {
      if (!("0" <= a[i] && a[i] <= "9"))
      {
        anum = parseInt(a.substring(check, i));
        ai = i;
      }
      if (!("0" <= b[i] && b[i] <= "9"))
      {
        bnum = parseInt(b.substring(check, i));
        bi = i;
      }
    }
    for(let i = check; i < b.length; i++)
    {
      
    }
    console.log(anum, bnum);

    
    return 0; 
  }

  console.log("before : ", files);
  files.sort(sort_file);
  console.log("after  : ", files);
  return answer;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
console.log("answer : ", ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"])
console.log("\n");

solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])
console.log("answer : ", ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"])
console.log("\n");