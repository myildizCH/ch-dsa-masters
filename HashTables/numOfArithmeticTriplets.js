/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// O(n^2)
var arithmeticTriplets = function (nums, diff) {
  let counter = 0;
  for (const num of nums) {
    if (nums.includes(num + diff) && nums.includes(num + 2 * diff)) {
      counter++;
    }
  }
  return counter;
};

// O(n)
var arithmeticTriplets1 = function (nums, diff) {
  const numMap = new Map();
  nums.forEach((e) => numMap.set(e, e));

  let counter = 0;
  numMap.forEach((k) => {
    if (numMap.get(k + diff) && numMap.get(k + 2 * diff)) counter++;
  });

  return counter;
};

const nums = [4, 5, 6, 7, 8, 9],
  diff = 2;
console.log(arithmeticTriplets1(nums, diff));
