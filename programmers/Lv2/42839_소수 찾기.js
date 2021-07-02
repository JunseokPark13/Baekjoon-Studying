function solution(numbers) {
    let answer = 0;
    let primeNumbers = [];

    const numbersArr = numbers.split("");

    const determinePrime = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
            if (count >= 3) {
                break;
            }
        }
        if (count === 2 && !primeNumbers.includes(num)) {
            primeNumbers.push(num);
        }
    };

    const mergeNumbers = (arr, str) => {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const temp = [...arr];
                temp.splice(i, 1);
                mergeNumbers(temp, str + arr[i]);
            }
        }

        if (str.length > 0) {
            determinePrime(+str);
        }
    };

    mergeNumbers(numbersArr, "");

    answer = primeNumbers.length;
    return answer;
}

function solution(numbers) {
    let answer = 0
  
    const checkPrime = (num) => {
      if (num <= 1) return false;
      if (num == 2) return true;
      for(let i = 2; i < num; i++){
        if (num % i == 0) return false
      }
      return true;
    }
  
    const makeComb = (nAry, comb) => {
      if (comb.length > 0) allComb.add(parseInt(comb))
      if (nAry.length == 0){
        return
      }
      for(let i = 0; i < nAry.length; i++){
        let tmp = nAry.slice();
        tmp.splice(i, 1)
        makeComb(tmp, comb + nAry[i])
      }
    }
  
    let numAry = numbers.split('')
    let allComb = new Set();
    makeComb(numAry, '')
    allComb = [...allComb]
  
    for(let i = 0; i < allComb.length; i++){
      if (checkPrime(allComb[i])) answer++
    }
  
    return answer
  } // 2021-07-01
  
  // https://programmers.co.kr/learn/courses/30/lessons/42839
  
  
  
  console.log("after  : ", solution("17"));
  console.log("answer : ", 3);
  console.log("\n");
  
  console.log("after  : ", solution("011"));
  console.log("answer : ", 2);
  console.log("\n");