// https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/ 
// Missing and Repeating number in 1 to n array 

let arr = [2, 3, 1, 8, 2, 3, 5, 1];

function swap(arr, val1, val2) {
  //[arr[val1], arr[val2]] = [arr[val2], arr[val1]];

  let temp = arr[val1];
  arr[val1] = arr[val2];
  arr[val2] = temp;
}

function swapSort(arr) {
  let i = 0;
  let j = 0;
  let repeating = [];
  let missed = [];

  while (i < arr.length) {
    if (arr[i] !== arr[arr[i] - 1]) {
      swap(arr, i, arr[i] - 1);
    } else {
      i++;
    }
  }

  while (j < arr.length) {
    if (arr[j] === j + 1) {
      j++;
    } else {
      missed.push(j + 1);
      repeating.push(arr[j]);
      j++;
    }
  }
  return { repeating, missed };
}

console.log(swapSort(arr));
