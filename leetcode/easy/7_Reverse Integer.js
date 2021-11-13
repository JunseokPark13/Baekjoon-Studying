/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let num = x < 0 ? x * -1 + "" : x + "";
  num = parseInt(num.split("").reverse().join(""));
  num = x < 0 ? num * -1 : num;
  if (num > Math.pow(2, 31) || num < Math.pow(2, 31) * -1) return 0;
  return num;
};
