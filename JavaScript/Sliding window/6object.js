// Longest Substring With K Unique Characters | Variable Size Sliding Window
// https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1

let str = "aabacbebebe";
let k = 3;

function findLSubstring(str, k) {
  let i = 0;
  let j = 0;
  let myObj = {};
  let max = 0;

  while (j < str.length) {
    myObj[str[j]] = myObj[str[j]] + 1 || 1;

    if (Object.keys(myObj).length < k) {
      j++;
    } else if (Object.keys(myObj).length === k) {
      max = max < j - i + 1 ? j - i + 1 : max;
      j++;
    } else if (k < Object.keys(myObj).length) {
      while (k < Object.keys(myObj).length) {
        myObj[str[i]]--;
        if (myObj[str[i]] === 0) {
          delete myObj[str[i]];
        }
        i++;
      }
      j++;
    }
  }
  console.log(myObj);
  return max;
}

console.log(findLSubstring(str, k));
