/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.pointer = 0;
  this.list = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  let chunk = [];
  this.list[idKey - 1] = value;
  while (this.list[this.pointer]) {
    chunk.push(this.list[this.pointer]);
    this.pointer++;
  }
  console.log(chunk)
  return chunk;
};


var os = new OrderedStream(5)

os.insert(3, "ccccc");
os.insert(1, "aaaaa"); 
os.insert(2, "bbbbb");
os.insert(5, "eeeee");
os.insert(4, "ddddd");



// The solution is copied from LeetCode ^^^^
