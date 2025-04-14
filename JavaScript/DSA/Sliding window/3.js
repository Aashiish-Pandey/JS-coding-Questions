//  Count Occurrences Of Anagrams | Sliding Window
// https://practice.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1

/// very nice Question

let str = "aabaabaa";
let pat = "aaba";

function getPatObj(pat) {
  let obj = pat.split("").reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});
  return obj;
}

function countAnagram(str, pat) {
  let i = 0;
  let j = 0;
  let patObj = getPatObj(pat);
  let unqChar = Object.keys(patObj).length;
  let k = pat.length;
  let count = 0;

  while (j < str.length) {
    if (str[j] in patObj) {
      patObj[str[j]]--;
      if (patObj[str[j]] === 0) {
        unqChar--;
      }
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (unqChar === 0) {
        count++;
      }
      patObj[str[i]]++;
      if (patObj[str[i]] === 1) {
        unqChar++;
      }
      i++;

      j++;
    }
  }
  return count;
}

console.log(countAnagram(str, pat));
