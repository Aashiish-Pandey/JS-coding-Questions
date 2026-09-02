// Que1 : find all occurence of a substring in a string

let str = "As sly as a fox, as strong as an ox";
let pattrn = "as";

function countOccurance(pattrn, str) {
  let count = 0;

  let startIndex = 0;
  while (str.indexOf(pattrn, startIndex) !== -1) {
    count++;
    startIndex = str.indexOf(pattrn, startIndex) + 1;
  }
  return count;
}

console.log(countOccurance(pattrn, str));
