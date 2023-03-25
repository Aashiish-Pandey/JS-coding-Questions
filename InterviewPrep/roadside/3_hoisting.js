// https://www.youtube.com/watch?v=btwFJT_xzdg&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=3

// Hoisting, Scope, Callback, Arrow Functions etc

// IIFE (immedietly invoked function expression) (work on it)

// exp1:

// (function (name) {
//   console.log(name);
// })("ashish");

// exp2:

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(4);
