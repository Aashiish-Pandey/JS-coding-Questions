///******** Beautiful Question ********/

// Aditya Verma
// Stock Span Problem
// https://www.geeksforgeeks.org/the-stock-span-problem/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

let arr = [100, 80, 60, 70, 60, 75, 85];

function nearestGreater(arr) {
  let stack = [];
  let output = [];
  let i = 0;

  const findTop = (stack) => {
    return stack[stack.length - 1];
  };
  while (i < arr.length) {
    if (!stack.length) {
      output.push(1);
      stack.push({ index: i, value: arr[i] });
      i++;
    } else if (arr[i] < findTop(stack).value) {
      output.push(i - findTop(stack).index);
      stack.push({ index: i, value: arr[i] });
      i++;
    } else if (findTop(stack).value < arr[i]) {
      while (findTop(stack).value < arr[i]) {
        stack.pop();
      }
    }
  }

  return output;
}

console.log(nearestGreater(arr));
