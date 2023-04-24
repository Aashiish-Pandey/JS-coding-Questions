let str = "As sly as a fox, as strong as an ox";

let tarStr = "as";

function findOccurance(str, tarStr) {
  str = str.toLowerCase();
  let count = 0;
  let startIndex = 0;

  while (startIndex !== -1) {
    startIndex = str.indexOf(tarStr, startIndex);

    if (startIndex !== -1) {
      count++;
      startIndex++;
    }
  }
  return count;
}

console.log(findOccurance(str, tarStr));
