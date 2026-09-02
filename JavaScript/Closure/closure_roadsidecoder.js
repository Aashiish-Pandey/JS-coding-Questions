// https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions

// que1:

// function createBase(num) {
//     return function(innerNum) {
//         return num+innerNum
//     }
// }

// console.log(createBase(6)(10))

// 😎😎😎😎Que2: // Make a function to be  executed only once😎😎😎😎😎😎

// let view;
// function outer() {
//   let CallCount = 0;
//   return function () {
//     if (CallCount) {
//       console.log("Already called");
//     } else {
//       view = "Ram Ram";
//       console.log("Hello", view);
//       CallCount++;
//     }
//   };
// }

// const callOnce = outer();
// callOnce();
// callOnce();
// callOnce();

// 😎😎😎😎Que2: // Genric function to Make a function to be  executed only once😎😎😎😎😎😎

// or Polyfill for once() function

function myOnce(func) {
  return function () {
    if (func) {
      func.apply(this, arguments);
      func = null;
    }
  };
}

let print = (name, city) => console.log("Hello", name, city);

let myPrint = myOnce(print);
myPrint("Ashish", "Praygraj");
myPrint("Ashish", "Praygraj");
