/**
Link: https://leetcode.com/problems/single-row-keyboard/

Description:
There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
Example 2:

Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73
 

Constraints:

keyboard.length == 26
keyboard contains each English lowercase letter exactly once in some order.
1 <= word.length <= 104
word[i] is an English lowercase letter.
 */

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

// indexOf=> O(n), for loop O(n) Total = O(n^2)
let calculateTime = function (keyboard, word) {
  let sum = keyboard.indexOf(word[0]);

  // find the index number of first and second letters of the word and subtract them
  // then sum the subtracted values
  for (let i = 0; i < word.length - 1; i++) {
    sum += Math.abs(keyboard.indexOf(word[i]) - keyboard.indexOf(word[i + 1]));
  }

  return sum;
};

// O(n) solution with fixed size array
let calculateTime1 = function (keyboard, word) {
  const keyIndices = Array(26).fill(0); // the keyboard size is always 26

  // Get the index for each key. O(n)
  // The idea behind the code below is to use the sequence number of a letter instead of the letter itself
  // Ex: Get me the value of the 15th letter of the alphabet? The value is equal to the index number of keyboard for the given letter.
  for (let i = 0; i < keyboard.length; i++)
    keyIndices[keyboard.charCodeAt(i) - "a".charCodeAt(0)] = i;

    // i -> 0 1 2 3 4...
    // ki-> 15 ki[15]=0

  // Initialize previous index as starting index = 0.
  let prev = 0;
  let result = 0;

  // Calculate the total time. O(n)
  for (const c of word.split("")) {
    // Add the distance from previous index to current letter's index to the result.
    result += Math.abs(prev - keyIndices[c.charCodeAt(0) - "a".charCodeAt(0)]);
    // ki[11]

    // Update the previous index to current index for next iteration.
    prev = keyIndices[c.charCodeAt(0) - "a".charCodeAt(0)];
  }
  
  return result;
};

// O(n) using object
let calculateTime2 = function (keyboard, word) {
  const keyIndices = {} 

  // Get the index for each key. O(n)
  // The idea behind the code below is to use the sequence number of a letter instead of the letter itself
  // Ex: Get me the value of the 15th letter of the alphabet? The value is equal to the index number of keyboard for the given letter.
  for (let i = 0; i < keyboard.length; i++)
    keyIndices[keyboard.charCodeAt(i) - "a".charCodeAt(0)] = i;

  // Initialize previous index as starting index = 0.
  let prev = 0;
  let result = 0;

  // Calculate the total time. O(n)
  for (const c of word.split("")) {
    // Add the distance from previous index to current letter's index to the result.
    result += Math.abs(prev - keyIndices[c.charCodeAt(0) - "a".charCodeAt(0)]);
    // ki[11]

    // Update the previous index to current index for next iteration.
    prev = keyIndices[c.charCodeAt(0) - "a".charCodeAt(0)];
  }

  return result;
};

const keyboard = "pqrstuvwxyzabcdefghijklmno",
  word = "leetcode";

console.log(calculateTime2(keyboard, word));
