// https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
// https://www.youtube.com/watch?v=xFJXtB5vSmM&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=7

// Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6]

const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k = 3;

const findMax = (arr, k) => {
  const maxArray = [];
  let max = -Infinity;

  let i = 0;
  let j = 0;
  while (j < arr.length) {
    if (arr[j] > max) {
      max = arr[j];
    }
    if (j - i + 1 < k) {
      j++;
    } else {
      maxArray.push(max);
      i++;
      j++;
    }
  }
  return maxArray;
};

console.log(findMax(arr,3))
