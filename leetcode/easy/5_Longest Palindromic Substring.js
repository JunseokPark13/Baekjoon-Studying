/**
 * @param {string} s
 * @return {string}
 */

const checkPalindrom = (s, li, ri) => {
  while (li >= 0 && ri < s.length) {
    if (s[li] !== s[ri]) break;
    li--;
    ri++;
  }
  return [li + 1, ri];
};

const getLen = (ary) => ary[1] - ary[0];

var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let longest = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let odd = checkPalindrom(s, i, i + 2);
    let even = checkPalindrom(s, i, i + 1);
    let longer = getLen(odd) > getLen(even) ? odd : even;
    longest = getLen(longest) < getLen(longer) ? longer : longest;
  }

  return s.substring(longest[0], longest[1]);
};
