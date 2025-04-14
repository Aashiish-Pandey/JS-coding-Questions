const arr = [2, 4, 8, 100, 102, 105, 108];
let num = 1000;

const bSearch = (arr, num) => {
  let left = 0;

  let right = arr.length - 1;
  let index = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    console.log('mid',mid)

    if (num === arr[mid]) {
      index = mid;
      console.log("index", index);
      console.log("mid", mid);
      break;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
};

const index = bSearch(arr, num);

if (index === -1) {
  console.log("item is not presnet in the list ");
} else {
  console.log(`item is present at index  ${index}`);
}
