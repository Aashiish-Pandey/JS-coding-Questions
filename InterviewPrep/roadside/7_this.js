// https://roadsidecoder.hashnode.dev/javascript-interview-questions-this-keyword-output-based-scope-implicit-binding-etc

// exp1:
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

// exp2:

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

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total *= b;
    return this;
  },
  sub(c) {
    this.total -= c;
    return this;
  },
};

const result = calc.add(10).multiply(5).sub(2).add(100);
console.log(result.total)
