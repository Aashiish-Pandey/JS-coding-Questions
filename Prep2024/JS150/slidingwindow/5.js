// https://www.geeksforgeeks.org/longest-sub-array-sum-k/
// Problem : (below solution work for array of positive integers only What if array contains neagtive integer also??)

const arr = [10, 5, 2, 7, 1, 0, 0, 0, 9];

let k = 15;

const findLongestArray = (arr, target) => {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxlen = 0;
  let subArr = [];
  while (j < arr.length) {
    sum += arr[j];

    if (sum < target) {
      j++;
    } else if (sum === target) {
      maxlen = maxlen < j - i + 1 ? j - i + 1 : maxlen;
      subArr = arr.slice(i, j + 1);
      j++;
    } else {
      while (target < sum) {
        sum -= arr[i];
        i++;
      }
      j++;
    }
  }

  return { max: maxlen, arr: subArr };
};

console.log(findLongestArray(arr, k));
