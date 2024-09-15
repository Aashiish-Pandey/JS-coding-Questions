//  Count Occurrences Of Anagrams | Sliding Window
// https://practice.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1

/// very nice Question

const txt = "aabaabaa";
const pat = "aaba";

const countAnagram = (str, pat) => {
  let count = 0;

  let i = 0;
  let j = 0;
  let patObj = pat.split("").reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});
  let unqChar = Object.keys(patObj).length;

  while (j < str.length) {
    let char = str[j];
    if (char in patObj) {
      patObj[char]--;
      if (patObj[char] === 0) {
        unqChar--;
      }
    }
    if (j - i + 1 < pat.length) {
      j++;
    } else if (j - i + 1 === pat.length) {
      if (unqChar === 0) {
        count++;

        patObj[str[i]]++;
        if (patObj[str[i]] === 1) {
          unqChar++;
        }
      }
      i++;
      j++;
    }
  }
  return count;
};

console.log(countAnagram(txt, pat));
