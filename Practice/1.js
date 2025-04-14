const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 by using slice method
// const splitArray = (arr, chunkSize) => {
//   const chunkedArr = [];
//    let start = 0
//    let end = chunkSize
//   while (start < arr.length) {
//     chunkedArr.push(arr.slice(start ,end ));
//     start = end
//     end=end+chunkSize
//   }
//   return chunkedArr;
// };

// console.log(splitArray(arr, 3));

// **2 by using splice method

// const splitArray = (arr, chunkSize) => {
//   const chunkedArr = [];
//   let start = 0;
//   while (arr.length) {
//     chunkedArr.push(arr.splice(start, chunkSize));
//   }
//   return chunkedArr;
// };

// console.log(splitArray(arr, 3));

// 3 without using any inbuilt method

const splitArray = (arr, chunkSize) => {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    let start = i;
    let end = start + chunkSize;
    let tempArr = [];
    while (start < end) {
      tempArr.push(arr[start]);

      start++;
      if (!arr[start]) {
        break;
      }
    }
    chunkedArr.push(tempArr);
    i += chunkSize;
  }
  return chunkedArr;
};

console.log(splitArray(arr, 3));
