// 3 sum Problem
// https://leetcode.com/problems/3sum/
// https://www.youtube.com/watch?v=jzZsG8n2R9A&t=313s

let inputArray = [-1, 0, 1, 2, -1, -4];
inputArray.sort((a, b) => a - b);

function findTwoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  let triplet = [];

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum < target) {
      i++;
    } else if (target === sum) {
      triplet.push([-target, arr[i], arr[j]]);
      i++;
      j--;
    } else {
      j--;
    }
  }
  return triplet;
}

const findThreeSum = (arr, target) => {
  let answer = [];
  let i = 0;

  while (i < arr.length - 3) {
    let triplet = findTwoSum(arr.slice(i + 1), -arr[i]);
    answer.push(...triplet);

    while (arr[i] === arr[i + 1]) {
      i++;
    }
    i++;
  }

  return answer;
};

console.log(findThreeSum(inputArray, 0));
