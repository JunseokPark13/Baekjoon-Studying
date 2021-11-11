/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const ary = new Array(numRows).fill("");

  let col = 0;
  let flag = false;

  for (let c of s) {
    ary[col] += c;
    if (!flag) col++;
    else col--;
    if (col === numRows - 1) flag = true;
    else if (col === 0) flag = false;
  }

  return ary.join("");
};

// var convert = function (s, numRows) {
//     if (numRows === 1) return s;
//     const ary = new Array(numRows).fill(0);
//     for (let i in ary) {
//       ary[i] = new Array(s.length);
//     }

//     let col = 0,
//       row = 0;
//     let flag = false;
//     for (let c of s) {
//       if (col < 0) {
//         flag = false;
//         col += 2;
//         row--;
//       }
//       if (col === numRows) {
//         flag = true;
//         col -= 2;
//         row++;
//       }
//       ary[col][row] = c;
//       if (!flag && col < numRows) col++;
//       if (flag && col >= 0) {
//         col--;
//         row++;
//       }
//     }
//     let res = "";
//     for (let i of ary) {
//       res += i.join("");
//     }
//     return res;
//   };
