// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

const findSingleElmnt = (arr) => {
  const arrLen = arr.length;
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  if (arr[arrLen - 1] !== arr[arrLen - 2]) {
    return arr[arrLen - 1];
  }

  let start = 1;
  let end = arrLen - 2;
  let mid = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    } else if (
      (mid % 2 === 0 && arr[mid + 1] === arr[mid]) ||
      (mid % 2 === 1 && arr[mid - 1] === arr[mid])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(findSingleElmnt(nums));
