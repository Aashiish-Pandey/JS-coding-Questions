// Given an array of integers, find the closest (not considering distance, but value)
// greater on left of every element.
// If an element has no greater on the left side, print -1

let arr = [1, 3, 2, 4];

const findNextGreater = (arr) => {
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
    } else if (arr[i] < findTop(stack)) {
      outputArray.push(findTop(stack));
      stack.push(arr[i]);
      i++;
    } else if (findTop(stack) < arr[i]) {
      while (findTop(stack) < arr[i]) {
        stack.pop();
      }
    }
  }

  return outputArray;
};

console.log(findNextGreater(arr));
