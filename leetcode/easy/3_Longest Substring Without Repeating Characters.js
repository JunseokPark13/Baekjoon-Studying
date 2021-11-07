/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let idx = str.indexOf(s[i]);
    if (idx > -1) str = str.substring(idx + 1);
    str += s[i];
    if (max < str.length) max = str.length;
  }
  return max;
};
