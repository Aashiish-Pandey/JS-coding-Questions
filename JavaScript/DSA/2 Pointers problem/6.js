// https://leetcode.com/problems/move-zeroes/

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let inputNums = [0, 1, 0, 3, 12];

let i = 0;
let zeroCount = 0;
while (i < inputNums.length - 1 - zeroCount) {
  if (inputNums[i] === 0) {
    inputNums.splice(i,1);
    inputNums.push(0);
    zeroCount++;
    i++;
  } else {
    i++;
  }
}
console.log(inputNums);
