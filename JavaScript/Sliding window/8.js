// https://leetcode.com/problems/minimum-window-substring/
// Minimum Window Substring | Variable Size Sliding Window

let string1 = "ADOBECODEBANC";
let string2 = "ABC";
function findCount(string2) {
  let countObj = {};
  let k = 0;
  while (k < string2.length) {
    countObj[string2[k]] = countObj[string2[k]] + 1 || 1;
    k++;
  }
  return countObj;
}

function findMinWindow(string1, string2) {
  let i = 0;
  let j = 0;
  let min = 0;
  let countObj = findCount(string2);
  let count = Object.keys(countObj).length;
  console.log(countObj);
  console.log(count);

  while (j < string1.length) {
    // if (count === 0) {
    //   min = j - i + i < min ? j - i + 1 : min;
    // }

    if (string1[j] in countObj) {
      countObj[string1[j]]--;
      if (countObj[string1[j]] === 0) {
        count--;
      }

      if (count === 0) {
        min = j - i + i < min ? j - i + 1 : min;
      }
    }
  }
}

console.log(findMinWindow(string1, string2));
con;
