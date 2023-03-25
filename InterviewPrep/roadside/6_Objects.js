// https://roadsidecoder.hashnode.dev/javascript-interview-questions-objects-output-based-destructuring-object

// using dynamic key

// const color = "red";
// const name = "Ram Ram";

// const user = {
//   [color]: name,
// };

// console.log(user);

//exp2:

// let user = {
//   name: "ashish",
//   mob: 8800,
//   addrs: "Pryagraj",
// };

// for (let key in user) {
//   console.log(user[key]);
// }

// exp3:

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyByTwo(nums) {
//   for (let key in nums) {
//     if(typeof nums[key]==="number"){
//       nums[key] = nums[key] * 2;
//     }
//   }
//   return nums;
// }

// console.log(multiplyByTwo(nums));

// exp4:  find the output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 126;
a[c] = 540;

console.log(a[b]); // ????
console.log(a[c])//??
console.log(a)

// exp5
