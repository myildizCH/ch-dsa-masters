/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const table = {};

  // create keys
  const keySet = new Set();
  for (let i = 0; i < key.length; i++) {
    if (key[i] !== " ") keySet.add(key[i]);
  }

  const iterator = keySet.values();

  // create a substitution table
  for (let i = 0; i < keySet.size; i++) {
    table[iterator.next().value] = String.fromCharCode(97 + i);
  }

  // decode the message
  let result = "";
  for (let i = 0; i < message.length; i++) {
    result += table[message[i]] || " ";
  }

  return result;
};

const key = "the quick brown fox jumps over the lazy dog";
const message = "vkbs bs t suepuv";

console.log(decodeMessage(key, message));
