// https://javascript.info/async-await

// async function f() {
//   return 1;
// }

// f().then((x) => console.log(x));

// async function f() {
//   return Promise.resolve(2);
// }

// f().then((x) => console.log(x));

// async function f() {
//   let promise = new Promise((resolve, reject) =>
//     setTimeout(() => resolve("Promise resolved"), 2000)
//   );

//   let result = await promise;
//   console.log(result);
// }

// f();

// console.log("hello");

// async function f() {
//   let promise = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Promise rejected"), 2000)
//   );

//   let result = await promise;
//   console.log(result);
// }

// f().catch((error) => console.log(error));

// console.log("hello Promise");

// async function f() {
//   try {
//     let promise = new Promise((resolve, reject) =>
//       setTimeout(() => reject("Promise rejected"), 2000)
//     );

//     let result = await promise;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// f();

// console.log("hello Promise");
