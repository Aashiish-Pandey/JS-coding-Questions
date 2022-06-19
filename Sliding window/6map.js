// Longest Substring With K Unique Characters | Variable Size Sliding Window
// https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
let str = "aabacbebebe";
let k = 3;

function findLongestsubStr(str, k) {
  let i = 0;
  let j = 0;
  const myMap = new Map();
  let max = 0;

  while (j < str.length) {
    myMap.set(str[j], myMap.get(str[j]) + 1 || 1);

    if (myMap.size < 3) {
      j++;
    } else if (myMap.size === 3) {
      max = max < j - i + 1 ? j - i + 1 : max;
      j++;
    } else if (3 < myMap.size) {
      while (3 < myMap.size) {
        myMap.set(str[i], myMap.get(str[i]) - 1);
        if (myMap.get(str[i]) === 0) {
          myMap.delete(str[i]);
        }
        i++;
      }
      j++;
    }
  }
  console.log(myMap);
  return max;
}

console.log(findLongestsubStr(str, k));
