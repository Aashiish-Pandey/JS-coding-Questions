//https://javascript.info/string
// string methods : toLowerCase() and toUpperCase()  str.length  , str.indexOf(substr, pos).
// str.includes(substr, pos) 
//There are 3 methods in JavaScript to get a substring: substring, substr and slice.
// A lowercase letter is always greater than the uppercase: alert( 'a' > 'Z' ); // true
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

// Que1 : find all occurence of a substring in a string

let str = "As sly as a fox, as strong as an ox";

let tarStr = "as";
let startPoint = 0;
while (true) {
  let res = str.indexOf(tarStr, startPoint);

  if (res !== -1) {
    console.log(res);
    startPoint = res + 1;
  } else {
    break;
  }
}
