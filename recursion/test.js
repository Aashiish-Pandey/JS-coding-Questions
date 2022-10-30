var reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i = 0;
  let j = s.length - 1;
  let newStr = [];
  while (i < j && i<s.length) {
    if (vowels.includes(s[i])) {
      if (!vowels.includes(s[j])) {
        while (!vowels.includes(s[j])) {
          newStr[j] = s[j];
          j--;
        }
      } else if (vowels.includes(s[j])) {
        newStr[i] = s[j];
        newStr[j] = s[i];
        i++;
        j--;
      }
    } else {
      newStr[i] = s[i];
      i++;
    }
  }
  return newStr.join('')
};
