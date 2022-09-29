/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// O(jewels.length + stones.length)
let numJewelsInStones1 = function (jewels, stones) {
  let counter = 0;

  // if a is in object, then add it as a property to new object and assign 1
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones.charAt(i) == jewels.charAt(j)) {
        counter++;
        break;
      }
    }
  }

  return counter;
};

// O(jewels.length + stones.length)
let numJewelsInStones2 = function (jewels, stones) {
  const jset = new Set(jewels);

  return stones.split("").filter((stone) => jset.has(stone)).length;
};

console.log(numJewelsInStones2('aA', 'aaBA'))