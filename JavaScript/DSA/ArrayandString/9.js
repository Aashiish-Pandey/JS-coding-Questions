// https://takeuforward.org/data-structure/union-of-two-sorted-arrays/

// Union of two sorted array

const arr1 = [1, 2, 3, 4, 5,6,6];
const arr2 = [2, 3, 4, 4, 5,9,9];

const union = [];

const findUnion = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] === arr2[j]) {
      if (union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
      j++;
    } else {
      if (union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  return union;
};

console.log(findUnion(arr1, arr2));
