// with using extra space

const arr = [8, 3, 4, 12, 5, 6];

const mergeSortedArray = (arr1, arr2) => {
  let combinedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      combinedArray[k] = arr1[i];
      k++;
      i++;
    } else {
      combinedArray[k] = arr2[j];
      k++;
      j++;
    }
  }
  while (i < arr1.length) {
    combinedArray[k] = arr1[i];
    k++;
    i++;
  }
  while (j < arr2.length) {
    combinedArray[k] = arr2[j];
    k++;
    j++;
  }

  return combinedArray;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);
  let leftSorted = mergeSort(leftArray);
  let righSorted = mergeSort(rightArray);
  return mergeSortedArray(leftSorted, righSorted);
};

console.log(mergeSort(arr));
