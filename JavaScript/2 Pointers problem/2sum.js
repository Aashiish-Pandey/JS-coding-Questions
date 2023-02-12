// https://www.youtube.com/watch?v=KLlXCFG5TnA&t=4s

// Aproch 1 Brute Force Approch (complexity O(n**2))

// let arr = [2, 1, 5, 3];
// let target = 4;
// let pair = [];

// const findTwoSum = (arr, target) => {
//   let i = 0;
//   while (i < arr.length) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         pair.push(arr[i], arr[j]);
//       }
//     }
//     i++
//   }
//   return pair.length ? pair : -1;
// };

// console.log(findTwoSum(arr, target));

// 😎Approch 2 (using object) (timeComplexity O(n))😎
// https://neetcode.io/practice
// https://www.youtube.com/watch?v=KLlXCFG5TnA&t=4s

let arr = [2, 1, 5, 3];
let target = 5;
let pair = [];

function findTwoSum(arr, target) {
  let map = {};
  let i = 0;
  let pair = [];
  while (i < arr.length) {
    let tempEl = target - arr[i];
    if (tempEl in map) {
      pair.push(arr[i], tempEl);
      break;
    } else {
      map[arr[i]] = i;
      i++;
    }
  }
  return pair;
}

console.log(findTwoSum(arr, target));


// 😎Approch 3 (using map) (timeComplexity O(n))😎
// https://neetcode.io/practice
// https://www.youtube.com/watch?v=KLlXCFG5TnA&t=4s

