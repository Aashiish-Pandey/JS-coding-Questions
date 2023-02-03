// Program to remove vowels from a String
// https://www.geeksforgeeks.org/program-remove-vowels-string/

let s = "welcome to geeksforgeeks";

const isVowel = (char) => {
  let vowels = "aeiouAEIOU";
  return vowels.includes(char);
};

function removeVowel(inStr) {
  let inArr = inStr.split("");
  let i = 0;
  while (i < inArr.length) {
    if (isVowel(inArr[i])) {
      inArr.splice(i, 1);
    } else {
      i++;
    }
  }
  return inArr.join("");
}

console.log(removeVowel(s));
