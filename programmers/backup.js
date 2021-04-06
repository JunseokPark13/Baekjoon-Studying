function solution(files) {
  var answer = [];

  const sort_file = (a, b) => {
    let len = a.length > b.length ? a.length : b.length;

    let a_i = -1;
    let b_i = -1;

    let anum;
    let bnum;

    let as = "";
    let bs = "";

    for(let i = 0; i < len; i++)
    {
      if (a_i >= 0 && b_i >= 0)
        break;
      if (("0" <= a[i] && a[i] <= "9") && a_i < 0)
        a_i = i;
      if (("0" <= b[i] && b[i] <= "9") && b_i < 0)
        b_i = i;
      if (a[i].toUpperCase() < b[i].toUpperCase())
        return -1;
      else if (a[i].toUpperCase() > b[i].toUpperCase())
        return 1;
    }
    console.log(a_i, b_i);
  
    for(let i = a_i; i < a.length; i++)
    {
      if (!("0" <= a[i] && a[i] <= "9") || i - a_i == 5)
      {
        anum = parseInt(a.substring(a_i, i));
        as = a.substring(i);
        break;
      }
    }

    for(let i = b_i; i < b.length; i++)
    {
      if (!("0" <= b[i] && b[i] <= "9") || i - b_i == 5)
      {
        bnum = parseInt(b.substring(b_i, i));
        bs = b.substring(i);
        break;
      }
    }

    console.log(anum, bnum, as, bs);
    if (anum < bnum)
      return -1;
    else if (anum > bnum)
      return 1;
    else
      return 0;
  }

  console.log("before : ", files);
  answer = files.sort(sort_file);
  console.log("after  : ", files);
  return answer;
}

solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
console.log("answer : ", ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"])
console.log("\n");

solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])
console.log("answer : ", ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"])
console.log("\n");

solution(["img000121.png", "img000101.png", "img000021.png", "img000011.png", "IMG000011.GIF", "img000021.JPG"])
console.log("answer : ", ["img000011.png", "IMG000011.GIF", "img000021.png", "img000021.JPG", "img000101.png", "img000121.png"])
console.log("\n");