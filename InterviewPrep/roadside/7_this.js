//😎😎😎😎😎😎 Revise Questions from video

// https://roadsidecoder.hashnode.dev/javascript-interview-questions-this-keyword-output-based-scope-implicit-binding-etc

// https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7

// **What about Arrow Functions? **
// It takes it's this from the outer “normal” function,

// 😎😎😎exp1:
// function makeUser() {
//   return {
//     name: "Ashish",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

// 😎😎😎exp2:

// var length = 4;
// function Callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(Callback);

// 😎😎😎😎😎😎😎😎 EXP3: Important

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiply(b) {
//     this.total *= b;
//     return this;
//   },
//   sub(c) {
//     this.total -= c;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(5).sub(2).add(100);
// console.log(result.total)

// 😎😎😎😎Example 4:

// const user = {
//   name: "Ashish Pandey",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(user.logMessage, 2000);

// setTimeout(() => user.logMessage(), 2000);

// 😎😎😎😎Example 5: part1

// var length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback);

// 😎😎😎exp6

const calc = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  multiply(num) {
    this.total *= num;
    return this;
  },
  substact(num) {
    this.total -= num;
    return this;
  },
};

const result = calc.add(100).multiply(5).substact(30).add(10);
console.log(result.total);
