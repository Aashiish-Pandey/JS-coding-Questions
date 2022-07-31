// Aditya Verma
// Given an array of integers, find the closest
//  (not considering distance, but value) smaller on left of every element.
// If an element has no smaller on the left side, print -1 .

let arr = [4, 5, 2, 10, 8];

const findNextSmaller = (arr) => {
  let outputArray = [];
  let stack = [];
  let i = 0;

  const findTop = (stack) => {
    return stack[stack.length - 1];
  };
  while (i < arr.length) {
    if (stack.length === 0) {
      outputArray.push(-1);
      stack.push(arr[i]);
      i++;
    } else if (arr[i] > findTop(stack)) {
      outputArray.push(findTop(stack));
      stack.push(arr[i]);
      i++;
    } else if (findTop(stack) > arr[i]) {
      while (findTop(stack) > arr[i]) {
        stack.pop();
      }
    }
  }

  return outputArray;
};

console.log(findNextSmaller(arr));
