// two sum problem
let nums = [2, 7, 11, 15];
let target = 9;

function findTwoSum(arr, target) {
  let sum = target;

  let myMap = new Map();
  let i = 0;
  while (i < arr.length) {
    if (!myMap.has(sum - arr[i])) {
      myMap.set(arr[i], i);
      i++;
    } else if (myMap.has(sum - arr[i])) {
      return [myMap.get(key), i];
    }
  }
}

console.log(findTwoSum(nums, target));
