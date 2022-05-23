// 1: count unique element in an array
// 2: remove duplicate
// 3: reversing a String
// 4: reversing indivisual element of an array of string
// 5: Flattning a nested array
// 6:  write code for this function: sum(a)(b)(c)....( n)().
//  This should return the sum of a+b+c....+n.

// const array1 = [1, 4, 9, 3, 16, 4, 9, 4, 9, 4, 9];

// const unqEl = [...new Set(array1)];
// console.log(unqEl);

// const myName = "ashish";

// const revrString = myName.split("").reverse().join("");
// console.log(revrString);

// const peoples = ["ashish", "shubham", "dubey", "prince", "pranjal"];

// const rev = peoples.map((people) => {
//   return people.split("").reverse().join("");
// });

// console.log(rev);

// 6:  write code for this function: sum(a)(b)(c)....( n)().
//  This should return the sum of a+b+c....+n.

// let sum = function (a) {
//   return function(b) {

//     if(b) {
//         return sum(a+b)
//     }  else return a
//   }
// };

// let totalSum = sum(2)(3)(8)(9)();
// console.log(totalSum);

// using ES6 syntax

// let sum = (a) => (b) => {
//   if (b) {
//     return sum(a + b);
//   } else return a;
// };
// let totalSum = sum(2)(3)(8)(9)();
// console.log(totalSum);

// let sum = (a) => (b) => b ? sum(a + b) : a;
// let totalSum = sum(2)(3)(8)(9)();
// console.log(totalSum);

let sum = a => b => b ? sum(a + b) : a;
let totalSum = sum(2)(3)(8)(9)();
console.log(totalSum);
