let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let windowSize = 3;

function findFirstNeagtive(arr, k) {
  let negNum = [];
  let i = 0;
  let j = 0;
  let output = [];

  while (j < arr.length) {
    if (arr[j] < 0) {
      negNum.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      negNum.length ? output.push(negNum[0]) : output.push(0);

      if (negNum.includes(arr[i])) {
        negNum.shift();
      }

      i++;
      j++;
    }
  }

  return output;
}

let myOutput = findFirstNeagtive(arr, windowSize);

console.log(myOutput);
