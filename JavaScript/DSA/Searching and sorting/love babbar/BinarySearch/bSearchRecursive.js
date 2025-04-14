const arr = [2, 4, 8, 100, 102, 105, 108];
let num = 108;

const solve = (arr, num, left, right) => {
  //   console.log( left, right ,mid)

  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === num) {
    return mid;
  } else if (num > arr[mid]) {
    return solve(arr, num, mid + 1, right);
  } else {
    return solve(arr, num, left, mid - 1);
  }
};

function bSearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  return solve(arr, num, 0, arr.length - 1);
}

const index = bSearch(arr, num);
if (index === -1) {
  console.log("item is not present in the list");
} else {
  console.log(`item is present at index ${index}`);
}
