// // String and array

// // Que1:

// let str = "As sly as a fox, as strong as an ox";
// let pattrn = "as";

// function countOccurance(pattrn, str) {
//     let  count =0

//     let startIndex =0
//     while(str.indexOf(pattrn,startIndex)!==-1) {
//         count++
//         startIndex = str.indexOf(pattrn,startIndex)+1

//     }
//     return count

// }

// console.log(countOccurance(pattrn,str));

// Que 2: Check Anagram

let str1 = "ashish";
let str2 = "hsaish";
let str3 = "hsaish12";

function stringObj(str) {
  let strObj = str.split("").reduce((acc, cv) => {
    if (acc[cv]) {
      acc[cv]++;
    } else {
      acc[cv] = 1;
    }
    return acc;
  }, {});
  return strObj;
}

function checkAnagram(str1, str2) {
  let strObj1 = stringObj(str1);
  let unqChar = Object.keys(strObj1).length;
  let i = 0;

  for (let key of str2) {
    if (strObj1[key]) {
      strObj1[key]--;
      if (strObj1[key] === 0) {
        unqChar--;
      }
    } else {
        return false 
    }
  }
  return unqChar ? false : true;
}

console.log(checkAnagram(str1, str2));
