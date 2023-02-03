// Que1: two sum problem
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// https://www.youtube.com/watch?v=KLlXCFG5TnA&t=2s
//https://www.youtube.com/watch?v=cQ1Oz4ckceM

//😀😀😁🤣 First solution using map

// two sum problem
// let nums = [2, 7, 11, 15];
// let target = 9;

// function findTwoSum(arr, target) {
//   let sum = target;

//   let myMap = new Map();
//   let i = 0;
//   while (i < arr.length) {
//     if (!myMap.has(sum - arr[i])) {
//       myMap.set(arr[i], i);
//       i++;
//     } else if (myMap.has(sum - arr[i])) {
//       return [myMap.get(key), i];
//     }
//   }
// }

// console.log(findTwoSum(nums, target));

// 😀😀😁🤣Brute Force solution

// Brute Force

// let numbers = [2, 7, 11, 15];
// let target = 9;
// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if([arr[i]+arr[j]===target]) {
//             return[i+1,j+1]
//         }
//     }
//   }
// };

// 😀😀😁🤣Two Pointer solution {If array is sorted ,we can use this approch}

let numbers = [2, 7, 11, 15];
let target = 9;

function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum < target) {
      i++;
    } else if (sum === target) {
      return [i + 1, j + 1];
    } else {
      j--;
    }
  }
}

console.log(twoSum(numbers, target));
