/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) return false;
  const str = x.toString();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

var isPalindrome = function (x) {
  if (x < 0) return false;
  let num = x,
    rev = 0;
  while (num >= 1) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return x === rev;
};
