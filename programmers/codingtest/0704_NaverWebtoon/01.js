function solution(k, rates) {
  let answer = 0;

  let lastestbuy = 0;
  let profit = k;
  let having = 0;

  let check = 1
  for(let i = 0; i < rates.length - 1; i++){
    if (rates[i] < rates[i + 1]){
      check = 0
      break
    }
  }

  if (check) return k

  for (let i = 0; i < rates.length; i++) {
    if (!having && rates[i] <= profit) {
      if (i + 1 != rates.length && rates[i] > rates[i + 1]) {
        continue;
      } else {
        having = 1;
        lastestbuy = rates[i];
        profit -= rates[i];
        console.log("buy : ", rates[i], "\nprofit : ", profit);
      }
    }
    if (having && lastestbuy < rates[i]) {
      if (i + 1 != rates.length && rates[i] < rates[i + 1]) {
        continue;
      } else {
        having = 0;
        profit += rates[i];
        console.log("sell : ", rates[i], "\nprofit : ", profit)
      }
    }
  }

  //console.log(lastestbuy, profit);

  return profit;
} // 2021-07-04


console.log(
  "after  : ",
  solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])
);
console.log("answer : ", 2150);
console.log("\n");

console.log("after  : ", solution(1500, [1500, 1400, 1300, 1200]));
console.log("answer : ", 1500);
console.log("\n");

console.log("after  : ", solution(1000, [1000, 900, 800, 700, 600, 1500]));
console.log("answer : ", 1900);
console.log("\n");

console.log("after  : ", solution(1000, [1000, 900, 1100, 700, 1200, 800, 1300]));
console.log("answer : ", 0);
console.log("\n");

console.log("after  : ", solution(1000, [1000, 1500, 2000, 1000, 3000, 3500, 4000]));
console.log("answer : ", 0);
console.log("\n");