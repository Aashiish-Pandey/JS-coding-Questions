// https://leetcode.com/problems/rotate-array/
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
var rotate = function (nums, k) {
  let i = 0;
  while (i < k) {
    nums.splice(0, 0, nums.pop());
    i++;
  }
  return nums;
};

console.log(rotate(nums, k));
