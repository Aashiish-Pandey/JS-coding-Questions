// https://www.youtube.com/watch?v=cQ1Oz4ckceM&t=14s
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// https://neetcode.io/practice

// two sum problem , when input array is sorted in  non-decreasing order

let arr = [1, 3, 4, 5, 7, 10, 11];
let target = 9;

const findTwoSum = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  let pair = [];
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum < target) {
      i++;
    } else if (target < sum) {
      j--;
    } else if (target === sum) {
      pair.push(arr[i], arr[j]);
      break;
    }
  }
  return pair;
};

console.log(findTwoSum(arr, target));
