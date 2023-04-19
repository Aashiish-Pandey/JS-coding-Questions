// https://roadsidecoder.hashnode.dev/javascript-interview-questions-objects-output-based-destructuring-object

// https://javascript.info/object


//😎😎😎😎 In short, there are no limitations on property names. 
// They can be any strings or symbols (a special type for identifiers, to be covered later).

// 😎Other types are automatically converted to strings.

// For instance, a number 0 becomes a string "0" when used as a property key:

// let obj = {
//   0: "test" // same as "0": "test"
// };
//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎//😎😎😎😎
// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

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
