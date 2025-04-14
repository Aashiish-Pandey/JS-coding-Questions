let arr = [-1, 0, 1, 2, -1, -4];

const findTwoSum = (arr, i, j, target) => {
  let sum;
  let twoSum = [];
  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum < target) {
      i++;
    } else if (target === sum) {
      twoSum.push([arr[i], arr[j]]);
      i++;
      j--;
    } else {
      j--;
    }
  }
  return twoSum;
};

const threeSum = (arr) => {
  let target = 0;
  let i = 0;
  let j = arr.length - 1;
  arr.sort((a, b) => a - b);
  let threeSomeObj = {};
  let answer = [];

  while (i < arr.length) {
    let twoSum = findTwoSum(arr, i + 1, j, target - arr[i]);
    if (twoSum.length) {
      console.log("twosum", twoSum);
      twoSum.forEach((twoSumArr) => {
        let key = [...twoSumArr, arr[i]].join("");
        threeSomeObj[key] = [...twoSumArr, arr[i]];
      });
    }
    i++;
  }
  for (let i in threeSomeObj) {
    answer.push(threeSomeObj[i]);
  }
  return answer;
};

console.log("answer", threeSum(arr));
