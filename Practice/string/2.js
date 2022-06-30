// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// https://www.youtube.com/watch?v=kUp-gqHzk6c

let str1 = "( p((q)) ((s)t) )";
let str2 = "b) (c) ()";

function findDepth(str) {
  let maxDepth = 0;
  let depth = 0;

  let stack = [];

  for (let el of str) {
    depth = stack.length;
    maxDepth = maxDepth < depth ? depth : maxDepth;

    if (el === "(") {
      stack.push(el);
    }
    if (el === ")" && stack.length) {
      stack.pop();
    } else if (el === ")" && stack.length === 0) {
      return -1;
    }
  }

  if (stack.length !== 0) {
    return -1;
  } else {
    return maxDepth;
  }
}

console.log(findDepth(str1));
console.log(findDepth(str2));
