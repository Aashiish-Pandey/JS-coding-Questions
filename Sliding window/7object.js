// Longest Substring With Without Repeating Characters | Variable Size Sliding Window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let str = "pwwkew";

function findLSubstring(str) {
  let i = 0;
  let j = 0;
  let countObj = {};
  let max = 0;
  function objLen(obj) {
    return Object.keys(obj).length;
  }

  while (j < str.length) {
    countObj[str[j]] = countObj[str[j]] + 1 || 1;

    if (j - i + 1 < objLen(countObj)) {
      j++;
    } else if (objLen(countObj) === j - i + 1) {
      max = max < j - i + 1 ? j - i + 1 : max;
      j++;
    } else if (objLen(countObj) < j - i + 1) {
      while (objLen(countObj) < j - i + 1) {
        countObj[str[i]] = countObj[str[i]] - 1;
        if (countObj[str[i]] === 0) {
          delete countObj[str[i]];
        }
        i++;
      }
      j++;
    }
  }
  console.log(countObj);
  return max;
}

console.log(findLSubstring(str));
