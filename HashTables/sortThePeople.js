/**
 * https://leetcode.com/problems/sort-the-people/
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// Sorting is not guaranteed this way
var sortPeople = function (names, heights) {
  const people = {};

  // Create hash map out of height and name key value pair
  for (let i = 0; i < names.length; i++) {
    people[heights[i]] = names[i];
  }

  // Objects provide keys in ascending order when keys are number
  // Assing the heights to names in opposite order to achive sorting
  // Time complexity O(n)
  let i = names.length - 1;
  for (const key of Object.keys(people)) {
    names[i--] = people[key];
  }

  return names;
};

// Bubble sort -> O(n^2) max
var sortPeople1 = function (names, heights) {
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < names.length; j++) {
      if (heights[j + 1] > heights[j]) {
        let tempName = names[j];
        names[j] = names[j + 1];
        names[j + 1] = tempName;

        let tempHeight = heights[j];
        heights[j] = heights[j + 1];
        heights[j + 1] = tempHeight;
      }
    }
  }

  return names;
};

const names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];

console.log(sortPeople1(names, heights));
