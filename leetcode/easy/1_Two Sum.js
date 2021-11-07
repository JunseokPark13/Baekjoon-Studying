var twoSum = function (nums, target) {
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) return [i, j]
  //     }
  // }

  // const map = new Map();
  // for(let i = 0; i < nums.length; i++) {
  //     if (map.has(target - nums[i])) {
  //         return [map.get(target - nums[i]), i]
  //     }
  //     map.set(nums[i], i)
  // }

  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dic) {
      return [dic[target - nums[i]], i];
    }
    dic[nums[i]] = i;
  }
};
