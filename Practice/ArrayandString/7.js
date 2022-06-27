//flat an array

let arr = [
  [[1, [1.1]], 2, 3],
  [4, 5],
];

// Approch 1
// let flattedArray = arr.flat(Infinity);
// console.log(flattedArray);

// Approch 2

const flatArray = (arr) => {
  let flattedArray = [];

  while (arr.length) {
    let item = arr.pop();

    if (Array.isArray(item)) {
      arr.push(...item);
    } else {
      flattedArray.push(item);
    }
  }
  return flattedArray.reverse();
};

console.log(flatArray(arr));
