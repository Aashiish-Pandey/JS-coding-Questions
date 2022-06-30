// Given an array, print the Next Greater Element (NGE) for every element.
//  The Next greater Element for an element x is the first greater element on the
//  right side of x in array. Elements
// for which no greater element exist, consider next greater element as -1.

// https://www.geeksforgeeks.org/next-greater-element/

// Approch 1 Brute force approch

// Aproch 2 : optimized approch using stack

let arr = [1, 3, 2, 4];

const findNextGreater = (arr) => {
  let outputArray = [];
  let stack = [];
  let i = arr.length - 1;

  const findTop = (stack) => {
    return stack[stack.length - 1];
  };
  while (0 <= i) {
    if (stack.length === 0) {
      outputArray.unshift(-1);
      stack.push(arr[i]);
      i--;
    } else if (arr[i] < findTop(stack)) {
      outputArray.unshift(findTop(stack));
      stack.push(arr[i]);
      i--;
    } else if (findTop(stack) < arr[i]) {
      while (findTop(stack) < arr[i]) {
        stack.pop();
      }
    }
  }

  return outputArray;
};

console.log(findNextGreater(arr));
