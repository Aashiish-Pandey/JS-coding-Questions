// First negative integer in every window of size k

// https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1


// Bruit Force approch

// function findFirstNeg(arr, k) {
//   let i = 0;
//   let j = 0;
//   let ans = [];
//   let negNum;
//   while (i < arr.length - 2) {
//     negNum = 0;
//     for (j = i; j - i + 1 <= k; j++) {
//       if (arr[j] < 0) {
//         negNum = arr[j];

//         break;
//       }
//     }
//     ans.push(negNum);
//     i++;
//   }
//   return ans;
// }

// console.log(findFirstNeg(arr, windowSize));

// Sliding Window approch


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

      if (arr[i] === negNum[0]) {
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
