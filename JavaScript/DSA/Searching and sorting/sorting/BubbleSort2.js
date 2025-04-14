// BubbleSort using recursion

const arr = [64, 34, 25, 12, 22, 11, 90];
const n = arr.length;

const helperSort = (arr, start, end, swap) => {
  console.log("1array", arr);

  if (end === 0) {
    return;
  }

  if (arr[start] > arr[start + 1]) {
    [arr[start], arr[start + 1]] = [arr[start + 1], arr[start]];
    swap = true;
  }
  if (start + 1 === end) {
    if (!swap) {
      return;
    }

    helperSort(arr, 0, end - 1, false);
  } else {
    helperSort(arr, start + 1, end, swap);
  }
};

const sortArray = (arr) => {
  helperSort(arr, 0, arr.length - 1, false);
  console.log(arr);
};

sortArray(arr);
console.log("arr after sort", arr);
