// https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/
// https://javascript.info/bind
// https://www.youtube.com/watch?v=vQcCNpuaJO8

// function calculateVolume(l, b, h) {
//   return l * b * h;
// }

// console.log(calculateVolume(2, 3, 4));

// 😎😎😎😎 calculating volume using currying 😎😎😎😎

// function calculateVolume(l) {
//   return function (b) {
//     return function (h) {
//       return l * b * h;
//     };
//   };
// }

// let volume = calculateVolume(2)(3)(4);
// console.log(volume);

// 😎😎😎😎 Currying using bind() akshay saini 😎😎😎😎

// let multiply = function(x,y) {

//     console.log(x*y)
// }

// let multiplyByTwo = multiply.bind(this,2)

// multiplyByTwo(5);

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByThree = multiply.bind(this, 3);

// multiplyByThree(4);

// let multiply = function(x, y) {

//     console.log(x*y)
// }

// let myFunction = multiply.bind(this,2,3)

// myFunction(9)

// 😎😎😎😎 Currying using closure akshay saini 😎😎😎😎

// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// multiply(2)(3)

// 😎😎😎😎 Currying Question by akshay saini 😎😎😎😎

// write code for this function: sum(a)(b)(c)....( n)().
// //  This should return the sum of a+b+c....+n.

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)(5)(6)());
