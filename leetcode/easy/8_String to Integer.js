/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const min = Math.pow(2, 31) * -1;
  const max = Math.pow(2, 31) - 1;
  let flag = 1;
  s = s.trimLeft();
  if (s[0] === "-" || s[0] === "+") {
    if (s[0] === "-") flag = -1;
    s = s.substring(1);
  }
  let ans = 0;
  for (let i in s) {
    if (!s[i].match(/[0-9]/)) break;
    ans *= 10;
    ans += Number(s[i]);
  }
  ans *= flag;
  // let ans = Number(s) * flag
  if (ans < min) return min;
  if (max < ans) return max;
  return ans;
};
