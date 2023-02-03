// // Aditya Verma
// Given an array, print the Next Greater Element (NGE) for every element.
//  The Next greater Element for an element x is the first greater element on the
//  right side of x in array. Elements
// for which no greater element exist, consider next greater element as -1.

let stock = [100, 80, 60, 70, 60, 75, 85];

function findNGR(arr) {
  let arrStack = [];
  let ngrValues = [];
  let i = 0;
  while (i < arr.length) {
    if (!arrStack.length) {
      ngrValues.push(1);
      arrStack.unshift({ index: i, value: arr[i] });
      i++;
    } else if (arr[i] < arrStack[0].value) {
      ngrValues.push(i - arrStack[0].index);
      arrStack.unshift({index:i,value:arr[i]});
      i++;
    } else if (arrStack[0].value < arr[i]) {
      while (arrStack[0].value < arr[i] && arrStack.length) {
        arrStack.shift();
      }
    }
  }
  return ngrValues;
}

console.log(findNGR(stock));
