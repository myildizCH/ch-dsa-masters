/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * 
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */

// Initial approach
/* 
Input: nums = [1,2,3,1,1,3]
Input: nums = [1,1,1,1] -> (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), (2, 3)
               i     j
               counter++
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// First solution O(n^2) time complexity
let numIdenticalPairs1 = function (nums) {
  let counter = 0;
  const t0 = performance.now();

  for (let i = 0; i < nums.length - 1; i++) {
    // O(n²)
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
    }
  }
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  return counter;
};

/*

 duplications = {
    0: 2,
 }

  [0, 0, 0]

*/

// SECOND SOLUTION O(n) complexity
let numIdenticalPairs2 = function (nums) {
  // O(n)
  const duplications = {};

  for (const num of nums) {
    if (duplications[num] === undefined) {
      duplications[num] = 0;
    } else {
      duplications[num]++;
    }
  }

  return Math.sum(...Object.values(duplications));
};
/**
 * [1,2,3,1,1,3]
 * {
 *      0: [3,4],
 *      1: [],
 *      2: [5],
 *      3: [4]
 * }
 */

//---

let numIdenticalPairs2_1 = function (nums) {
  const duplications = {};
  let counter = 0;
  for (const num of nums) {
    console.log(duplications);
    if (duplications[num] === undefined) {
      duplications[num] = 0;
    } else {
      duplications[num]++;
      counter++;
    }
  }

  return counter;
};

console.log(numIdenticalPairs2_1([1, 2, 3, 1, 1, 3]));
