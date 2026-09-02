// Piping-1
// Success rate: 14.29%
// Given an object which can have a function as a value at a nested level,
// create a function that will accept arguments as input and pass it through
// all the functions in the input object and return the computed value.

// Example

// Example
// Input:
// {
//   a : {
//     b : (a,b,c) => a+b+c,
//     c : (a,b,c) => a+b-c,
//   },
//   d : (a,b,c) => a-b-c
// }

// const output = pipe(obj)(1,1,1);
// console.log(output);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }

const inObj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

// const pipe = (obj) => {
//   return function (...args) {
//     const result = {};

//     function solve(obj) {
//       for (let [key ,value] of Object.entries(obj)) {
//         if (typeof value === "function") {
//           result[key] = value.apply(null, args);
//         } else if (value !== null && typeof value === "object") {
//             result[key]=solve(value)
//         }
//       }
      
//     }

//     solve(obj);

//     return result;
//   };
// };
const pipe = (obj) => {
  return function (...args) {
    function solve(currentObj) {
      const result = {}; // 👈 NEW result per level

      for (let [key, value] of Object.entries(currentObj)) {
        if (typeof value === "function") {
          result[key] = value(...args);
        } else if (value !== null && typeof value === "object") {
          result[key] = solve(value); // 👈 recursion returns object
        }
      }

      return result;
    }

    return solve(obj);
  };
};



console.log(pipe(inObj)(1,1,1))


