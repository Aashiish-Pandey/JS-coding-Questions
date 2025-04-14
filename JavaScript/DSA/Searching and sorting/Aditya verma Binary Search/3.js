// Find Floor of an element in a Sorted Array
// https://www.geeksforgeeks.org/floor-in-a-sorted-array/

let arr = [1, 2, 8, 10, 10, 12, 19];
let x = 5;

const findFloor = (arr, x) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  let mid = -1;
  while (end >= start) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] <= x) {
      ans = arr[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans
};

console.log(findFloor(arr,0))
