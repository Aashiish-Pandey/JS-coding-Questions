// First negative integer in every window of size k

// https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const windowSize = 3;
function findFirstNeg(arr, windowSize) {
  let i = 0;
  let j = 0;
  let negArr = [];
  let ans = [];
  while (j < arr.length) {
    if (arr[j] < 0) {
      negArr.push(arr[j]);
    }
    if (j - i + 1 < windowSize) {
      j++;
    } else if (j - i + 1 === windowSize) {
      if (negArr.length) {
        ans.push(negArr[0]);
        let negNum = negArr[0];
        if (arr[i] === negNum) {
          negArr.shift();
        }
      } else {
        ans.push(0);
      }
      i++;
      j++;
    }
  }
  return ans;
}

console.log(findFirstNeg(arr, windowSize));
