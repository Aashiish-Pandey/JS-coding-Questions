// 1: count unique element in an array

const arr = [1, 2, 2, 2, 4, 5, 5, 6, 7, 7, 7, 8];

const countUnq = (arr) => {
  let count = 0;

  const arrObj = arr.reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});

  for (let i in arrObj) {
    if (arrObj[i] === 1) {
      count++;
    }
  }

  console.log(arrObj)

  return count;
};

console.log(countUnq(arr));
