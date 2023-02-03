// Remove consecutive vowels from string
// https://www.geeksforgeeks.org/remove-consecutive-vowels-string/?ref=lbp

let str = "geeks for geeks";

const isVowel = (char) => {
  let vowels = "aeiouAEIOU";
  return vowels.includes(char);
};

function removeVowel(str) {
  let inArr = str.split("");
  let i = 0;
  while (i < inArr.length) {
    if (isVowel(inArr[i]) && isVowel(inArr[i+1])) {
      inArr.splice(i, 1);
    } else {
      i++;
    }
  }
  return inArr.join("");
}

console.log(removeVowel(str));
