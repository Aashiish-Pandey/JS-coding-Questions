// https://leetcode.com/problems/valid-parentheses/
// https://www.youtube.com/watch?v=WTzjTskDFMg&list=PLot-Xpze53lfxD6l5pAGvCD4nPvWKU8Qo

// Approch1

let str1 = "(){}[]";
let str2 = "(]";
let str3 = "[((()))]";

let myMap = new Map();

myMap.set(")", "(").set("}", "{").set("]", "[");

const checkBlncPranthesis = (str) => {
  let stack = [];
  let i = 0;

  const stackTop = (stack) => stack[stack.length - 1];

  if (str[0] === ")" || str[0] === "}" || str[0] === "]") {
    return false;
  }
  while (i < str.length) {
    if (!stack.length) {
      stack.push(str[i]);
    } else if (stackTop(stack) === myMap.get(str[i])) {
      stack.pop();
    } else if (stackTop(stack) !== myMap.get(str[i])) {
      stack.push(str[i]);
    }
    i++;
  }

  if (!stack.length) {
    return true;
  } else return false;
};

checkBlncPranthesis(str3)
  ? console.log("Balanced")
  : console.log("Not Balanced");


  //😎😎😎😎😎 Better Approch 
