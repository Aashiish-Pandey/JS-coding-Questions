// https://leetcode.com/problems/minimum-window-substring/
// Minimum Window Substring | Variable Size Sliding Window
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

const s = "ADOBECODEBANC";
const t = "ABC";

const getPatFreq = (str) => {
  const patMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (patMap.has(str[i])) {
      patMap.set(str[i], patMap.get(str[i]) + 1);
    } else {
      patMap.set(str[i], 1);
    }
  }

  return patMap;
};
const findMinWindowSubstring = (str, pat) => {
  let i = 0;
  let j = 0;
  let startWindow = 0;
  let endWindow = 0;
  let patFreq = getPatFreq(pat);
  let unqChar = patFreq.size;
  let minWindow = Infinity;

  while (j < str.length) {
    let ws = j - i + 1;

    let char = str[j];

    if (patFreq.has(char)) {
      patFreq.set(char, patFreq.get(char) - 1);
      if (patFreq.get(char) === 0) {
        unqChar--;
      }
    }
    if (unqChar === 0) {
      while (unqChar === 0) {
        if (ws < minWindow) {
          startWindow = i;
          endWindow = j;
          minWindow = j - i + 1;
        }
        if (patFreq.has(str[i])) {
          let prevValue = patFreq.get(str[i]);
          patFreq.set(str[i], patFreq.get(str[i]) + 1);
          if (prevValue === 0) {
            unqChar++;
          }
        }
        i++;
        ws = j - i + 1;
      }
    }
    j++;
  }

  return { str: str.slice(startWindow, endWindow + 1) };
};

console.log(findMinWindowSubstring(s, t));
