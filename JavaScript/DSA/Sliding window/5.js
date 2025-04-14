// https://www.geeksforgeeks.org/longest-sub-array-sum-k/
// Problem : (below solution work for array of positive integers only What if array contains neagtive integer also??)

let arr = [10, 5, 2, 7, 1, 9];
let inSum = 15;

function finMaxSubArray(arr, maxSum) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxArray = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    if (sum < maxSum) {
      j++;
    } else if (sum === maxSum) {
      maxArray = maxArray < j - i + 1 ? j - i + 1 : maxArray;
      sum = sum - arr[i];
      i++;
      j++;
    } else if (maxSum < sum) {
      while (maxSum < sum) {
        sum = sum - arr[i];
        i++;
      }
      j++;
    }
  }
  return maxArray;
}

console.log(finMaxSubArray(arr, inSum));
