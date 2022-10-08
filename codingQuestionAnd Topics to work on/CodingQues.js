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

// let sum = a => b => b ? sum(a + b) : a;
// let totalSum = sum(2)(3)(8)(9)();
// console.log(totalSum);

let str1 = "ashish";
function temp(str1) {
  str1[0] = "b";
  console.log(str1[0])
  console.log(str1);
}
console.log(str1);
temp(str1);
console.log(str1);
