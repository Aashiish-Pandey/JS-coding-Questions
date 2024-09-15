// https://takeuforward.org/data-structure/union-of-two-sorted-arrays/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const findUnion = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let union = [];
  while (i < n1 && j < n2) {
    if (arr1[i] === arr2[j]) {
      union.push(arr1[i]);
      i++;
      j++;
    } else if (arr2[j] < arr1[i]) {
      if (arr2[j] !== union[union.length - 1]) {
        union.push(arr2[j]);
      }

      j++;
    } else if (arr1[i] < arr2[j]) {
      if (arr1[i] !== union[union.length - 1]) {
        union.push(arr1[i]);
      }

      i++;
    }
  }
  if (i !== n1) {
    while (i < n1) {
      if (arr1[i] !== union[union.length - 1]) {
        union.push(arr1[i]);
      }
      i++;
    }
  }
  if (j !== n2) {
    while (j < n2) {
      if (arr2[j] !== union[union.length - 1]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }
  return union;
};

console.log(findUnion(arr1, arr2));
