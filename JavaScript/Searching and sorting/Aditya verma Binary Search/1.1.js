//Find the  smallest element in rotated sorted array

// Aproch1

// const arr = [13, 15, 18, 1, 2, 3, 6, 12];

// const smallestEl = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = -1;
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);

//     if (mid !== 0 && mid !== arr.length - 1) {
//       if (arr[mid] <= arr[mid - 1] && arr[mid] <= arr[mid + 1]) {
//         return mid;
//       } else if (arr[start] > arr[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     } else if (
//       (mid === 0 && arr[mid + 1] >= arr[mid]) ||
//       (mid === arr.length - 1 && arr[mid - 1] >= arr[mid])
//     ) {
//       return mid;
//     }
//   }
//   return mid;
// };

// console.log(smallestEl(arr));

// Approch2 {Better}

const arr = [13, 15, 18, 1, 2, 3, 6, 12];

const findMin = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = Infinity;
  let mid = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[start] <= arr[mid]) {
      ans = arr[start]<ans?arr[start]:ans
      start = mid + 1;
    } else {
        ans = arr[mid]<ans?arr[mid]:ans
      end = mid - 1;
    }
  }
  return ans
};


console.log(findMin(arr))