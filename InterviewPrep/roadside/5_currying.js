// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// 😎example1:
// function sum(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(sum(2)(6)(4));

// 😎Example2: Infinte currying
// sum(1)(2)(3)(4)...sum(n)()

// function infinteSum(x) {
//   return function (y) {
//     if (y) {
//       return infinteSum(x + y);
//     } else {
//       return x;
//     }
//   };
// }

// console.log(infinteSum(1)(2)(3)());

// 😎Example3: curry Implementation 
// converts f(a,b,c) to f(a)f(b)f(c)
