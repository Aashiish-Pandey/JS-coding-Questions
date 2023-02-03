// Maximum Sum Subarray of size K | Sliding Window

// Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
// https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

let arr = [2, 5, 1, 8, 2, 9];
let windowSize = 3;

function maxSubArray(inArr, k) {
  let i = 0;
  let j = 0;
  let maxSum = 0;
  let sum = 0;

  while (j < inArr.length) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      maxSum = maxSum < sum ? sum : maxSum;

      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  console.log(maxSum);
  return maxSum;
}

console.log(maxSubArray(arr, windowSize));
