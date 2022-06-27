// Find least frequent number from an array
// https://learnersbucket.com/examples/algorithms/find-least-frequent-number-from-an-array/

let arr = [2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 5, 5, 5, 6, 6];

const findMin = (arr) => {
  let arrObj = arr.reduce((acc, cv) => {
    acc[cv] = acc[cv] + 1 || 1;
    return acc;
  }, {});

  let min = Infinity;
  let minIndex = 0;

  for (let i in arrObj) {
    if (arrObj[i] < min) {
      min = arrObj[i];
      minIndex = i;
    }
  }

  return { minValue: minIndex, count: min };
};

console.log(findMin(arr));
