//  Count Occurrences Of Anagrams | Sliding Window
// https://practice.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1


/// very nice Question

let str = "aabaabaa";
let pat = "aaba";

function countPatterEl(pat) {
  let diffChar = 0;
  let obj = pat.split("").reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
      diffChar++;
    }
    return acc;
  }, {});
  return { countPatterChar: obj, diffChar: diffChar };
}

function countAnagram(str, pat) {
  let i = 0;
  let j = 0;
  let totalAnagram = 0;

  let { countPatterChar, diffChar } = countPatterEl(pat);

  while (j < str.length) {
    if (str[j] in countPatterChar) {
      countPatterChar[j]--;
      if (countPatterChar[j] === 0) {
        diffChar--;
      }
    }

    if (j - i + 1 < pat.length) {
      j++;
    } else if (j - i + 1 === pat.length) {
      if (diffChar === 0) {
        totalAnagram++;

        console.log(totalAnagram);
      }
      countPatterChar[i]++;
      i++;
      j++;
    }
  }

  return totalAnagram;
}

console.log(countAnagram(str, pat));
