// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
// https://www.youtube.com/watch?v=jzZsG8n2R9A

let arr = [12, 3, 4, 1, 6, 9];
let sum = 24;
function findTwoSum(arr, i, j, target) {
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === target) {
      return [arr[i], arr[j]];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
}

function findThreeSum(arr, sum) {
  let triplet = [];
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length - 2) {
    let twoSum = findTwoSum(arr, i + 1, j, sum - arr[i]);
    if (twoSum) {
      return [...twoSum, arr[i]];
    }
    i++;
  }
}

console.log(findThreeSum(arr, sum));
