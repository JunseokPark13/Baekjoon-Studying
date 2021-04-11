function solution(cacheSize, cities) {
  var answer = 0;

  if (cacheSize == 0)
    return (cities.length * 5);

  var cache = new Array(cacheSize);
  var recentUse = new Array(cacheSize);
  recentUse.fill(0);
  var cacheIndex = 0;

  for (let i = 0; i < cities.length; i++)
  {
    if (cache.indexOf(cities[i].toUpperCase()) < 0)
    {
      let cnt = 0;
      while (Math.min.apply(null, recentUse) != recentUse[(cacheIndex % cacheSize)])
      {
        if (cnt == cacheSize)
        {
          console.log("break!");
          break;
        }
        cacheIndex = ++cacheIndex % cacheSize;
        cnt++;
      }
      //console.log(cache[(cacheIndex % cacheSize)],  recentUse[(cacheIndex++ % cacheSize)]);
      cache[(cacheIndex % cacheSize)] = cities[i].toUpperCase();
      recentUse[(cacheIndex++ % cacheSize)] = 1;
      answer += 5;
    }
    else
    {
      recentUse[cache.indexOf(cities[i].toUpperCase())]++;
      answer += 1;
    }
    //console.log(i ,cache, recentUse)
  }
  //console.log(recentUse);

  return answer;
}


var cities;

cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

console.log("after  : ", solution(3, cities));
console.log("answer : ", 50);
console.log("\n");

cities = 	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
console.log("after  : ", solution(3, cities));
console.log("answer : ", 21);
console.log("\n");

cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
console.log("after  : ", solution(2, cities));
console.log("answer : ", 60);
console.log("\n");

cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"];
console.log("after  : ", solution(5, cities));
console.log("answer : ", 52);
console.log("\n");

cities = ["Jeju", "Pangyo", "NewYork", "newyork"];
console.log("after  : ", solution(2, cities));
console.log("answer : ", 16);
console.log("\n");

cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
console.log("after  : ", solution(0, cities));
console.log("answer : ", 25);
console.log("\n");

cities = ["SEOUL", "SEOUL", "SEOUL"];
console.log("after  : ", solution(5, cities));
console.log("answer : ", 7);
console.log("\n");

cities = ["A", "B", "C", "A", "C", "D"];
// 5 5 5 1 1 5
console.log("after  : ", solution(3, cities));
console.log("answer : ", 22);
console.log("\n");

cities = ["A", "B", "A", "B", "A", "B"];
console.log("after  : ", solution(8, cities));
console.log("answer : ", 14);
console.log("\n");


