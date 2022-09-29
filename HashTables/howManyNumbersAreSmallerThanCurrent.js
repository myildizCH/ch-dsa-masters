let smallerNumbersThanCurrent = function (nums) {
  const count = Array(101).fill(0);
  const res = new Array(nums.length);

  for (const element of nums) {
    count[element]++;
  }

  for (let i = 1; i <= 100; i++) {
    count[i] = count[i] + count[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) res[i] = 0;
    else res[i] = count[nums[i] - 1];
  }

  return res;
};

let smallerNumbersThanCurrent1 = function (nums) { // Time complexity: O(nlogn) better than O(n^2)
  // keep originally provided array
  const originalArray = [...nums];

  // sort the array which is passed in O(nlogn) 
  nums.sort((a, b) => a - b);

  // loop the original array elements and map the index number of sorted array
  return originalArray.map((element) => nums.indexOf(element));
};

// O(n) solution (dynamic programming solution, copied from Leetcode)
let smallerNumbersThanCurrent2 = function (nums) {
    const frequencies = new Array(101).fill(0);
    const smaller = new Array(101).fill(0);

    nums.forEach((num) => frequencies[num]++);

    for (let i = 1; i < 101; i++) {
      smaller[i] = smaller[i - 1] + frequencies[i - 1];
    }

    return nums.map((num) => smaller[num]);
}

const numbers = [8, 1, 2, 2, 3];
//              [ 1, 2, 2, 3, 8 ]
console.log(smallerNumbersThanCurrent2(numbers));
