// Que1: https://leetcode.com/problems/reverse-vowels-of-a-string/

// approch1
// var reverseVowels = function (s) {
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let i = 0;
//   let j = s.length - 1;
//   let newStr = [];
//   while (i <= j && i < s.length) {
//     if (vowels.includes(s[i])) {
//       if (!vowels.includes(s[j])) {
//         while (!vowels.includes(s[j])) {
//           newStr[j] = s[j];
//           j--;
//         }
//       } else if (vowels.includes(s[j])) {
//         newStr[i] = s[j];
//         newStr[j] = s[i];
//         i++;
//         j--;
//       }
//     } else {
//       newStr[i] = s[i];
//       i++;
//     }
//   }
//   return newStr.join("");
// };

// console.log(reverseVowels("Hello"));

// // approch2

const isVowel = (char) => {
  let vowels = "aeiou";
  return (
    vowels.includes(char.toUpperCase()) || vowels.includes(char.toLowerCase())
  );
};

let reverseVowels = function (s) {
  let inArr = s.split("");
  let i = 0;
  let j = inArr.length - 1;
  while (i < j && i < inArr.length) {
    if (!isVowel(inArr[i])) {
      i++;
    } else {
      if (!isVowel(inArr[j])) {
        while (!isVowel(inArr[j])) {
          j--;
        }
      }
      // Swap two values 
      [inArr[i], inArr[j]] = [inArr[j], inArr[i]];

      i++;
      j--;
    }
  }
  return inArr.join("");
};

console.log(reverseVowels("Hello"));
