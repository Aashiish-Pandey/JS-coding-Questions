// check if array is sorted:

// let arr = [1, 2, 4, 5];

// function checkSort(arr) {
//   if (arr.length === 0 || arr.length === 1) {
//     return;
//   }

//   if (arr[0] > arr[1]) {
//     return false;
//   } else {
//     checkSort(arr.slice(1));
//   }

//   return true;
// }

// checkSort(arr) ? console.log("sorted") : console.log("Not sorted");

// Binary Search

let arr = [1, 6, 10, 14, 18];
let key = 4;
let start = 0;
let end = arr.length - 1;

function binarySearch(arr, key) {
  if (start > end) {
    console.log("element not found");
    return;
  } else {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      console.log(`Element is present at ${mid} position`);
      return;
    } else if (arr[mid] < key) {
      start = mid + 1;
      binarySearch(arr, key);
    } else if (key < arr[mid]) {
      end = mid - 1;
      binarySearch(arr, key);
    }
  }
}

binarySearch(arr, key);
