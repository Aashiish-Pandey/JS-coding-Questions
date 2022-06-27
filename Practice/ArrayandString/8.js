//https://leetcode.com/problems/find-pivot-index/
//https://www.youtube.com/watch?v=u89i60lYx8U

// Aproch1 : Brute Force Approch
// let arr = [1, 7, 3, 6, 5, 6];

// function findSum(arr) {
//   let sum = arr.reduce((acc, cv) => acc + cv);
//   return sum;
// }

// function findPivot(arr) {
//   let i = 1;
//   let pivot = 0;

//   while (i < arr.length - 1) {
//     let lSum = findSum(arr.slice(0, i));
//     let rSum = findSum(arr.slice(i + 1));

//     if (lSum === rSum) {
//       return i;
//     }
//     i++;
//   }
// }

// console.log(findPivot(arr));

// Approch2 😀😀😀😀😀😀 optimzed way

let arr = [1, 7, 3, 6, 5, 6];

function findPivot(arr) {
  let total = arr.reduce((acc, cv) => acc + cv);
  let i = 0;
  let leftSum = 0;
  let pivot = 0;
  let rightSum = Infinity;
  while (i < arr.length) {
    leftSum += pivot;
    pivot = arr[i];
    rightSum = total-pivot - leftSum;
    if (leftSum === rightSum) {
      return i
    }
    i++;
  }
}

console.log(findPivot(arr));
