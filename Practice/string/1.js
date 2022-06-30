// https://learnersbucket.com/examples/algorithms/check-if-two-string-are-anagram-of-each-other/

let str1 = "ashish";
let str2 = "hsaish";
let str3 = "hsaish12";

function checkAnagram(str1, str2) {
  let countObj = {};
  let i = 0;
  let totalCount = -1;
  while (i < str2.length) {
    countObj[str2[i]] = countObj[str2[i]] + 1 || 1;
    i++;
  }
  totalCount = Object.keys(countObj).length;

  for (let key of str1) {
    if (key in countObj) {
      countObj[key]--;
      if (countObj[key] == 0) {
        totalCount--;
      }
    }
  }

  if (totalCount === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagram(str1, str2));
