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



// Better aproch 

// Longest Substring With Without Repeating Characters | Variable Size Sliding Window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const findLSubstring = (str) => {
  let i = 0;
  let j = 0;
  const charMap = {};
  let longestSubstr = "";
  while (j < str.length) {
    if (str[j] in charMap) {
      charMap[str[j]]++;
    } else {
      charMap[str[j]] = 1;
    }
    const unqChar = Object.keys(charMap).length;
   if (unqChar === j - i + 1) {
      longestSubstr =
        longestSubstr.length < j - i + 1 ? str.slice(i, j + 1) : longestSubstr;
      j++;
    } else {
      while (j - i + 1 > unqChar) {
        charMap[str[i]]--;
        if (charMap[str[i]] === 0) {
          delete charMap[str[i]];
        }
        i++;
      }
      j++;
    }
  }
  return longestSubstr
};

console.log(findLSubstring(str));

