// https://leetcode.com/problems/minimum-window-substring/
// Minimum Window Substring | Variable Size Sliding Window

let string1 = "ADOBECODEBANC";
let string2 = "ABC";

const getMapObj = (tarStr) => {
  const mapObj = tarStr.split("").reduce((acc, cv) => {
    if (cv in acc) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});
  return mapObj;
};

function findMinWindow(str, tarStr) {
  let i = 0;
  let j = 0;
  let mapObj = getMapObj(tarStr);
  let unqChar = Object.keys(mapObj).length;
  let minString=Infinity

  while (j < str.length) {
    if (str[j] in mapObj) {
      mapObj[str[j]]--;
      if (mapObj[str[j]] === 0) {
        unqChar--;
      }
    }
    if (unqChar === 0) {
      while (unqChar === 0) {
        minString =
          minString.length < j - i + 1 ? minString : str.slice(i, j + 1);
        // slide
        if (str[i] in mapObj) {
          mapObj[str[i]]++;
          if (mapObj[str[i]] == 1) {
            unqChar++;
          }
        }
        i++;
      }
    }
    if (0 < unqChar) {
      j++;
    }
  }
  return minString===Infinity ? "": minString;
}

console.log(findMinWindow(string1, string2));
