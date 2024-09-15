// Longest Substring With Without Repeating Characters | Variable Size Sliding Window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

let str = "aaaaawsdffdfgwewewegfgsddfsdffweffweffweffwffwfferfefgfefgffwffg3ff3efgf3f3ef3f3e";

function findLongestSubstr(str) {
  let i = 0;
  let j = 0;

  const countUnqChar = (obj) => Object.keys(obj).length;

  let lStr = "";
  let countObj = {};
  while (j < str.length) {
    if (str[j] in countObj) {
      countObj[str[j]]++;
    } else {
      countObj[[str[j]]] = 1;
    }
    //    windowSize =j-i+1
    //    let unqChar =countUnqChar(countObj)

    if (j - i + 1 === countUnqChar(countObj)) {
      lStr = lStr.length < countUnqChar(countObj) ? str.slice(i, j + 1) : lStr;
      j++
    } else if (countUnqChar(countObj) < j-i+1) {
      while (countUnqChar(countObj) < j - i + 1) {
        countObj[str[i]]--;
        if (countObj[str[i]] === 0) {
          delete countObj[str[i]];
        }
        i++;
      }
      j++;
    }
  }

  return lStr
}

console.log(findLongestSubstr(str));
