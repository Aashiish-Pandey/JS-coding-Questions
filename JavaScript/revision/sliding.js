// Input: s = "ADOBECODEBANC", t = "ABC"

let inStr = "ADOBECODEBANC";
let tarStr = "ABC";

function getObject(tarStr) {
  let tarStrObj = {};
  let i = 0;
  let unqChar = 0;

  while (i < tarStr.length) {
    if (tarStrObj[tarStr[i]]) {
      tarStrObj[tarStr[i]]++;
    } else {
      tarStrObj[tarStr[i]] = 1;
      unqChar++;
    }
    i++;
  }
  return { tarStrObj, unqChar };
}

function findMinSubstr(inStr, tarStr) {
  let outputString = "";
  let i = 0;
  let j = 0;
  let { tarStrObj, unqChar } = getObject(tarStr);

  while (j < inStr.length) {
    if (inStr[j] in tarStrObj) {
      tarStrObj[inStr[j]]--;
      if (tarStrObj[inStr[j]] === 0) {
        unqChar--;
      }
      j++;
    } else {
      j++;
    }
    if (unqChar === 0) {
      while (unqChar === 0) {
        outputString =
          outputString.length < j - i + 1
            ? inStr.slice(i, j + 1)
            : outputString;

        if (inStr[i] in tarStrObj) {
          tarStrObj[inStr[i]]++;
          unqChar++;

          i++;
        }
      }
      j++;
    }
  }
  return outputString;
}

console.log(findMinSubstr(inStr, tarStr));
