// https://javascript.info/promise-chaining
// https://www.geeksforgeeks.org/javascript-promise-chaining/
// https://www.freecodecamp.org/news/javascript-promises-explained/#:~:text=Using%20'Then'%20(Promise%20Chaining,promise%20in%20later%20subsequent%20callbacks.

// 😎😎😎😎😎 Example 1 😎😎😎😎
// let promise = new Promise((resolve, reject) => {
//   resolve("Hello Js");
// });

// promise
//   .then(
//     new Promise((resolve, reject) => {
//       resolve("Hello Ashish");
//     }).then((result1) => console.log(result1))
//   )
//   .then((result2) => console.log(result2));

// 😎😎😎😎😎 Example 2 😎😎😎😎

let add = function (x, y) {
  let sum = x + y;

  return new Promise((resolve, reject) => {
    if (sum) {
      resolve(sum);
    } else {
      reject("Could not add two values");
    }
  });
};

let sub = function (x, y) {
  let diff = x - y;

  return new Promise((resolve, reject) => {
    if (diff) {
      resolve(diff);
    } else {
      reject("Could not minus two values");
    }
  });
};

add(5,6)
  .then((added) => sub(added, 1).then((diff) => console.log(diff)))
  .catch((error) => console.log(error));
