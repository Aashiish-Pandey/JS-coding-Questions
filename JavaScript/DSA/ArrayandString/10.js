// https://takeuforward.org/data-structure/intersection-of-two-sorted-arrays/

const arr1 = [1, 2, 3, 3, 4, 5, 6];
const arr2 = [3, 3, 5];

const findInterSection = (arr1, arr2) => {
  let i = 0,
    j = 0;
  const intersection = [];

  while (i < arr1.length && j < arr2.length) {
    let val1 = arr1[i];
    let val2 = arr2[j];
    if (val1 < val2) {
      i++;
    } else if (val1 === val2) {
      intersection.push(val1);

      i++;
      j++;
    } else {
      j++;
    }
  }
  return intersection;
};

console.log(findInterSection(arr1, arr2));
